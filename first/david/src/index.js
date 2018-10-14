import {getJson} from './workingWithNetwork';
import {treeParser} from './treeParser';
import {getParams} from './resultHandler';
getJson("/tree/")    // Download JSON structure
.then(jsonTree => treeParser(jsonTree))    // Get array of URL's
.then(arrayWithUrls => getParams(arrayWithUrls))    // Get all results
.then((arrayWithResults) => console.log(arrayWithResults))    // Print results