import fetch from 'node-fetch';

export function getJson(params) {
    return fetch(`https://fund.mipt.ru/api/pages${params}`)
    .then((result) => result.json())
    .catch((error) => console.log(`failed to convert to JSON, page name value: ${params}`))
}