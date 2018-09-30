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
        .then(res => {
            showHint(res.ok ? "Покуплено" : "Логин?");
        })
        .catch((err) => console.log("err"));
};