
var inputMealType = document.querySelectorAll("input[name='dish']");
var inputUserMealType = document.getElementById("recipe-type");
var inputUserRecipe = document.getElementById("recipe-name");
var btnLetsCook = document.querySelector(".lets-cook-btn");
var btnAddRecipe = document.querySelector(".add-a-recipe");
var btnAddNew = document.querySelector(".add-new-btn");
var imgCookPot = document.querySelector("svg");
var randomRecipeIntro = document.querySelector("p");
var randomRecipeText = document.querySelector(".random-dish");
var recipeBar = document.querySelector(".add-recipe-bar");
var messageError = document.getElementById("error");
var randomRecipe;

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
  for(var i = 0; i < inputMealType.length; i++) {
    if(inputMealType[i].checked) {
    userChoice = inputMealType[i].value
    }
  }
  if(userChoice === "sides") {
    randomRecipe = sides[randomIndex(sides)];
  }else if (userChoice === "main-dishes") {
    randomRecipe = mainDishes[randomIndex(sides)];
  }else {
    randomRecipe = desserts[randomIndex(sides)];
  }
  displayRecipe()
}

function changeDisplay() {
  imgCookPot.classList.add("hidden");
  randomRecipeIntro.classList.remove("hidden");
}

function displayRecipe() {
  changeDisplay();
  randomRecipeText.innerText = `${randomRecipe}!`
}

function displayRecipeBar() {
  recipeBar.classList.remove("hidden");
}

function displayUserRecipe() {
  changeDisplay();
  randomRecipeText.innerText = `${inputUserRecipe.value}`;
}

function validateForm(e) {
 if(inputUserMealType.value.toLowerCase() !== "side" && inputUserMealType.value.toLowerCase() !== "main dish" && inputUserMealType.value.toLowerCase() !== "dessert") {
   e.preventDefault();
   messageError.classList.remove("hidden");
   messageError.innerText = "Please enter: side, main dish, or dessert";
} else if(inputUserRecipe.value === "") {
    e.preventDefault();
    messageError.classList.remove("hidden")
    messageError.innerText = "input required";
}else {
  e.preventDefault();
  messageError.classList.add("hidden");
  displayUserRecipe();
  //return true? to use for other function?
}
}
