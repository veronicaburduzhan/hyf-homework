const timerInput = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const playerS = document.getElementById("playerS");
const playerL = document.getElementById("playerL");
const gameStatus = document.getElementById("gameStatus");
const counterS = document.getElementById("counterS");
const counterL = document.getElementById("counterL");

startButton.addEventListener("click", startGame);
function startGame() {
  let sumS = 0;
  let sumL = 0;
  if (!timerInput.value) {
    gameStatus.innerHTML = "Please, set time first!";
  } else {
    document.addEventListener("keydown", countKeyPress);
    function countKeyPress(event) {
      const letter = event.key;
      if (letter === "s") {
        sumS++;
        counterS.innerHTML = sumS;
      } else if (letter === "l") {
        sumL++;
        counterL.innerHTML = sumL;
      } else {
        gameStatus.innerHTML = `You should press only S and L to participate in the battle. You pressed ${letter}.`;
      }
    }
  }

  setTimeout(() => {
    document.removeEventListener("keydown", countKeyPress);
    if (sumS === 0 && sumL === 0) {
      gameStatus.innerHTML = `You didn't press any keys :(`;
    } else if (sumS > sumL) {
      gameStatus.innerHTML = `Congrats Player S!`;
      renderConfetti(`playerS`);
    } else if (sumS < sumL) {
      gameStatus.innerHTML = `Congrats Player L!`;
      renderConfetti(`playerL`);
    } else if (sumS === sumL) {
      gameStatus.innerHTML = `Wow! It's draw`;
    }
    startButton.innerHTML = "Play Again";
  }, timerInput.value * 1000);

  startButton.addEventListener("click", function () {
    window.location.reload();
    startButton.addEventListener("click", startGame);
  });

  const seconds = timerInput.value;
  let timeLeft = seconds - 1;
  const countdown = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = `Times up!`;
    } else {
      document.getElementById("countdown").innerHTML = `${timeLeft} sec left`;
      timeLeft--;
    }
  }, 1000);
  setTimeout(() => {
    startButton.removeEventListener("click", startGame);
  }, timerInput.value * 1000);

    //this throw an error that leads to core file of confetti generator:(
  function renderConfetti(id) {
    const confettiSettings = { target: id };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
}
