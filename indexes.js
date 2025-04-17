let homeScore = 0;
let guestScore = 0;

function add1() {
  homeScore += 1;
  updateScores();
}

function add2() {
  homeScore += 2;
  updateScores();
}

function add3() {
  homeScore += 3;
  updateScores();
}

function awayAdd1() {
  guestScore += 1;
  updateScores();
}

function awayAdd2() {
  guestScore += 2;
  updateScores();
}

function awayAdd3() {
  guestScore += 3;
  updateScores();
}

function updateScores() {
  // Update the score for HOME team
  document.querySelector('.team:nth-child(1) .score').innerText = homeScore;

  // Update the score for GUEST team
  document.querySelector('.team:nth-child(2) .score').innerText = guestScore;
}

function resetGame(){
  homeScore = 0;
  guestScore = 0;
  updateScores()
}
