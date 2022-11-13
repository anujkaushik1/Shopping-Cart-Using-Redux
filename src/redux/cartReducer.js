
const initalState = {
    value: []
}

const CartReducer = (state = initalState, action) => {
    switch (action.type) {
        
        case 'ADD_ITEMS':
            const item = action.payload;
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
                    newArr.find((e, idx)=> {
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

                    console.log(state);
                }
            }     

            return state;
        
        case 'DELETE_ITEM':
            const item1 = action.payload;
            
            let res = [...state.value].filter((e)=> {
                return e.id !== item1.id
            })

            state = {
                ...state,
                value : [...res]
            }

            
        default:
            return state
    }
}

export default CartReducer;

