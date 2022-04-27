import {ADD_CART, STORE_DATA} from "./actionTypes"

const initState = {
    isLoading : false,
    isError : false,
    data : [],
    cart : [],
    user : []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case STORE_DATA : 
            return {...state, data : action.payload}

            case ADD_CART : 
            console.log(state.cart);
            return {...state, cart : [...state.cart, action.payload]}

        default :
            return state;
    }
}

export {reducer}