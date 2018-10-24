const infoInitaialState = {isLogined : false};

export const ItemsReducer = (prevState = [], action) => {

    switch(action.type){
        case "ADD_ITEMS":
        return [...prevState, ...action.items];

        default:
        return prevState;
    }
}

export const CartItemsReducer = (prevState = [], action) =>{

    switch(action.type){
        case "ADD_ITEMS_IN_CART":{
            let bool = true;
            let newState ={};
            newState = prevState.map(el => {
                if(el.id ===action.id){
                    bool = false;
                    el.count++;
                    return el
                } else return el;
            })
            if (bool) return [...prevState, {id: action.id, count : 1}]
            else return newState; 
        }
        break;

        default:
        return prevState;
    }
}

export const infoReducer = (prevState = infoInitaialState, action) => {
    
    switch(action.type){
        case "LOG_IN":
        return {...prevState, isLogined : true};

        default:
        return prevState;
    }
}