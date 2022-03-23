// let user1 =  {
// 	name: 'ashish',
// 	email: 'ashish@gmail.com',
// 	address: '123 street, Allahabad, 211003'
// }
// user1.mobile = 9876543210;
// user1.name = 'ashish shukla';
// delete user1.address;
// console.log(user1)



// let user2 =  {
// 	name: 'ashish',
// 	email: 'ashish@gmail.com',
// 	address : {
// 		address: '123 street',
// 		city: 'allahabad',
// 		pinCode: 211003,
// 		state: 'Uttar Pradesh',
// 		landmark: 'xyz landmark',
// 	},
// 	hobbies: ['teaching', 'music', 'codekaro']
// }
// user2.mobile = 9876543210;
// user2.name = 'ashish shukla';

// console.log(user2.address.landmark);
// console.log(user2.hobbies[0]);




// let users = [
// 	{ name: 'ashish', email: 'ashish@gmail.com'},
// 	{ name: 'nayan', email: 'nayan@gmail.com'},
// 	{ name: 'rajat', email: 'rajat@gmail.com'},
// 	{ name: 'laith', email: 'laith@gmail.com'},
// 	{ name: 'chaitanya', email: 'shekhar@gmail.com'},
// 	{ name: 'Deepa', email: 'shekhar@gmail.com'},
// 	{ name: 'Akib', email: 'shekhar@gmail.com'},
// 	{ name: 'alex', email: 'shekhar@gmail.com'},
// 	{ name: 'Akash', email: 'shekhar@gmail.com'},
// ]

// let totalUsers = users.length
// let luckyUser = Math.floor(Math.random()*totalUsers);
// console.log(users[luckyUser].name)



// // conditionals
// let name = 'ashish';
// let age1 = 22;

// if(age1 >= 18){
// 	if(age1 <= 24){
// 	console.log('Eligible to Play!');
// 	}
// 	else{
// 		console.log('over aged!');
// 	}
// }

// else
// 	console.log('under Aged');


// let user = 'asshish';
// let age = 124;


// if(age >= 18 && age <= 24){
// 	console.log('Eligible to Play!');
// }
// else{
// 	console.log('Not Eligible to Play!');
// }



let foo = {unique_prop: 1}, bar = {unique_prop: 2}, object = {};
object[foo] = 'value'
console.log(object[bar])