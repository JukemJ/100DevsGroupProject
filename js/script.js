//declaring variables for functions

const blackPanther = document.querySelector('#blackPantherPic');
const blackWidow = document.querySelector("#blackWidowPic");
const buckyBarnes = document.querySelector("#buckyBarnesPic");
const captainAmerica = document.querySelector("#captainAmericaPic");
const drStrange = document.querySelector("#drStrangePic");
const hawkEye = document.querySelector("#hawkEyePic");
const mariaHill = document.querySelector("#mariaHillPic");
const hulk = document.querySelector("#hulkPic");
const loki = document.querySelector("#lokiPic");
const moonKnight = document.querySelector("#moonKnightPic");
const nickFury = document.querySelector("#nickFuryPic");
const scarletWitch = document.querySelector("#scarletWitchPic");
const shangChi = document.querySelector("#shangChiPic");
const spiderMan = document.querySelector("#spiderManPic");
const warMachine = document.querySelector("#warMachinePic");
const wong = document.querySelector("#wongPic");

// make a list of characters then randomly pick a character from it
characterList = [
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

function selectCharacter() {
  
  return characterList[Math.floor(Math.random() * (characterList.length - 1))]
}

rightAnswer = selectCharacter();
console.log(rightAnswer)
//INTERACTION FUNCTIONS 

//click to hide pictures
function blackPantherDisplay(){
  blackPanther.classList.toggle('hidden')
}
document.querySelector('#blackPanther').addEventListener('click', blackPantherDisplay)

function blackWidowDisplay(){
  blackWidow.classList.toggle('hidden')
}
document.querySelector('#blackWidow').addEventListener('click', blackWidowDisplay)

function buckyBarnesDisplay(){
  buckyBarnes.classList.toggle('hidden')
}
document.querySelector('#buckyBarnes').addEventListener('click', buckyBarnesDisplay)

function captainAmericaDisplay(){
  captainAmerica.classList.toggle('hidden')
}
document.querySelector('#captainAmerica').addEventListener('click', captainAmericaDisplay)

function drStrangeDisplay(){
  drStrange.classList.toggle('hidden')
}
document.querySelector('#drStrange').addEventListener('click', drStrangeDisplay)

function hawkEyeDisplay(){
  hawkEye.classList.toggle('hidden')
}
document.querySelector('#hawkEye').addEventListener('click', hawkEyeDisplay)

function mariaHillDisplay(){
  mariaHill.classList.toggle('hidden')
}
document.querySelector('#mariaHill').addEventListener('click', mariaHillDisplay)

function hulkDisplay(){
  hulk.classList.toggle('hidden')
}
document.querySelector('#hulk').addEventListener('click', hulkDisplay)

function lokiDisplay(){
  loki.classList.toggle('hidden')
}
document.querySelector('#loki').addEventListener('click', lokiDisplay)

function moonKnightDisplay(){
  moonKnight.classList.toggle('hidden')}
document.querySelector('#moonKnight').addEventListener('click', moonKnightDisplay)

function nickFuryDisplay(){
  nickFury.classList.toggle('hidden')
}
document.querySelector('#nickFury').addEventListener('click', nickFuryDisplay)

function scarletWitchDisplay(){
  scarletWitch.classList.toggle('hidden')
}
document.querySelector('#scarletWitch').addEventListener('click', scarletWitchDisplay)

function shangChiDisplay(){
  shangChi.classList.toggle('hidden')
}
document.querySelector('#shangChi').addEventListener('click', shangChiDisplay)

function spiderManDisplay(){
  spiderMan.classList.toggle('hidden')
}
document.querySelector('#spiderMan').addEventListener('click', spiderManDisplay)

function warMachineDisplay(){
  warMachine.classList.toggle('hidden')
}
document.querySelector('#warMachine').addEventListener('click', warMachineDisplay)

function wongDisplay(){
  wong.classList.toggle('hidden')
}
document.querySelector('#wong').addEventListener('click', wongDisplay)


//check to see if question is correct
document.querySelector("#check").addEventListener("click", check);

function check() {
  const clue = document.querySelector("#clue").value.toLowerCase().replace(/\s/g, '') //get user guess, lowercase it, remove spaces
  if (clue == rightAnswer.toLowerCase()){
    alert('YES')
  }
  else {
    alert('No')
  }
}


document.querySelector('#thanosGlove').addEventListener('click', thanosSnap)

//THANOS SNAP
function thanosSnap(){
  for(i = 0; i < 8; i++){
    pick = Math.floor(Math.random()*(16-i))
    console.log(pick)
    characterList.splice(pick, 1)
    console.log(characterList)
  }
  for(i = 0; i < characterList.length; i++){
    const a = characterList[i] + "Pic"
    const faded = document.getElementById(a)
    
    setTimeout(function(){faded.style.opacity = 0.95}, 250) //this is very hacky but it works so idk
    setTimeout(function(){faded.style.opacity = 0.9}, 500)
    setTimeout(function(){faded.style.opacity = 0.85}, 750)
    setTimeout(function(){faded.style.opacity = 0.8}, 1000)
    setTimeout(function(){faded.style.opacity = 0.75}, 1250)
    setTimeout(function(){faded.style.opacity = 0.7}, 1500)
    setTimeout(function(){faded.style.opacity = 0.65}, 1750)
    setTimeout(function(){faded.style.opacity = 0.6}, 2000)
    setTimeout(function(){faded.style.opacity = 0.55}, 2250)
    setTimeout(function(){faded.style.opacity = 0.5}, 2500)
    setTimeout(function(){faded.style.opacity = 0.45}, 2750)
    setTimeout(function(){faded.style.opacity = 0.4}, 3000)
    setTimeout(function(){faded.style.opacity = 0.35}, 3250)
    setTimeout(function(){faded.style.opacity = 0.3}, 3500)
    setTimeout(function(){faded.style.opacity = 0.25}, 3750)
    setTimeout(function(){faded.style.opacity = 0.2}, 4000)
    setTimeout(function(){faded.style.opacity = 0.15}, 4250)
    setTimeout(function(){faded.style.opacity = 0.1}, 4500)
    setTimeout(function(){faded.style.opacity = 0.05}, 4750)
    setTimeout(function(){faded.style.opacity = 0.01}, 5000)
    }
  }

