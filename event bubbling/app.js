let salaries = [100,213, 543, 654, 765, 300, 500,987, 200, 654, 876];
// console.log(arr)
//reduce

// let result = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// });

// console.log(result);

let maxValue = salaries.reduce(function(max, current){
    if(current > max){
        max = current;
    }
    return max;
},0);


console.log(maxValue);


// map and filter revision
// let arrMapping = arr.map(function(x){
//     return x+2;
// }).filter(function(x){
//     return x>5;
// });
// console.log(arrMapping);


// let arrFilters = arr.filter(function(x){
//     return x>5;
// });

// console.log(arrFilters);


