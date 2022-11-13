
const initalState = {
    value: []
}

const CartReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let item = action.payload;
            let arr = [...state.value];
            
            if(arr.length === 0){
                state = {
                    ...state,
                    value : [...state.value, item]
                }
            }
            else{
                let bool = false;
                
                arr.forEach((e)=> {
                    if(e.id === item.id) bool = true
                })
               
                if(!bool){
                    state = {
                        ...state,
                        value : [...state.value, item]  
                    }
                }
            }     

            return state;

        default:
            return state
    }
}

export default CartReducer;

