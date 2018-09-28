const main = document.getElementById("itemContainer");
const myOrigin = "http://localhost:3001";

const myHeaders = new Headers({
    'Access-Control-Request-Headers': '*',
    'Content-Type': 'application/json',
    'Origin': 'http://localhost:5000',
    'myHeader' : 'bullshit',
});
console.log(myHeaders.get('Origin'));
const myInit = {
    method: 'GET',
    headers: myHeaders,
    credentials: "omit",
    mode: "cors",
};
//console.log(myInit);
const myReq = new Request(myOrigin + "/items", myInit);


fetch(myReq)
    .catch(() => console.log("fetch error"))
    //.then(res => res.json())
    .catch(() => console.log("cannot Json()"))
    .then(res => console.log(res));