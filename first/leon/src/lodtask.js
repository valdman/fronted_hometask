import fetch from 'node-fetch';

export const lodtask = () => {
    const ans = [];
    const baseLink = "https://fund.mipt.ru/api/pages";
    
    function requestTree(page) {
        return fetch(`${baseLink}/${page}`)
        .then((res) => res.json())
        .catch(err => {
            console.log(err);
        })
    };

    function seekInfo(obj, parentStr = "") {
        const info = {
            id: obj.id,
            name: obj.pageName,
            url: `${baseLink}${parentStr.length>0 ? '/' + parentStr : ''}/${obj.pageName}`,
        };
        ans.push(info);
        obj.nodes.map((elt) => {seekInfo(elt, parentStr.length>0 ?  parentStr+"/"+ obj.pageName: obj.pageName)})
     
    }

    function sendAll(req) {
        return Promise.all(req)
            .then(() => {
                return "ok"
            })
    }

    function sendReq(url, index) {
        return fetch(url)
        .then(res => res.json())
        .then(res => {
            pushInfo(res, index);
        })
        .catch((err) => {
            console.log("Unable to fetch or JSONify page with url: ", url)
        });
    }

    function pushInfo({creatingTime, description, url}, index) {
         ans[index].creatingTime = creatingTime;
         ans[index].description = description;
         ans[index].url2 = `${baseLink}/${url?url:''}`;
    }

    return requestTree("tree")
            .then(res => {
                seekInfo(res);
                return ans
            })
            .then(arr => {
                return sendAll(arr.map((value, id) => sendReq(value.url, id)));
            })
            .then(() => ans)
}
