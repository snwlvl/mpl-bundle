const nameplateEl = document.getElementById('nameplate')
const nameEl = document.getElementById('name')
const teamEl = document.getElementById('team')
const twitterEl = document.getElementById('twitter')

nodecg.listenFor('showLowerthird', (newVal) => {
	nameEl.innerHTML = newVal.name;
	teamEl.innerHTML = newVal.team;
	twitterEl.innerHTML = newVal.twitter;

	const tl = gsap.timeline();

	tl.from([nameplateEl, nameEl, teamEl, twitterEl], 1, {width: 0});

	tl.to([nameplateEl, nameEl, teamEl, twitterEl], 1, {width: 0}, "+=4");

	tl.call(() => {
		nameEl.innerHTML = "";
		teamEl.innerHTML = "";
		twitterEl.innerHTML = "";
	})
	tl.set([nameplateEl, nameEl, teamEl, twitterEl], {width: ""})
})
