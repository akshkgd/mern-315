let tossCoinBtn = document.getElementById('toss-coin');
let tossCoinAudio = document.getElementById('toss-coin-audio');
tossCoin = () => {
    tossCoinAudio.play();
    let coin = Math.floor(Math.random() * 2);
    console.log(coin);
    if (coin === 0) {
        document.getElementById('result').innerHTML = 'Heads';
    }
    else {
        document.getElementById('result').innerHTML = 'Tails';
    }
}
tossCoinBtn.addEventListener('click', tossCoin);