const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const ctx = document.getElementById("hidden");

ctx.classList.add("hidden_btn");

let score = 0;
let flg = 0;

document.addEventListener("keydown", function(event) {
  jump();
});

function jump(){
  if(dino.classList != "jump"){
    dino.classList.add("jump");
    cactus.classList.add("run");
    dino.classList.add("run_dino");
    score++;
    if(score >= 20){
      ctx.classList.remove("hidden_btn");
    };
  }
  setTimeout(function(){
    dino.classList.remove("jump")
  }, 300)
}


let isAlive = setInterval(function(){
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    cactus.classList.remove("run");
    dino.classList.remove("run_dino");

    score = 0;
    flg = 0;
  }
  document.getElementById("Score").innerHTML = "Годиков: " + score;
})
