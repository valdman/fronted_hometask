
import fetch from 'node-fetch';
import {getAllURL} from './analize.js';
import {take} from './take.js';
let paths = [];
    export function APILink(link) { // convert the data to json 
        fetch(link)
        .then(response => response.json())
        .then(data => getAllURL(data)) // take all the ids through getALLURL method 
        .then(paths => take(paths, "https://fund.mipt.ru/api/pages")) //  the paths array  and url to take  
      
    }

