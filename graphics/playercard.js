'use strict';

let isVideoPlaying = false;

nodecg.listenFor('showPlayercard', (newVal) => {
    const container = document.getElementById('container');
    const playerName = document.getElementById('playerName');
    const teamName = document.getElementById('teamName');
    const vid = document.getElementById('myVideo');

    playerName.innerHTML = newVal.playerName;
    teamName.innerHTML = newVal.teamName;

    container.style.opacity = 0;
    container.style.display = 'block';
    playerName.style.display = 'block';
    teamName.style.display = 'block';
    vid.style.opacity = 0;

    if (!isVideoPlaying) {
        vid.autoplay = true;
        vid.controls = false;
        vid.play();
        isVideoPlaying = true;

        vid.addEventListener('ended', handleVideoEnded);
    }

    setTimeout(() => {
        container.style.transition = 'opacity 1s';
        playerName.style.transition = 'opacity 1s';
        teamName.style.transition = 'opacity 1s';
        vid.style.transition = 'opacity 1s';

        container.style.opacity = 1;
        playerName.style.opacity = 1;
        teamName.style.opacity = 1;
        vid.style.opacity = 1;
    }, 100);
});

function handleVideoEnded() {
    isVideoPlaying = false;

    const playerName = document.getElementById('playerName');
    const teamName = document.getElementById('teamName');
    playerName.style.opacity = 0;
    teamName.style.opacity = 0;
}

const vid = document.getElementById('myVideo');
vid.controls = false;
