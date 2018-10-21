const initialState = {
    session: null,
    itemsInCart: [],
    items: []
};

function LeonStoreReducer(state = initialState, action) {
    return {
        session: getSession(state, action),
        itemsInCart: getItemsInCart(state, action),
        items: getItems(state, action)
    }
}

export default LeonStoreReducer;

const getSession = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                userName: action.login,
                loginTime: Date.now()
            }
        case "REGISTER":
            return {
                userName: action.login,
                registerTime: Date.now()
            }
        default:
            return state.session
    }
}

const getItemsInCart = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...state.itemsInCart, action.itemId]
        default:
            return state.itemsInCart
    }
}

const getItems = (state, action) => {
    switch (action.type) {
        case "ADD_ITEMS":
            return [...state.items, ...action.items]
        default:
            return state.items
    }
}