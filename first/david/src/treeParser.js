var jsonBox = [];
export function parseTree (jsonValue, longUrl) {
    var value;
    for (var key in jsonValue){
        value = jsonValue[key];
        if (typeof(value) === 'string') {
            longUrl += value + "/";
        }
        else if (typeof(value) === 'object') {
            if (jsonBox.indexOf(longUrl) === -1) {
                jsonBox.push(longUrl);
            }
            parseTree(value, longUrl);
        }
    }
    return jsonBox;
}