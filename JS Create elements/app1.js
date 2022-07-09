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
        let usersDiv = document.getElementById('users');

        userCard.classList.add('userCard')

        usersDiv.appendChild(userCard);
        userCard.appendChild(userName);
        
    })


    


}

