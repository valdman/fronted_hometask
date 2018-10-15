import fetchServer from "./fetchServer";

const buyItem = (id) => {
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        credentials: "include",
        body: JSON.stringify({
            itemId: id
        }),
    };



    fetchServer("/buy", myInit)
        .catch(() => console.log("gotcha"))
        .then(res => res)
        .catch((err) => console.log("err"));
};

export default buyItem;