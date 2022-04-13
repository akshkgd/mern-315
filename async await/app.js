// console.log('calling task 1');
// setTimeout(() => {
//     console.log('task 1 completed');
// },3000);

// console.log('calling task 2');
// console.log('task 2 completed');


function taskA(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            
            resolve('task A completed');
            // reject('task A failed');
            
        },2000)
    })
    
}
async function executeTaskA(){
    console.log('calling task A');
    let taskAResult = await taskA();
    console.log(taskAResult);
}

function taskB(){
    return('task B completed')
}



let taskBResult = taskB();
executeTaskA()

console.log(taskBResult);