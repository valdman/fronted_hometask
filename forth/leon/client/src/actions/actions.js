import loginUser from "../fetchUtils/loginUser";
import buyItem from "../fetchUtils/buyItem";
import getUsers from "../fetchUtils/getUsers";
import deleteUsers from "../fetchUtils/deleteUsers";
import getCart from "../fetchUtils/getCart";

const ADD_TO_CART = "ADD_TO_CART";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER"; 
const LINK = "LINK";
const GET_USERS = "GET_USERS";
const DELETE_USERS = "DELETE_USERS";
const ADD_ITEMS = "ADD_ITEMS";
const GET_ITEMS_IN_CART = "GET_ITEMS_IN_CART";

//Dont quite know where to put requests to server, because it turns out that we can do everything without it
//may be i needed async actions !!!

export const addToCartAction = (itemId) => {
    buyItem(itemId);
    return {
        type: ADD_TO_CART,
        itemId
    }
};

export const getItemsInCartAction = () => {
    getCart();
    return {
        type: GET_ITEMS_IN_CART
    }
}

export const addItemsAction = (items) => {
    return {
        type: ADD_ITEMS,
        items
    }
};

export const loginAction = (login) => {
    loginUser(login);
    return {
        type: LOGIN,
        login
    }
};

export const getUsersAction = () => {
    getUsers();
    return {
        type: GET_USERS,
    }
};

export const deleteUsersAction = () => {
    deleteUsers();
    return {
        type: DELETE_USERS,
    }
};

//есть смысл делать action который не меняет сострояния приложения?
export const linkAction = (link) => {
    return {
        type: LINK,
        link
    }
};

export const registerAction = (login) => {
    loginUser(login);
    return {
        type: REGISTER,
        login
    }
};