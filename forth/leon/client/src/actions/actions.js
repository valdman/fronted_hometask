const ADD_TO_CART = "ADD_TO_CART";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER"; //useless
const LINK = "LINK";
const GET_USERS = "GET_USERS";
const DELETE_USERS = "DELETE_USERS";
const ADD_ITEMS = "ADD_ITEMS";

export const addToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        itemId
    }
};

export const addItems = (items) => {
    return {
        type: ADD_ITEMS,
        items
    }
};

export const login = (login) => {
    return {
        type: LOGIN,
        login
    }
};

export const getUsers = (itemId) => {
    return {
        type: GET_USERS,
    }
};

export const deleteUsers = () => {
    return {
        type: DELETE_USERS,
    }
};

export const link = (link) => {
    return {
        type: LINK,
        link
    }
};

//useless
export const register = (itemId) => {
    return {
        type: REGISTER,
        itemId
    }
};