import {request} from './network'

export const arrayOfPaths = [];

export const getPaths = ({tree, treeUrl}) => 
{
        if(tree.nodes.length)
            tree.nodes.forEach(element => 
                {
                    arrayOfPaths.push(treeUrl+"/"+element.pageName);
                    getPaths( {tree: element,treeUrl: (treeUrl+"/"+element.pageName)} );
                })
}   


export const getPageInfo = (url) => {
    return request(url)
    .then( ({id,description,creatingTime}) => { return {id,url,description,creatingTime} });
}

export const CollectData =({url,addUrl}) => {
    return request(url+addUrl)
.then(res =>{
    getPaths({tree: res, treeUrl: url}); 
})
.then(paths => {
            return [...Array(arrayOfPaths.length).keys()].map(value => getPageInfo(arrayOfPaths[value]))
        })
.then(r => { return Promise.all(r)});
    }