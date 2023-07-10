'use strict';

nodecg.listenFor('showPlayercard', (newVal) => {
    const container = document.getElementById('myVideo');
    const playerName = document.getElementById('playerName');
    const teamName = document.getElementById('teamName');

    playerName.innerHTML = newVal.playerName;
    teamName.innerHTML = newVal.teamName;

    container.style.opacity = 0;
    fadeIn(container, playerName, teamName);
});

const vid = document.getElementById('myVideo');

function fadeIn(element, playerName, teamName) {
    let op = 0;
    element.style.display = 'block';
    playerName.style.display = 'block';
    teamName.style.display = 'block';

    const timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
            setTimeout(function() {
                fadeOut(element, playerName, teamName);
            }, 10000);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        playerName.style.opacity = op;
        playerName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        teamName.style.opacity = op;
        teamName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1 || 0.1;
    }, 10);
}

function fadeOut(element, playerName, teamName) {
    let op = 1;
    const timer = setInterval(function() {
        if (op <= 0) {
            clearInterval(timer);
            element.style.display = 'none';
            playerName.style.display = 'none';
            teamName.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        playerName.style.opacity = op;
        playerName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        teamName.style.opacity = op;
        teamName.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op -= op * 0.1 || 0.1;
    }, 10);
}

vid.autoplay = true;
vid.controls = false;
vid.play();
