var inputDishes = document.querySelectorAll("input[name='dish']");
var btnLetsCook = document.querySelector(".lets-cook");
var imgCookPot = document.querySelector("svg");

var randomDish;
btnLetsCook.addEventListener("click", randomDish);

//retrieves random array index
function randomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

//generates a random dish based on user input
function randomDish() {
  var userChoice;
  for(var i = 0; i < inputDishes.length; i++) {
    if(inputDishes[i].checked) {
    userChoice = inputDishes[i].value
    }
  }
  if(userChoice === "sides") {
    randomDish = sides[randomIndex(sides)];
  }else if (userChoice === "main-dishes") {
    randomDish = mainDishes[randomIndex(sides)];
  }else {
    randomDish = desserts[randomIndex(sides)];
  }
  displayDish()

}

function displayDish() {
  imgCookPot.classList.add("hidden");
}
