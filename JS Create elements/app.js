let users = [];

addUser = () => {
    let name = document.getElementById('name');
    users.push(name.value);
    name.value = '';
    // console.log(users);
    document.getElementById('users').innerHTML = "";

    users.map(function(user){
        let userCard = document.createElement('div');
        let userName = document.createElement('p');
        userName.innerText = user;
        userCard.classList.add('userCard');

        let userContainer = document.getElementById('users');
        userContainer.appendChild(userCard);
        userCard.appendChild(userName);
    })


    


}



