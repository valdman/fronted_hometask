import { baseLink } from './index';

export const seekInfo = (obj) => {
    const ans = [];
    //console.log(obj);
    function loopSearch(elt, parentStr = "") {
        const info = {
            //id: elt.id,
            //name: elt.pageName,
            url: `${baseLink}${parentStr.length > 0 ? '/' + parentStr : ''}/${elt.pageName}`,
        };
        ans.push(info);
        elt.nodes.map((inner) => { loopSearch(inner, parentStr.length > 0 ? parentStr + "/" + elt.pageName : elt.pageName) })
    }
    loopSearch(obj, obj.namePage);
    //console.log(ans);
    return ans;
};

export const pushInfo = ({ creatingTime, description, url, id }) => {
    return {
        id: id,
        creatingTime: creatingTime,
        description: description,
        url: `${baseLink}/${url ? url : ''}`
    }
};
