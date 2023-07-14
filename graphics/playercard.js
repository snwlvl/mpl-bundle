'use strict';

nodecg.listenFor('showPlayercard', (newVal) => {
    const container = document.getElementById('container');
    const playerName = document.getElementById('playerName');
    const teamName = document.getElementById('teamName');
    const vid = document.getElementById('myVideo');

    playerName.innerHTML = newVal.playerName;
    teamName.innerHTML = newVal.teamName;

    container.style.opacity = 0;
    fadeIn(container, playerName, teamName, vid);

    // Play the video
    vid.autoplay = true;
    vid.controls = false;
    vid.play();
});

function fadeIn(container, playerName, teamName, vid) {
    let op = 0;
    container.style.display = 'block';
    playerName.style.display = 'block';
    teamName.style.display = 'block';

    const timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
            setTimeout(function() {
                fadeOut(container, playerName, teamName, vid);
            }, 10000);
        }
        container.style.opacity = op;
        container.style.filter = 'alpha(opacity=' + op * 100 + ')';
        playerName.style.opacity = op;
        playerName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        teamName.style.opacity = op;
        teamName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        vid.style.opacity = op;
        vid.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1 || 0.1;
    }, 10);
}

function fadeOut(container, playerName, teamName, vid) {
    let op = 1;
    const timer = setInterval(function() {
        if (op <= 0) {
            clearInterval(timer);
            container.style.display = 'none';
            playerName.style.display = 'none';
            teamName.style.display = 'none';
            vid.style.display = 'none';
        }
        container.style.opacity = op;
        container.style.filter = 'alpha(opacity=' + op * 100 + ')';
        playerName.style.opacity = op;
        playerName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        teamName.style.opacity = op;
        teamName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        vid.style.opacity = op;
        vid.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op -= op * 0.1 || 0.1;
    }, 10);
}

const vid = document.getElementById('myVideo');
vid.controls = false;
