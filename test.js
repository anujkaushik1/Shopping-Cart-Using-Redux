// let state = {
//     value : [{id : 1, count : 1}, {id : 2, count : 1}, {id : 3, count : 1}, {id : 4, count : 1}]
// }

// let item = {
//     id : 10
// }
// item.count = 1;

// state = {
//     ...state,
//     value : [...state.value , item]
// }

// console.log(state);

let a = true
let arr = [1,2,3,4,5];

let state = {
    value : arr.map((e)=> e === 4 ? true : e)
}
console.log(state);
