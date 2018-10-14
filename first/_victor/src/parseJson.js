import fetch from 'node-fetch';
export let array = [];

export function getJson (link){
    return fetch(`https://fund.mipt.ru/api/pages${link}`)
    .then((res)=> res.json());
}


export function choosePageName (nodes, url){
    var value;
    for (var key in nodes) {
        value = nodes[key];
        if(value.id !== 0){
            if (typeof(value) === 'string'){
                url +=  value  + "/";
            }
            else if (typeof(value) === 'object'){
                if (array.indexOf(url)===-1){
                    array.push(url);
                }
                choosePageName(value, url);
            }
        }
        
    }
    return array;
}

