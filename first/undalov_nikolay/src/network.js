import fetch from 'node-fetch';

export const request = (url) =>{
    return fetch(url)
    .then(res => { return res.json()} )
    .catch(err => {
        return Promise.resolve([]);
    })
};