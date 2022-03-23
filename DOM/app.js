changeColor = () => {
    document.getElementById('title').style.color = 'tomato';
}

transformHeading = () => {
    document.getElementById('title').style.color = 'tomato';
    document.getElementById('title').style.fontSize = '60px';
    document.getElementById('title').style.textDecoration = 'underline';
}
originalHeading = () => {
    document.getElementById('title').style.color = 'black';
    document.getElementById('title').style.fontSize = '42px';
    document.getElementById('title').style.textDecoration = 'none';
}
showBtn = () => {
    document.getElementById('btn').style.display = 'block';
}
hideBtn = () => {
    document.getElementById('btn').style.display = 'none';
}

greet = () => {
    let name = document.getElementById('name').value;
    let greetings = 'Hello ' + name;
    document.getElementById('greet').innerHTML = greetings;
}

cube = () => {
    let num = document.getElementById('num').value;
    let cube = num * num * num;
    document.getElementById('cubeResult').innerHTML = cube;
}



let randomColors = ['red', 'blue', 'green', 'torquise', 'orange', 'purple', 'teal', 'brown', 'coral', 'blueviolet', 'dodgerblue', 'gold', 'indigo', 'lime', 'maroon', 'navy', 'olive', 'pink', 'silver', 'yellow'];
changeRandomColor = () => {
    let totalRandomColors = randomColors.length;
    let randomIndex = Math.floor(Math.random() * totalRandomColors);
    document.getElementById('title').style.color = randomColors[randomIndex];
    console.log(randomColors[randomIndex])
}

let users = [
    {firstName: 'John', lastName: 'Doe', age: 30, salary: 5000},
    {firstName: 'Jane', lastName: 'Doe', age: 25, salary: 4000},
    {firstName: 'Ashish', lastName: 'Shukla', age: 20, salary: 3000},
    {firstName: 'yash', lastName: 'Goel', age: 35, salary: 6000},
    {firstName: 'Arpit', lastName: 'Khare', age: 40, salary: 7000},
    {firstName: 'Sahil', lastName: 'Pocker', age: 45, salary: 8000},
]