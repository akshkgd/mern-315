let users = [
    {firstName: 'John', lastName: 'Doe', age: 30, salary: 5000},
    {firstName: 'Jane', lastName: 'Doe', age: 25, salary: 4000},
    {firstName: 'Ashish', lastName: 'Shukla', age: 20, salary: 3000},
    {firstName: 'yash', lastName: 'Goel', age: 35, salary: 6000},
    {firstName: 'Arpit', lastName: 'Khare', age: 40, salary: 7000},
    {firstName: 'Sahil', lastName: 'Pocker', age: 45, salary: 8000},
]

// let names = users.map((user)=> user.firstName + " " + user.lastName);
// let payableSalary = users.map((user)=> user.salary - (user.salary * 0.1));
// console.log(payableSalary)
// console.log(names);

// let juniors = users.filter((user)=> user.age < 40);
//     console.log(juniors)

 
console.log(users);



let ifAshish = users.filter(user=> user.salary > 5000);
console.log(ifAshish.map(user=> user.firstName));

