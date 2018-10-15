const parseItems = (arr = []) => {
    const newDict = {};
    arr.forEach(itemId => {
        newDict[itemId] = (itemId in newDict) ? newDict[itemId]+1 : 1;
    });
    //console.log(newDict);
    return newDict
}

export default parseItems;