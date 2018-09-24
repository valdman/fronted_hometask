import {getJson} from './parseJson'
export function outPutJson (array) {
    const requests = array.map((value) => getJson(value));
    return Promise.all(requests)
            .then(res => {
            const newUrl = res.reduce((previous, current) => previous.concat(current), [])

            return newUrl.map(r => ({
                id: r.id,
                url: r.url,
                description: r.description,
                creatingTime: r.creatingTime,
                }));
            });
}
