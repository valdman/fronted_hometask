const initialState = {
   loginned: false,
   page: "home",
   items: [],
   cart: []
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case "LOAD_ITEMS":
         return {
            ...state,
            items: action.items
         }
      case "LOAD_CART":
         return {
            ...state,
            cart: action.cart
         }
      case "LOGIN":
         return {
            ...state,
            loginned: true
         }
      case "CHANGE_PAGE":
         return {
            ...state,
            page: action.page
         }
      case "BUY":
         return {
            ...state,
            cart: [...state.cart, action.id]
         }
      default:
         return state
   }
}

export default rootReducer;