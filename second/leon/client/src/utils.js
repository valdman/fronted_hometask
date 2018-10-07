export const fetchServer = (path, params) => {
    return fetch("http://localhost:3001" + path, params);
}

export const showHint = (str) => {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.innerHTML = str;
    console.log(str);
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
};

export const myJSONstringify = (obj) => {
    let str = "{";
    for(var key in obj) {
        str += `"${key}":"${obj[key]}"`;
    }
    str += "}"
    return str;
};

export const HTMLtoArray = (obj) => {
    let arr = [];
    for(let i = 0; i < obj.length; i++){
        arr.push(obj[i]);
    }
    return arr;
}

export const getInputValue = () => document.getElementById("loginInput").value;
export const getContainer = () => document.getElementById("itemContainer");