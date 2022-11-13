
const initalState = {
    value: []
}

const CartReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let item = action.payload;
            let arr = [...state.value];
            
            // arr = [ {id : 1, Name : 'a} ]
            // item = {id : 1, Name : 'a'}

            let isItemExist = arr.find((e)=> e.id === item.id)

            // isItemExist = {id : 1, Name : 'a'}

            console.log(isItemExist);

            // arr.forEach((e)=> {   // shi appraoch hai
            //     if(e.id === item.id) isItemExist = true  
            // })

            if(!isItemExist){
                state = {
                    ...state,
                    value : [...state.value, item]  
                }
            }     

            return state;

        default:
            return state
    }
}

export default CartReducer;

