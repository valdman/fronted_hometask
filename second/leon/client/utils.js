const fetchServer = (path, params) => {
    return fetch(serverLink + path, params);
}

const showHint = (str) => {
    popup.style.display = "block";
    popup.innerHTML = str;
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
};