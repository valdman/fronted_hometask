export const loginAction = (login) => ({
    type:"LOGIN",
    login
})

export const importGoods = (goods) => ({
    type:"IMPORT_GOODS",
    goods
})

export const importCart = (cart) => ({
    type: "IMPORT_CART",
    cart
})

export const addToCart = (id) => ({
    type: "ADD_TO_CART",
    id
})
