import {requestTree, requestLink, baseURL} from "./taketree";
import {rec} from "./parsefunc";

function main() {
    return requestTree("tree")
        .then(res => rec(res.nodes, ""));
}

function reqPages (array) {
    const requests = array.map(value => requestLink(value));
    Promise.all(requests).then(res => {
        res.map(({id, url, description, creatingTime}) => {
                console.log({
                    id,
                    url, 
                    description,
                    creatingTime
                })
            });
    });
}

main().then(res => reqPages(res));
