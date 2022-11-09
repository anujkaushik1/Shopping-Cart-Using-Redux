const initalState = {
    value : 10
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

