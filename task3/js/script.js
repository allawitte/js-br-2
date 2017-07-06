var songs = ['mp3/LA Chill Tour.mp3', 'mp3/LA Fusion Jam.mp3', 'mp3/This is it band.mp3'];
var mediaplayer = document.getElementsByClassName('mediaplayer')[0];
var player = document.getElementsByTagName('audio')[0];
console.log(player)
var counter = 0;
player.src = songs[counter];
var controls = document.getElementsByClassName('controls')[0];

var back = controls.getElementsByClassName('back')[0];
var playstate = controls.getElementsByClassName('playstate')[0];
var stop = controls.getElementsByClassName('stop')[0];
var next = controls.getElementsByClassName('next')[0];
var title = controls.getElementsByClassName('title')[0];
console.log(playstate);

function getTitle(src) {
    return src.replace(/^\w+\//, '').replace(/\.\w+/, '');
}

function changeSongState() {
    mediaplayer.classList.toggle('play');
    var run = mediaplayer.classList.contains('play');
    if (run) {
        player.play();
    }
    else {
        player.pause();
    }


}

function stopSong() {
    player.pause();
    player.currentTime = 0;
    mediaplayer.classList.remove('play');
}

function goBack() {
    counter--;
    counter = counter >= 0 ? counter : 2;
    setNewSong();
}

function goNext() {
    counter++;
    counter = counter < 3 ? counter : 0;
    setNewSong();
}
function setNewSong(){
    player.src = songs[counter];
    player.play();
    title.title = getTitle(songs[counter]);
    if(!mediaplayer.classList.contains('play')) {
        mediaplayer.classList.add('play')
    }
}
back.onclick = goBack;
playstate.onclick = changeSongState;
stop.onclick = stopSong;
next.onclick = goNext;
back.onclick = goBack;


/**
 * Created by Alla on 7/4/2017.
 */
