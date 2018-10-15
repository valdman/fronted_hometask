const parseItems = (arr = []) => {
    const newDict = {};
    arr.forEach(itemId => {
        newDict[itemId] = (itemId in newDict) ? newDict[itemId]+1 : 1;
    });
    return newDict
}

export default parseItems;