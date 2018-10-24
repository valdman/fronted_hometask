import express from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import {readFileSync} from "fs"

import users from "./users.js"

const s = express();
s.use(cookieParser());
s.use(bodyParser());
s.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
}));

s.post("/login", (req, res) => {
    const login = req.body.login;
    let token = users.exists(login);
    if(!token) {
        token = users.create(login);
        res.send({token: token, status: "created"})
    } else {
        res.set('Set-Cookie', `token=${token}; Path=/;`)
        res.send({token: token, status: "loginned in"})
    }
    res.end();
})

s.post("/buy", (req, res) => {  
    const token = req.cookies.token;
    
    if(!token) {
        res.status(403).send("Token needed").end();
        return;
    }
    if(users.takeItem(token, req.body.itemId) !== -1) {
        res.send("Ok").end();
        return;
    }
    res.status(404).send("User not found");
})

s.get("/cart", (req, res) => {
    const token = req.cookies.token;
    if(!token) {
        res.status(403).send("Token needed").end();
        return;
    }
    const cart = users.getCart(token);
    if(cart !== -1) {
        res.send(cart).end();
        return;
    }
    res.end();
})

s.get("/users", (req, res) => {
    res.send(JSON.stringify(users.users));
    res.end();
})

s.delete("/users", (req, res) => {
    users.resetUsers();
    res.end();
})

s.get("/items", (req, res) => {
    res.send(JSON.parse(readFileSync("items.json")));
    res.end();
})

//3000 new
const port = 3001;
s.listen(port);
console.log(`Server started, listening ${port}`);