const fetchServer = (path, params) => {
    return fetch("http://localhost:3001" + path, params);
}

export default fetchServer;