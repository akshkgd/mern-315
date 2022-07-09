let a = [1,2,3,4,5,6,7,8,9,10];
//map
// let map = a.map((num)=>{
//     return num*num;
// })
// console.log(map)
//filter
// let filter = a.filter((num)=>{
//     return num>5;
// })
// console.log(filter)

//reduce
let reduce = a.reduce((total, index)=>{
    total = total+index;
    return total
},0)

console.log(reduce)