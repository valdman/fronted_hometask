import fetch from 'node-fetch';
import { seekInfo, pushInfo } from './dataHandler';
import { baseLink } from './index';

export const lodtask = () => {
    const ans = [];


    function requestTree(page) {
        return fetch(`${baseLink}/${page}`)
            .then((res) => res.json())
            .catch(err => {
                console.log(err);
            })
    };

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
                //console.log(pushInfo(res, index));
                ans.push(pushInfo(res, index));
                //console.log(ans);
            })
            .catch((err) => {
                console.log("Unable to fetch or JSONify page with url: ", url)
            });
    }

    return requestTree("tree")
        .then(res => {
            //console.log("lol", seekInfo(res));
            return seekInfo(res);
            //return ans
        })
        .then(arr => {
            return sendAll(arr.map((value, id) => sendReq(value.url, id)));
        })
        .then(() => ans)
}
