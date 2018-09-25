import fetch from "node-fetch";

export const baseURL = "https://fund.mipt.ru/api/pages";

export const requestTree  = (page) => {
    const finalURL = `${baseURL}/${page}`
    return fetch(`${finalURL}`)
    .then(res => res.json())
    .catch(err => {
        console.log("Yet another broken page: ", err);
    })
}

export const requestLink  = (link) => {
    return fetch(`${link}`)
    .then(res => res.json())
    .catch(err => {
        console.log("Yet another broken page: ", err);
    })
}