const close = document.querySelector('.close')
const toggle_btn =  document.querySelector('.rule-btn')
const pop_up = document.querySelector('.pop-up')
const overlay = document.querySelector('.overlay')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const games = document.querySelectorAll('.games')
const body_one = document.querySelector('.body-one')
const body_two = document.querySelector('.body-two')
const play_again = document.querySelector('#btn2')
const who_wons = document.querySelector('.who-wons')
const your_choice = document.querySelector('.your-choice')
const comp_choice = document.querySelector('.comp-choice')
const score = document.querySelector('#score')

let user_choice;
let computer_choice;
let user_final_choice;
let final_score  = 0;

games.forEach(sl => {
      sl.addEventListener('click', (e) => {
            user_choice = e.target.id
            computer()
            change()
            user()
            check_who_wins()
      })
});

play_again.addEventListener('click', () => {
      body_one.style.display = "flex"
      body_two.style.display = "none"
      // computer()
})

function change() {
      body_one.style.display = "none"
      body_two.style.display = "flex"
}

function computer() {
      const random_number = Math.round(Math.random() * 3) + 1;
      if (random_number === 1) {
            comp_choice.setAttribute('src', 'images/icon-paper.svg')
            computer_choice = "paper";
            comp_choice.classList.toggle('paper')
      } else if (random_number === 2) {
            comp_choice.setAttribute("src" , "images/icon-rock.svg")
            computer_choice = "rock";
            comp_choice.classList.toggle('rock')

      } else if (random_number === 3) {
            computer_choice = "scissors";
            comp_choice.setAttribute("src", "images/icon-scissors.svg")
            comp_choice.classList.toggle('scissors')
            
      }
}

function user() {
      if (user_choice == "paper") {
            your_choice.setAttribute("src", "images/icon-paper.svg")
            user_final_choice = "paper"
            your_choice.classList.toggle("scissors")
      }else if (user_choice == "rock") {
            your_choice.setAttribute("src", "images/icon-rock.svg")
            user_final_choice = "rock"
            your_choice.classList.add("rock")
            
      }else if (user_choice == "scissors"){
            your_choice.setAttribute("src", "images/icon-scissors.svg")
            user_final_choice = "scissors"
            your_choice.classList.add("scisisors")

      }
}

function check_who_wins() {
      if (user_choice == "paper" && computer_choice == "paper") {
            who_wons.textContent = "DRAW"
            final_score = final_score
      }else if (user_choice == "paper" && computer_choice == "rock") {
            who_wons.textContent = "YOU WON"
            final_score ++
      }else if (user_choice == "paper" && computer_choice == "scissors") {
            who_wons.textContent = "YOU LOST"
            final_score --
      } else if (user_choice == "rock" && computer_choice == "rock") {
            who_wons.textContent = "DRAW"
            // final_score
      }else if (user_choice == "rock" && computer_choice == "paper") {
            who_wons.textContent = "YOU LOST"
            final_score --
      }else if (user_choice == "rock" && computer_choice == "scissors") {
            who_wons.textContent = "YOU WON"
            final_score ++
      }else if (user_choice == "scissors" && computer_choice == "scissors") {
            who_wons.textContent = "DRAW"

      }else if (user_choice == "scissors" && computer_choice == "paper") {
            who_wons.textContent = "YOU WON"
            final_score++
      }else if (user_choice == "scissors" && computer_choice == "rock") {
            who_wons.textContent = "YOU LOST"
            final_score--
      }
      if (final_score <= -1) {
            score.style.color = "red"
      } else if(final_score >= 1){
            score.style.color = "green"
      } else {
            score.style.color = "black"      
      }

      score.textContent = final_score

}

toggle_btn.addEventListener('click', () => {
      pop_up.classList.toggle('down');
      overlay.classList.toggle("hidden");

})

close.addEventListener('click', () => {
      pop_up.classList.remove('down')
      overlay.classList.add("hidden");
})

overlay.addEventListener('click',() => {
      pop_up.classList.remove('down')
      overlay.classList.add("hidden");
})
