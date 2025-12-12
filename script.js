let switchCount = 0;

function playSound(id) {
  stopAllSounds(); // ⬅️ stops every other sound

  const sound = document.getElementById(id);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
}
function stopAllSounds() {
  const sounds = document.querySelectorAll("audio");
  sounds.forEach((s) => {
    s.pause();
    s.currentTime = 0;
  });
}

function fredText() {
  document.getElementById("text1").classList.remove("hide");
}

function bonText() {
  document.getElementById("text2").classList.remove("hide");
}

function foxText() {
  document.getElementById("text3").classList.remove("hide");
}

function chickText() {
  document.getElementById("text4").classList.remove("hide");
}

function switchBody() {
  if (document.getElementById("fox").classList.contains("hide") == true) {
    //if foxy is hidden, run these lines
    document.getElementById("bear").classList.add("hide");
    document.getElementById("bunny").classList.add("hide");
    document.getElementById("text1").classList.add("hide");
    document.getElementById("text2").classList.add("hide");
    document.getElementById("fox").classList.remove("hide");
    document.getElementById("chick").classList.remove("hide");
    document.getElementById("left").classList.remove("hide");
  } else if (
    document.getElementById("fox").classList.contains("hide") == false
  ) {
    //if foxy is hidden, run these lines
    showFullGif();
  }
}

function goBack() {
  document.getElementById("bear").classList.remove("hide");
  document.getElementById("bunny").classList.remove("hide");
  document.getElementById("fox").classList.add("hide");
  document.getElementById("chick").classList.add("hide");

  document.getElementById("text1").classList.add("hide");
  document.getElementById("text2").classList.add("hide");
  document.getElementById("text3").classList.add("hide");
  document.getElementById("text4").classList.add("hide");
}

function showFullGif() {
  const gif = document.getElementById("full-gif");
  const sound = document.getElementById("gsound");

  gif.classList.remove("hide");

  document.querySelector(".top-row").style.display = "none";
  document.querySelector(".bottom-row").style.display = "none";

  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    gif.classList.add("hide");
    sound.pause();
    sound.currentTime = 0;

    document.querySelector(".top-row").style.display = "";
    document.querySelector(".bottom-row").style.display = "";

    switchCount = 0;
    goBack();
  }, 3000);
}
let logoClickGoal = Math.floor(Math.random() * 15) + 1;
let logoClicks = 0;

function logoClicked() {
  logoClicks++;
  console.log(logoClicks);

  if (logoClicks >= logoClickGoal) {
    // reset for next time
    logoClicks = 0;
    logoClickGoal = Math.floor(Math.random() * 15) + 1;

    playGoldenFreddy();
  } else if (logoClicks < logoClickGoal) {
    // do nothing — logic stays the same
  }
}
function playGoldenFreddy() {
  const gif = document.getElementById("goldGIF");
  const sound = document.getElementById("goldSound");

  gif.classList.remove("hide");

  document.querySelector(".top-row").style.display = "none";
  document.querySelector(".bottom-row").style.display = "none";

  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    gif.classList.add("hide");
    sound.pause();
    sound.currentTime = 0;

    document.querySelector(".top-row").style.display = "";
    document.querySelector(".bottom-row").style.display = "";
  }, 4500); // how long the jump gif stays on screen
  let gold = document.getElementById("goldSound");
  gold.volume = 1.0;
  gold.play();
}
