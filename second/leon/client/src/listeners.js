import { HTMLtoArray } from "./utils";


export const attachListeners = ({ logUser, getUsers, deleteUsers, buyItem }) => {
    document.getElementById("loginButton").onclick = logUser;
    document.getElementById("getUsers").onclick = getUsers;
    document.getElementById("deleteUsers").onclick = deleteUsers;
    HTMLtoArray(document.getElementsByClassName("card")).map(card => card.onclick = buyItem.bind(null, card.name)); 
}