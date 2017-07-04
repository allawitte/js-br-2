var drums = document.getElementsByClassName('drum-kit__drum');

function playDrum() {
    var player = this.getElementsByTagName('audio')[0];
    player.play();
    console.log('player', player);
}

for (let i = 0; i < drums.length; i++) {
    drums[i].onclick = playDrum;
}

