import { ADD_CART, STORE_DATA } from "./actionTypes"


const storeData = (payload) => ({
    type: STORE_DATA,
    payload : payload
})

const addCart = (payload) => ({
    type: ADD_CART,
    payload : payload
})

export { storeData, addCart }