
var inputDishes = document.querySelectorAll("input[name='dish']");
var inputUserDish = document.getElementById("recipe-type");
var inputUserRecipe = document.getElementById("recipe-name");
var btnLetsCook = document.querySelector(".lets-cook-btn");
var btnAddRecipe = document.querySelector(".add-a-recipe");
var btnAddNew = document.querySelector(".add-new-btn");
var imgCookPot = document.querySelector("svg");
var randomDishIntro = document.querySelector("p");
var randomDishText = document.querySelector(".random-dish");
var recipeBar = document.querySelector(".add-recipe-bar");
var messageError = document.getElementById("error");
var randomDish;

btnLetsCook.addEventListener("click", displayRandomDish);
btnAddRecipe.addEventListener("click", displayRecipeBar);
btnAddNew.addEventListener("click", validateForm);

//retrieves random array index
function randomIndex(recipies) {
  return Math.floor(Math.random() * recipies.length)
}

//generates a random dish based on user input
function displayRandomDish() {
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

function changeDisplay() {
  imgCookPot.classList.add("hidden");
  randomDishIntro.classList.remove("hidden");
}

function displayDish() {
  changeDisplay();
  randomDishText.innerText = `${randomDish}!`
}

function displayRecipeBar() {
  recipeBar.classList.remove("hidden");
}

// function addUserRecipe() {
//   if()
// }

function validateForm(e) {
var messages = [];
var test;
 if(inputUserDish.value.toLowerCase() !== "side" && inputUserDish.value.toLowerCase() !== "main dish" && inputUserDish.value.toLowerCase() !== "dessert") {
  messages.push("Please enter: side, main dish, or dessert");
  }
  if(messages.length > 0) {
  e.preventDefault();
  messageError.classList.remove("hidden");
  messageError.innerText = messages[0];
  messageError.style.color = "red";
 }else {
  e.preventDefault();
  messageError.classList.add("hidden");
  //return true? to use for other function?
}
}
