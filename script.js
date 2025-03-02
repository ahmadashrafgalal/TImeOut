
function StartGame() {
    const player1 = document.getElementById("player1_a");
    const player2 = document.getElementById("player2_a");
    const timer_element = document.getElementById("timer");
    const bar = document.getElementById("bar");
    const start_button = document.getElementById("start_button");

    player1.style.display = "block";
    player2.style.display = "none";
    timer_element.style.width = "100%";
    bar.className = "progress progress-bar-info";
    start_button.style.display = "none";
    decreaseTimer();

}

function change_bar_color() {
  const bar = document.getElementById("bar");
  const timer_element = document.getElementById("timer");
  timer_element.style.width = "100%";
  if (bar.className === "progress progress-bar-info") {
    bar.className = "progress progress-bar-warning";
  } else if (bar.className === "progress progress-bar-warning") {
    bar.className = "progress progress-bar-info";
  }
}


let timerInterval; 

function decreaseTimer() {
    const timer_element = document.getElementById("timer");

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timer_element.style.width = "100%";
    let width = 100;

    timerInterval = setInterval(() => {
        width -= 100 / 150;
        timer_element.style.width = width + "%";

        if (width <= 0) {
        clearInterval(timerInterval); 
        let player = ""
        if (document.getElementById("player1_a").style.display === "block") {
            player = "Player 1";
        } else {
            player = "Player 2";
        }
        alert(player + " Lost");
        }
    }, 100);
}

function handelFirstClick(letter_id) {
    const letter = document.getElementById(letter_id);
    letter.className = "text-center bg-success bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow";
    letter.onclick = function () {
    HandelSecondClick(this.id);
    };

}

function HandelSecondClick(letter_id) {
    const letter = document.getElementById(letter_id);
    letter.className = "text-center bg-secondary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow";
    letter.onclick = null;
    if (!Check_still_litters()) {
        alert("Game Over");
    }
    
    change_player();
}

function change_player() {
    const player1 = document.getElementById("player1_a");
    const player2 = document.getElementById("player2_a");
    change_bar_color();
    decreaseTimer();
    if (player1.style.display === "none") {
        player1.style.display = "block";
        player2.style.display = "none";
    } else {
        player1.style.display = "none";
        player2.style.display = "block";
    }
}
function Check_still_litters(){
    const letters = document.getElementsByClassName("colors-container");
    for (let i = 0; i < letters.length; i++) {
        if (
          letters[i].className ===
          "text-center bg-primary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow"
        ) {
          return true;
        }
    }
    return false;
}
