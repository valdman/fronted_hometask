import fetch from 'node-fetch';

const requestApi = (path) => {
    return fetch(path)
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

export const createRequests = (paths) => {
    return [...Array(paths.length).keys()].map(value => requestApi(paths[value]))
}