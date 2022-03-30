function test(){
    console.log("click ");
}

// document.getElementById("btn").addEventListener("click", test);
// document.getElementById("btn").addEventListener("click", function(){
//     console.log("btn clicked");
// });


// document.querySelector("#btn").addEventListener("click", function(){
//     console.log("btn clicked from query selector");
// }
// );


document.getElementById("superParent").addEventListener("click", function(e){
    console.log("Super Parent clicked");
    e.stopPropagation();
});

document.getElementById("parent").addEventListener("click", function(e){
    console.log("Parent clicked");
    e.stopPropagation();
});


document.getElementById("child").addEventListener("click", function(e){
    console.log("Child clicked");
    e.stopPropagation();
});
