
const initalState = {
    value: []
}

const CartReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            let item = action.payload;
            item.count = 1;
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
                else{
                    
                    let newArr = [...state.value];
                    newArr.forEach((e, idx)=> {
                        if(e.id === item.id){
                            let res = [...state.value][idx]
                            res.count += 1;

                            const ans = JSON.parse(JSON.stringify(newArr));

                            state = {
                                ...state,
                                value : ans
                            }

                        }
                    })
                }
            }     

            return state;

        default:
            return state
    }
}

export default CartReducer;

