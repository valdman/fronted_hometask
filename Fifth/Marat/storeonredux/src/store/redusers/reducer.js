const defaultState = {
    isLogined: false,
    goods: [],
    cart: []
}

const reducer = (prevState = defaultState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...prevState,
                isLogined: true
            };
        case "IMPORT_GOODS":
            return{
                ...prevState,
                goods: action.goods
            }
        case "ADD_TO_CART":
            return {
                ...prevState,
                cart: [...prevState.cart, action.id]
            };
        case "IMPORT_CART":
        return{
            ...prevState,
            cart: action.cart
        }
        
        default:
            return prevState;
    }
}

export default reducer;