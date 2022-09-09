const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const gameLoop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", " ")
  );

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./images/game-over.webp";
    mario.style.width = "90px";
    mario.style.marginLeft = "50px";

    clearInterval(gameLoop);
  }
}, 10);

document.addEventListener("keydown", jump);
