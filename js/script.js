const blackPanther = document.querySelector(".blackPanther");
const blackWidow = document.querySelector(".blackWidow");
const buckyBarnes = document.querySelector(".buckyBarnes");
const captainAmerica = document.querySelector(".captainAmerica");
const drStrange = document.querySelector(".drStrange");
const hawkEye = document.querySelector(".hawkEye");
const mariaHill = document.querySelector(".mariaHill");
const hulk = document.querySelector(".hulk");
const loki = document.querySelector(".loki");
const moonNight = document.querySelector(".moonKnight");
const nickFury = document.querySelector(".nickFury");
const scarletWitch = document.querySelector(".scarletWitch");
const shangChi = document.querySelector(".shangChi");
const spiderMan = document.querySelector(".spiderMan");
const warMachine = document.querySelector(".warMachine");
const wong = document.querySelector(".wong");

//pick a character

function selectCharacter() {
  arr = [
    "blackPanther",
    "blackWidow",
    "buckyBarnes",
    "captainAmerica",
    "drStrange",
    "hawkEye",
    "mariaHill",
    "hulk",
    "loki",
    "moonKnight",
    "nickFury",
    "scarletWitch",
    "shangChi",
    "spiderMan",
    "warMachine",
    "wong",
  ];
  return arr[Math.random(arr.length - 1)];
}

rightAnswer = selectCharacter();

document
  .querySelector(".blackPanther")
  .addEventListener("click", toggleClass("hidden"));
//   .addEventListener("click", correctCheck("blackPanther"));
document
  .querySelector(".blackWidow")
  .addEventListener("click", correctCheck("blackWidow"));
document
  .querySelector(".buckyBarnes")
  .addEventListener("click", correctCheck("buckyBarnes"));
document
  .querySelector(".captainAmerica")
  .addEventListener("click", correctCheck("captainAmerica"));
document
  .querySelector(".drStrange")
  .addEventListener("click", correctCheck("drStrange"));
document
  .querySelector(".hawkEye")
  .addEventListener("click", correctCheck("hawkEye"));
document
  .querySelector(".mariaHill")
  .addEventListener("click", correctCheck("mariaHill"));
document.querySelector(".hulk").addEventListener("click", correctCheck("hulk"));
document.querySelector(".loki").addEventListener("click", correctCheck("loki"));
document
  .querySelector(".moonKnight")
  .addEventListener("click", correctCheck("moonKnight"));
document
  .querySelector(".nickFury")
  .addEventListener("click", correctCheck("nickFury"));
document
  .querySelector(".scarletWitch")
  .addEventListener("click", correctCheck("scarletWitch"));
document
  .querySelector(".shangChi")
  .addEventListener("click", correctCheck("shangChi"));
document
  .querySelector(".spiderMan")
  .addEventListener("click", correctCheck("spiderman"));
document
  .querySelector(".warMachine")
  .addEventListener("click", correctCheck("warMachine"));
document.querySelector(".wong").addEventListener("click", correctCheck("wong"));

//on click
////check to see if question is correct
document.querySelector("#check").addEventListener("click", check);

function check() {
  const clue = document.querySelector("#clue").value.toLowerCase();
}
//card flip

function correctCheck(pick) {
  if (pick == rightAnswer) {
    alert("CORRECT");
  } else alert("WRONG");
}
