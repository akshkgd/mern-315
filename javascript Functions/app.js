// function grinder(items){
//     console.log("Grinding...", items);
// }

// grinder('tomatoes');
// grinder('potatoes');


// function add(num1, num2){
//     console.log(num1 + num2);
// }
// let num1 = 10;
// let num2 = 20;
// add(2,5);
// add(num1, num2);

let user = {
    name: 'John',
    email: 'john@gmamil.com',
    salary: 63000,
}


// function calculateTds(salary){
//     let tds = salary * 0.1;
//     let payable = salary - tds;
//     console.log("Payable amount is: ", payable);
//     return tds;
    
// }


// let tds = calculateTds(user.salary);
// console.log(calculateTds(user.salary));
// console.log("the TDS is ",tds)


//arrow function
function sqr(num){
    return (num*num);
}

// cube = (num) => num*num*num; //one line function
// //syntax -> functionName = (parameters) => {code}
// console.log(sqr(5));
// console.log(cube(5));


// arrays -> map and filter

let numbers = [1,2,3,4,5,6,7,8,9,10];

// let result = numbers.map((x)=> x*x*x);
let result = numbers.map(sqr);
console.log(result);


//filter -> filter the array
function isEven(num){
    return num % 2 == 0;
}
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

