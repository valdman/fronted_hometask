import fetch from 'node-fetch';

export const lodtask = ({link}) => {
    const requestApi = (link, path) => {
        return fetch(link + path)
            .then(res => res.json())
            .then(({id, url, description, creatingTime}) => {
                return {
                    id,
                    url,
                    description,
                    creatingTime
                }
            })
    }

    function getAllPaths(nodes) {
        let paths = [];

        (function searchPaths(nodesArr, beginPath) {
            nodesArr.forEach(({nodes, pageName}) => {
                nodes.length ?
                    searchPaths(nodes, `${beginPath}/${pageName}`) :
                    paths.push(`${beginPath}/${pageName}`);
            })
        })(nodes, "");

        return paths;
    }

    return fetch(`${link}/tree`)
        .then(res => res.json())
        .then(data => data.nodes)
        .then(nodes => getAllPaths(nodes))
        .then(paths => {
            return [...Array(paths.length).keys()].map(value => requestApi(link, paths[value]));
        })
        .then(requests => {
            return Promise.all(requests)
        })
        .catch(err => err.message);
}

