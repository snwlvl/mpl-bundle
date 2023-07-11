const playerNameInput = document.getElementById('playerName')
const teamNameInput = document.getElementById('teamName')

function update() {
	const data = {playerName: playerNameInput.value, teamName: teamNameInput.value}
	nodecg.sendMessage('showPlayercard', data);
}