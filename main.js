
var inputMealType = document.querySelectorAll("input[name='dish']");
var inputUserMealType = document.getElementById("recipe-type");
var inputUserRecipe = document.getElementById("recipe-name");
var inputUsername = document.getElementById("user-name");
var inputPassword = document.getElementById("password");
var inputName = document.getElementById("name");
var btnLetsCook = document.querySelector(".lets-cook-btn");
var btnAddRecipe = document.querySelector(".add-a-recipe");
var btnClear = document.querySelector(".clear-btn");
var btnAddNew = document.querySelector(".add-new-btn");
var mainPage = document.querySelector(".container");
var loginPage = document.querySelector(".login-container");
var formLogin = document.querySelector("form");
var welcomeMessage = document.querySelector(".welcome-msg");
var imgCookPot = document.querySelector("svg");
var randomRecipeIntro = document.querySelector("p");
var randomRecipeText = document.querySelector(".random-dish");
var recipeBar = document.querySelector(".add-recipe-bar");
var messageError = document.getElementById("error");
var randomRecipe;
var users = [];

btnLetsCook.addEventListener("click", displayRandomDish);
btnAddRecipe.addEventListener("click", displayRecipeBar);
btnAddNew.addEventListener("click", validateForm);
btnClear.addEventListener("click", clearRecipe);
formLogin.addEventListener("submit", login);
recipeBar.addEventListener("dblclick", displayRecipeBar);

function display(feature) {
  feature.classList.remove("hidden");
}

function hide(feature) {
  feature.classList.add("hidden");
}

function login(e) {
  e.preventDefault();
  hide(loginPage);
  display(mainPage);
  displayWelcome();
}

function displayWelcome() {
  var user = new User(inputName.value, inputUsername.value, inputPassword.value);
  users.push(user);
  welcomeMessage.innerText = `Hello,  ${inputName.value}`
}

function randomIndex(recipies) {
  return Math.floor(Math.random() * recipies.length);
}

function displayRandomDish() {
  var userChoice;
  inputMealType.forEach(meal => {
    if (meal.checked) {
      userChoice = meal.value;
    }
  })
  switch (userChoice) {
  case "sides":
    randomRecipe = sides[randomIndex(sides)];
    break;
  case "main-dishes":
    randomRecipe = mainDishes[randomIndex(sides)];
    break;
  case "desserts":
    randomRecipe = desserts[randomIndex(sides)];
    break;
  }
  displayRecipe();
  randomRecipeText.innerText = `${randomRecipe}!`
}

function clearRecipe() {
  display(imgCookPot);
  hide(randomRecipeIntro);
  hide(btnClear);
  randomRecipeText.innerText = "";
}

function displayRecipe() {
  hide(imgCookPot);
  display(randomRecipeIntro);
  display(btnClear);
}

function displayRecipeBar() {
  recipeBar.classList.toggle("hidden");
}

function displayUserRecipe() {
  displayRecipe();
  randomRecipeText.innerText = `${inputUserRecipe.value}`;
}

function validateUserRecipe() {
  var mealType = inputUserMealType.value;
  switch (mealType.toLowerCase()) {
  case "side":
    addUserRecipe();
    break;
  case "main dish":
    addUserRecipe();
    break;
  case "dessert":
    addUserRecipe();
    break;
  default:
    display(messageError);
    messageError.innerText = "Please enter: side, main dish, or dessert";
  }
}

function addUserRecipe() {
  var userRecipe = inputUserRecipe.value;
  sides.push(userRecipe);
  displayUserRecipe();
  hide(messageError);
  recipeBar.reset();
}

function validateForm(e) {
  e.preventDefault();
  if (inputUserRecipe.value === "" || inputUserMealType.value === "") {
    display(messageError);
    messageError.innerText = "input required";
  } else {
    validateUserRecipe();
  }
}
