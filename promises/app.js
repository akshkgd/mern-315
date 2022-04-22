// const new Promise(function(resolve, reject) {
//   // do something
// }.then(function(result) {
//     // do something
// }

function newQuote(){


    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    let totalQoutes = data.length;
    let randomQuote = Math.floor(Math.random() * totalQoutes);
    document.getElementById('quote').innerHTML = data[randomQuote].text;
    document.getElementById('author').innerHTML = data[randomQuote].author;
  });

}

newQuote();


//   fetch("https://codekaro.in/api/uzumymw")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });




fetch('https://dad-jokes.p.rapidapi.com/random/joke', option)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));