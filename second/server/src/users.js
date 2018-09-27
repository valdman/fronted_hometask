import {readFileSync} from "fs"

import {guid, doAndRepeat} from "./utils";

class UsersRepo {

    constructor(){
        doAndRepeat(this.resetUsers, 10 * 60 * 1000)
    }

    exists = (login) => {
        const found = this.users.filter((u) => u.login === login)
        return found.length !== 0 && found[0].token;
    }

    create = (login) => {
        const id = guid();
        this.users.push({login, token: id})
        return id;
    }

    resetUsers = () => {
        console.log("Users list reseted");
        const data = JSON.parse(readFileSync("data.json"));
        this.users = data;
    }

    takeItem = (token, itemId)  => {
        const i = this.users.findIndex((u) => u.token === token);
        if(i === -1 ) return i;
        this.users[i].items = !this.users[i].items ? [ itemId ] : [...this.users[i].items, itemId];
        return itemId;
    }

    getCart = (token) => {
        const i = this.users.findIndex((u) => u.token === token);
        if(i === -1 ) return -1;
        return this.users[i].items;
        
    }
}

export default new UsersRepo();