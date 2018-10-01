import {fetchServer, showHint, myJSONstringify} from "./utils";

export const buyItem = (id) => {
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
    });

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        credentials: "include",
        body: myJSONstringify({
            itemId: id
        }),
    };

    fetchServer("/buy", myInit)
        .catch(() => console.log("gotcha"))
        .then(res => res)
        .then(res => {
            showHint(res.ok ? "Покуплено" : "Логин?");
        })
        .catch((err) => console.log("err"));
};