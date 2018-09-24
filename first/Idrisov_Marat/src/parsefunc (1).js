import {baseURL} from "./taketree";

let links = [];

export const rec = (item, path) => {
    item.forEach(({nodes, pageName}) => {
        if (nodes.length) {
            rec(nodes, path + "/" + pageName);
        } else {
            links.push(baseURL + path + "/" + pageName);
        }
    });
    
    return links;
}
