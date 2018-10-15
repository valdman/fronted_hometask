import fetchServer from "./fetchServer";

const fetchItems = () => {
    const myHeaders = new Headers({
        'Accept': 'application/json',
    });

    const myInit = {
        method: 'GET',
        headers: myHeaders,
    };

    return fetchServer("/items", myInit)
        .catch(() => console.log("fetch error"))
        .then(res => res.json())
        .catch(() => console.log("cannot Json()"));
};

export default fetchItems;