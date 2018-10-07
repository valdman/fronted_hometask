import fetch from 'node-fetch';
import {getAllPaths} from './getAllPaths.js';
import {createRequests} from './createRequests.js';

export const lodtask = (link) => {
    return fetch(`${link}/tree`)
        .then(res => res.json())
        .then(data => data.nodes)
        .then(nodes => getAllPaths(link, nodes))
        .then(paths => createRequests(paths))
        .then(requests => Promise.all(requests))
        .catch(err => err.message);
}

