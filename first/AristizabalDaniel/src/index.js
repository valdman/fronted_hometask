import fetch from 'node-fetch';
import {getAllURL} from './analize.js';
import {prepare} from './prepare.js';

    APILink("https://fund.mipt.ru/api/pages/tree"); 

    export function APILink(link) { // convert the data to json 
        fetch(link)
        .then(response => response.json())
        .then(data => getAllURL(data)) // take all the ids through getALLURL method 
        .then(data => take(data, "https://fund.mipt.ru/api/pages"))
        .catch(err => console.log(`got an error ${err}`));
    }
    
     const take = (paths, url) => {
        fetch(url)
            .then(response => response.json())  
            .then(data => prepare(paths, data)) 
            .then(data => console.log(data))
            .catch(err => console.log(` got an error ${err}`));
        }