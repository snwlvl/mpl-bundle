const nameInput = document.getElementById('name')
const teamInput = document.getElementById('team')
const twitterInput = document.getElementById('twitter')

function update() {
	const data = {name: nameInput.value, team: teamInput.value, twitter: twitterInput.value}
	nodecg.sendMessage('showLowerthird', data);
}