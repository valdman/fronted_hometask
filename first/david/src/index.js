import {getJson} from './workingWithNetwork';
import {parseTree} from './treeParser';
import {getParams} from './resultHandler';
getJson("/tree/")    // Download JSON structure
.then(jsonTree => parseTree(jsonTree, ""))    // Get array of URL's
.then(arrayWithUrls => getParams(arrayWithUrls))    // Get all results
.then((arrayWithResults) => console.log(arrayWithResults))    // Print results