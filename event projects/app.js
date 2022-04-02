let users = [];
let idCounter = 1;
let submitBtn = document.getElementById('submit-btn');
let luckyDrawBtn = document.getElementById('lucky-draw');
addUser = () => {
    let tempUser = {}
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    tempUser.id = idCounter;
    tempUser.name = name.value;
    tempUser.email = email.value;
    idCounter++;
    users.push(tempUser);
    console.log(users);
}

luckyUser = () => {
    let totalUsers = users.length;
    let randomUser = Math.floor(Math.random() * totalUsers);
    console.log(users[randomUser]);
}


submitBtn.addEventListener('click', addUser);
luckyDrawBtn.addEventListener('click', luckyUser);


