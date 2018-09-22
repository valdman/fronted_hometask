import {getJson} from './workingWithNetwork';
function reducer(accumulator, currentValue) {
    if (typeof(currentValue) === 'object' && typeof(currentValue.id) != 'undefined'){
        return accumulator.concat({
            id: currentValue.id,
            url: currentValue.url,
            description: currentValue.description,
            creatingTime: currentValue.creatingTime
        });
    }    
    else {
        return accumulator;
    }
}
export function getParams (arrayWithPageNames) {
    const requests = arrayWithPageNames.map((value) => getJson(value));
    return (Promise.all(requests)
    .then(jsonResults => jsonResults.reduce(reducer, [])))
}