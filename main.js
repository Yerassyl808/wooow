let stickman = document.getElementById("stickman-container");
let stickmanRightLeg = document.getElementById("man-right-leg");
let stickmanLeftLeg = document.getElementById("man-left-leg");
let stickmanRightHand = document.getElementById("man-right-hand");
let stickmanRightHandFold = document.getElementById("right-hand-fold");

let stickWomanRightLeg = document.getElementById("woman-right-leg");
let stickWomanLeftLeg = document.getElementById("woman-left-leg");
let stickWoman = document.getElementById("stickwoman-container");

let programmer = document.getElementById("programmer-container");
let programmerRightLeg = document.getElementById("programmer-right-leg");
let programmerLeftLeg = document.getElementById("programmer-left-leg");

let road = document.getElementById("road");
let rose = document.getElementById("rose");
let msgBox = document.getElementById("msgBox");
let background = document.getElementById("primary-container");
let codingBox = document.getElementById("codingBox");
let box = document.getElementById("box");

let music = new Audio("audio.mp3");

function start() {
  // walking stickman toward stickwoman 20s(total 20s)
  setTimeout(() => {
    stickman.classList.add("stickman-animation-1");
    stickmanRightLeg.classList.add("right-leg-animation");
    stickmanLeftLeg.classList.add("left-leg-animation");
    setTimeout(() => {
      stickmanRightLeg.classList.remove("right-leg-animation");
      stickmanLeftLeg.classList.remove("left-leg-animation");
    }, 17000);
  }, 3000);

  // proposing stickman to stickwoman  13s(total 33s)
  setTimeout(() => {
    rose.style.display = "block";
    stickmanRightHand.style.display = "none";
    stickmanRightHandFold.style.display = "block";
    setTimeout(() => {
      msgBox.style.display = "block";
      setTimeout(() => {
        msgBox.style.display = "none";
      }, 9000);
    }, 1000);
  }, 21000);

  //stickwoman rejects 7s(total 40s)
  setTimeout(() => {
    stickWoman.classList.add("stickwoman-move-forward");
    stickWomanLeftLeg.classList.add("left-leg-fast-animation");
    stickWomanRightLeg.classList.add("right-leg-fast-animation");
    setTimeout(() => {
      stickWomanLeftLeg.classList.remove("left-leg-fast-animation");
      stickWomanRightLeg.classList.remove("right-leg-fast-animation");
    }, 7000);
  }, 33000);

  //rose fall 7s (total 47s)
  setTimeout(() => {
    stickmanRightHandFold.style.display = "none";
    stickmanRightHand.style.display = "block";
    rose.classList.add("rose-animation");
  }, 41000);

  //thunder & man go 21s (total 1:08s)

  setTimeout(() => {
    setTimeout(() => {
      background.classList.add("thunder-animation");
      stickman.classList.add("stickman-animation-2");
      stickmanRightLeg.classList.add("right-leg-animation");
      stickmanLeftLeg.classList.add("left-leg-animation");
      rose.style.display = "none";
      setTimeout(() => {
        background.classList.remove("thunder-animation");
        road.style.transform = "translateX(25%)";
      }, 15000);
    }, 6000);
  }, 48000);

  // stickman go to jump 27s (total 1:35s)

  setTimeout(() => {
    stickman.classList.add("stickman-animation-3");
    stickmanRightLeg.classList.add("right-leg-animation");
    stickmanLeftLeg.classList.add("left-leg-animation");
    setTimeout(() => {
      stickmanRightLeg.classList.remove("right-leg-animation");
      stickmanLeftLeg.classList.remove("left-leg-animation");
    }, 20000);
  }, 70000);

  //programmer come 15s (total 105000 )
  setTimeout(() => {
    programmerRightLeg.classList.add("right-leg-fast-animation");
    programmerLeftLeg.classList.add("left-leg-fast-animation");
    programmer.style.display = "block";
    programmer.classList.add("programmer-animation-1");
    setTimeout(() => {
      programmerRightLeg.classList.remove("right-leg-fast-animation");
      programmerLeftLeg.classList.remove("left-leg-fast-animation");
      msgBox.innerHTML = "Hello, stop!";
      msgBox.style.left = "900px";
      msgBox.style.display = "block";
      setTimeout(() => {
        msgBox.style.display = "none";
        programmer.classList.add("programmer-animation-2");
        programmerRightLeg.classList.add("right-leg-fast-animation");
        programmerLeftLeg.classList.add("left-leg-fast-animation");
        setTimeout(() => {
          programmerRightLeg.classList.remove("right-leg-fast-animation");
          programmerLeftLeg.classList.remove("left-leg-fast-animation");
        }, 5000);
      }, 2000);
    }, 3000);
  }, 95000);

  // discussion 24s (total 129000 )

  setTimeout(() => {
    msgBox.style.display = "block";
    msgBox.innerHTML = "Are you mad?";
    msgBox.style.left = "650px";
    setTimeout(() => {
      msgBox.style.display = "block";
      msgBox.innerHTML = "She broke my <br> heart ♥";
      msgBox.style.left = "50px";
      setTimeout(() => {
        msgBox.style.display = "block";
        msgBox.innerHTML =
          "Now forget her and spend your time <br> on important things like programming...";
        msgBox.style.left = "650px";
        setTimeout(() => {
          msgBox.style.display = "block";
          msgBox.innerHTML =
            "learn programming! it can break a loop <br> but never break your heart ♥";
          msgBox.style.left = "650px";
          setTimeout(() => {
            msgBox.style.display = "none";
          }, 8000);
        }, 8000);
      }, 4000);
    }, 4000);
  }, 105000);

  //thunder going stickman and programmer 15s( total 145000)
  setTimeout(() => {
    background.classList.add("thunder-animation");
    programmer.style.display = "block";
    programmer.classList.add("programmer-animation-3");
    stickman.classList.add("stickman-animation-4");
    programmerRightLeg.classList.add("right-leg-animation");
    programmerLeftLeg.classList.add("left-leg-animation");
    stickmanRightLeg.classList.add("right-leg-animation");
    stickmanLeftLeg.classList.add("left-leg-animation");
    setTimeout(() => {
      programmerRightLeg.classList.remove("right-leg-animation");
      programmerLeftLeg.classList.remove("left-leg-animation");
      stickmanRightLeg.classList.remove("right-leg-animation");
      stickmanLeftLeg.classList.remove("left-leg-animation");
      background.classList.remove("thunder-animation");
      road.style.transform = "translateX(0%)";
      programmer.style.display = "none";
      programmer.classList.remove("programmer-animation-3");
      programmer.classList.remove("programmer-animation-1");
      programmer.classList.remove("programmer-animation-2");

      stickman.classList.remove("stickman-animation-4");
      stickman.classList.remove("stickman-animation-1");
      stickman.classList.remove("stickman-animation-2");
      stickman.classList.remove("stickman-animation-3");
    }, 15000);
  }, 130000);

  // coding beginner practice hello world 10s (total 158000)
  setTimeout(() => {
    stickman.style.display = "block";
    stickman.style.left = "100px";
    setTimeout(() => {
      codingBox.style.display = "block";
      setTimeout(() => {
        codingBox.style.display = "none";
        setTimeout(() => {
          codingBox.style.display = "block";
          codingBox.innerHTML = 'print("hello World")';
          setTimeout(() => {
            codingBox.style.display = "none";
            setTimeout(() => {
              codingBox.style.display = "block";
              codingBox.innerHTML = 'cout<<"hello World";';
              setTimeout(() => {
                codingBox.style.display = "none";
                stickman.classList.remove("stickman-animation-5");
                stickmanRightLeg.classList.remove("right-leg-animation");
                stickmanLeftLeg.classList.remove("left-leg-animation");
                stickman.style.display = "none";
                road.style.display = "none";
              }, 3000);
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    }, 2000);
  }, 145000);

  // after some days 14s (179000)
  setTimeout(() => {
    box.style.display = "block";
    setTimeout(() => {
      box.style.display = "none";
    }, 3000);
  }, 160000);

  // errors comes 18s(total 183000)
  setTimeout(() => {
    road.style.display = "block";
    stickman.style.display = "block";
    setTimeout(() => {
      codingBox.style.display = "block";
      codingBox.style.color = "red";
      codingBox.style.border = "1px solid red";
      codingBox.innerHTML = "syntax error";
      setTimeout(() => {
        codingBox.style.display = "none";
        setTimeout(() => {
          codingBox.style.display = "block";

          codingBox.innerHTML = 'unexpected ";" on line 99';
          setTimeout(() => {
            codingBox.style.display = "none";
            setTimeout(() => {
              codingBox.style.display = "block";
              codingBox.innerHTML = "5 errors 3 warnings!";
              setTimeout(() => {
                codingBox.style.display = "none";
                setTimeout(() => {
                  stickman.style.display = "none";
                  road.style.display = "none";
                }, 2000);
              }, 3000);
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    }, 3000);
  }, 165000);

  // again talk with stickman and programmer 15000 (183000)
  setTimeout(() => {
    stickman.style.display = "block";
    road.style.display = "block";
    stickman.style.left = "300px";
    programmer.style.display = "block";
    programmer.style.left = "500px";

    setTimeout(() => {
      msgBox.style.display = "block";
      msgBox.innerHTML = "what happend !";
      msgBox.style.left = "650px";
      setTimeout(() => {
        msgBox.innerHTML = "I can't do <br> programming";
        msgBox.style.left = "50px";
        setTimeout(() => {
          msgBox.innerHTML = "do ctrl + c <br> ctrl + v ";
          msgBox.style.left = "650px";
          setTimeout(() => {
            msgBox.innerHTML = "StackOverFlow will help you";
            msgBox.style.left = "650px";
            setTimeout(() => {
              msgBox.style.display = "none";
              setTimeout(() => {
                stickman.style.display = "none";
                programmer.style.display = "none";
                road.style.display = "none";
              }, 1000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 1000);
  }, 183000);

  // successful coding messages 8s (199000)
  setTimeout(() => {
    stickman.style.display = "block";
    stickman.style.left = "100px";
    road.style.display = "block";
    setTimeout(() => {
      codingBox.style.display = "block";
      codingBox.style.color = "green";
      codingBox.style.border = "1px solid green";
      codingBox.innerHTML = "compiled successful !";
      setTimeout(() => {
        codingBox.style.display = "none";
        setTimeout(() => {
          codingBox.style.display = "block";
          codingBox.innerHTML = "0 error 0 warning !";
          setTimeout(() => {
            codingBox.style.display = "none";
            setTimeout(() => {
              stickman.style.display = "none";
              road.style.display = "none";
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    }, 2000);
  }, 199000);

  //ending
  setTimeout(() => {
    msgBox.style.display = "block";
    msgBox.style.left = "50%";
    msgBox.style.color = "white";
    msgBox.style.border = "1px solid white";
    msgBox.style.transform = "translate(-50%)";
    msgBox.innerHTML = "Created By <br> Cool Programming Projects";
  }, 209000);
}

let playBtn = document.getElementById("play-btn");
playBtn.onclick = () => {
  playBtn.style.display = "none";
  music.play();
  start();
};
