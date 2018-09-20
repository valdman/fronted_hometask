import fetch from 'node-fetch';
import { request } from 'https';

export const lodtask = ({link}) => {
    const requestApi = (link, path) => {
        return fetch(link + path)
            .then(res => res.json())
            .then(data => {
                return {
                    id: data.id,
                    url: data.url,
                    description: data.description,
                    creatingTime: data.creatingTime
                }
            })
    }

    return fetch(`${link}/tree`)
        .then(res => res.json())
        .then(data => data.nodes)
        .then(nodes => {
            let paths = [];

            function searchPaths(nodesArr, beginPath) {
                nodesArr.forEach(node => {
                    if (node.nodes.length) {
                        searchPaths(node.nodes, `${beginPath}/${node.pageName}`);
                    } else {
                        paths.push(`${beginPath}/${node.pageName}`);
                    }
                })
            };

            searchPaths(nodes, "");

            return paths;
        })
        .then(paths => {
            return [...Array(paths.length).keys()].map(value => requestApi(link, paths[value]));
        })
        .then(requests => {
            return Promise.all(requests)
        })
}

