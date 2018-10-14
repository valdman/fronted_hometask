import fetch from 'node-fetch';
import { seekInfo, pushInfo } from './dataHandler';

export const lodtask = (baseLink) => {

    function requestTree(page) {
        return fetch(`${baseLink}/${page}`)
            .then((res) => res.json())
            .catch(err => {
                console.log(err);
            })
    };

    function sendAll(req) {
        return Promise.all(req)   
    }

    function sendReq(url) {
        return fetch(url)
            .then(res => res.json())
            .then((res) =>  pushInfo(res, baseLink))
            .catch((err) => {
                console.log("Unable to fetch or JSONify page with url: ", err)
            });
    }

    return requestTree("tree")
        .then(res =>  seekInfo(res, baseLink))
        .then(arr => sendAll(arr.map((value) => sendReq(value.url))))
}
