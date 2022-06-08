const visits = document.querySelector(".visits")

let visitNum = Number(window.localStorage.getItem("visit-ls"));
let lastVisit = Number(window.localStorage.getItem("lastVisit"));

const timeBetween = Math.round((Date.now() - lastVisit) / (1000 * 60 * 60 * 24));

if (visitNum !== 0) {
	visits.textContent = timeBetween;
} else {
	visits.textContent = "First visit";
}

visitNum++;
localStorage.setItem("lastVisit", Date.now());
localStorage.setItem("visit-ls", visitNum);