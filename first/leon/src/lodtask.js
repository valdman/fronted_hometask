import fetch from 'node-fetch';
import { seekInfo, pushInfo } from './dataHandler';
import { baseLink } from './index';

export const lodtask = () => {

    function requestTree(page) {
        return fetch(`${baseLink}/${page}`)
            .then((res) => res.json())
            .catch(err => {
                console.log(err);
            })
    };

    function sendAll(req) {
        return Promise.all(req)
            .then((res) => {
                return res
            })
    }

    function sendReq(url) {
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                return pushInfo(res);
            })
            .catch((err) => {
                console.log("Unable to fetch or JSONify page with url: ", err)
            });
    }

    return requestTree("tree")
        .then(res => {
            return seekInfo(res);
        })
        .then(arr => {
            return sendAll(arr.map((value) => sendReq(value.url)));
        })
}
