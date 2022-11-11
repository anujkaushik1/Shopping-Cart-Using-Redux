import { shopItems } from "../Components/getItems";

let item = shopItems.data[0];
let item1 = shopItems.data[1];

const initalState = {
    value : {item, item1}
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

