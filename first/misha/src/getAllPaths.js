export const getAllPaths = (link, nodes) => {
    let paths = [];

    (function searchPaths(nodesArr, beginPath = "") {
        nodesArr.map(({nodes, pageName}) => {
            nodes.length ?
                searchPaths(nodes, `${beginPath}/${pageName}`) :
                paths.push(`${link + beginPath}/${pageName}`);
        })
    })(nodes);
    
    return paths;
}