const playerInput = document.getElementById('playerName')
const teamInput = document.getElementById('teamName')

function display() {
    const data = {playerName: nameInput.value, teamName: teamInput.value}
	nodecg.sendMessage('showPlayercard', data);
}