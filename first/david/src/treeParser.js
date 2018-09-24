export function treeParser(jsonTree) {
    let nodes = jsonTree.nodes;
    function nodesParser(jsonObj, url, jsonBox) {
            url += jsonObj.pageName + '/';
            jsonBox.push(url);
            jsonObj['nodes'].map(result => nodesParser(result, url, jsonBox));
            return jsonBox
        }
    return [].concat(...nodes.map(value => nodesParser(value, '/', [])));  
}
