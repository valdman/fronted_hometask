import fetchServer from "./fetchServer";

const getCart = () => {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Accept': '*/*',
    });
  
    const myInit = {
      method: 'GET',
      headers: myHeaders,
      credentials: "include",
    };
  
    return fetchServer("/cart", myInit)
      .catch(() => console.log("gotcha"))
      .then(res => res.json())
      .then(res => {
        //showHint(res.ok ? "Покуплено" : "Логин?");
        //console.log(res);
        return res;
      })
      .catch((err) => console.log(err));
  };

  export default getCart;