import fetch from 'node-fetch';
import {prepare} from './prepare.js';

export const take = (paths, url) => {
    fetch(url)
        .then(response => response.json())  
        .then(data => prepare(paths, data)) //  take all the json and send it to prepare function that separe the data and mix it. 
        .then(data => console.log(data)); // print the resultant array from prepare method 
}