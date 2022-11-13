let state = {
    value : [{id : 1}, {id : 2}, {id : 3}, {id : 4}]
}
let item = {id : 4};

let bool = false;


// [...state.value.map((e)=> {
//     if(e.id !== item.id){
//         bool = true
//     }
// })]

let arr = [...state.value];

arr = arr.filter((e)=> {
    return e.id !== item.id;
})

console.log(arr);


// console.log(state);