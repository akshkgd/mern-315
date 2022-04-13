function task1(){

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      console.log('data fetched')
    console.log(data);
  });
    
}

function task2(){
    return 'task 2 done';
}

async function executeTask1(){
    console.log('task 1 started...');
     task1();
    // console.log(result);
    
}


executeTask1()
console.log('task 2 started...');
    console.log(task2());
