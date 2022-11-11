import { shopItems } from "../Components/getItems";

let item = shopItems.data[0];

const initalState = {
    value : item
}

const CartReducer = (state = initalState, action)=>{
    switch(action.type){
        case 'GET_ITEMS':
            return {...state, value : state.value - 1}
        default :
            return state
    }
}

export default CartReducer;

