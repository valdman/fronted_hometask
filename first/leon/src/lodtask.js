import fetch from 'node-fetch';

export const lodtask = () => {
    //main array
    const ans = [];
    
    const requestApi = (page) => {
        //Main request to "tree"
        return fetch(`https://fund.mipt.ru/api/pages/${page}`)
        .then((res) => res.json())
        .then(res => {
            //Organizing/Assembling main skeleton flat array
             seekInfo(res);
             return ans
            }
        )
        .then(arr => {
            //preparing list of f() that return promises 
            const requests = arr.map((value) => sendReq(value.url, ans.indexOf(value)));
            
            return sendAll(requests);
            console.log("i should not be here");
        })
        .then(() => ans)
        .catch(err => {
            //В принципе сюда ни одна ошибка не должна добраться, тк все хендлится внутри 
            console.log("Yet another broken page: ", err);
            return "Something is bad in requastApi catch";//Promise.resolve([]);
        })
    };

    function seekInfo(obj, parentStr = "") {
        //gathering info in tree
        /*
        Тут можно по-разномы добывать url. Либо так как я сделал,
         либо после в эпизоде с конкретным запросом на сервер с id (тк API может отвечать тупо по номеру стр).
          Так мне кажется даже легче.
        */
        let info = {
            id: obj.id,
            name: obj.pageName,
            url: `https://fund.mipt.ru/api/pages${parentStr.length>0 ? '/' + parentStr : ''}/${obj.pageName}`,
        };
        ans.push(info);
        //function will seek new objects untill nodes are empty
        if(obj.nodes.length > 0) {
            for(let i = 0; i<obj.nodes.length; i++){
                seekInfo(obj.nodes[i], parentStr.length>0 ?  parentStr+"/"+ obj.pageName: obj.pageName);
            }
        }
    }

    function sendAll(req) {
        return Promise.all(req)
        //then and catch for debug 
            .then(res => {
                return "ok"
            })
            .catch(() => {
                return "Somthing is bad in send all catch"
            });
    }

    function sendReq(url, index) {
        //console.log(url);
        return fetch(url)
        .then(res => res.json())
        .then(({creatingTime, description}) => {
            /*
              You can take URL from the deconstructor actually)
            */
            ans[index].creatingTime = creatingTime;
            ans[index].description = description;
        })
        .catch((err) => {
            console.log("Unable to fetch or JSONify page with url: ", url)
        });
    }
    
    return requestApi("tree");
}