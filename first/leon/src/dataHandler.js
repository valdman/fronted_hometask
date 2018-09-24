

export const seekInfo = (obj, baseLink) => {
    const ans = [];
    function loopSearch(elt, parentStr = "") {
        const info = {
            url: `${baseLink}${parentStr.length > 0 ? '/' + parentStr : ''}/${elt.pageName}`,
        };
        ans.push(info);
        elt.nodes.map((inner) => { loopSearch(inner, parentStr.length > 0 ? parentStr + "/" + elt.pageName : elt.pageName) })
    }
    loopSearch(obj, obj.namePage);
    return ans;
};

export const pushInfo = ({ creatingTime, description, url, id }, baseLink) => {
    return {
        id: id,
        creatingTime: creatingTime,
        description: description,
        url: `${baseLink}/${url}`
    }
};
