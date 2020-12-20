
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
var passwordError = document.querySelector(".pwd-msg");
var randomRecipe;
var users = [];

btnLetsCook.addEventListener("click", displayRandomDish);
btnAddRecipe.addEventListener("click", displayRecipeBar);
btnAddNew.addEventListener("click", validateForm);
btnClear.addEventListener("click", clearRecipe);
formLogin.addEventListener("submit", login);
recipeBar.addEventListener("dblclick", displayRecipeBar);

function login(e) {
  e.preventDefault();
  loginPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
  displayWelcome();
}

function displayWelcome() {
  var user = new User(inputName.value, inputUsername.value, inputPassword.value);
  users.push(user);
  welcomeMessage.innerText = `Hello,  ${inputName.value}`
}

function randomIndex(recipies) {
  return Math.floor(Math.random() * recipies.length);
};

function displayRandomDish() {
  var userChoice;
  for(var i = 0; i < inputMealType.length; i++) {
    if(inputMealType[i].checked) {
    userChoice = inputMealType[i].value;
  };
};
  if(userChoice === "sides") {
    randomRecipe = sides[randomIndex(sides)];
  }else if (userChoice === "main-dishes") {
    randomRecipe = mainDishes[randomIndex(sides)];
  }else {
    randomRecipe = desserts[randomIndex(sides)];
  }
  displayRecipe();
};

function clearRecipe() {
  changeDisplay();
  randomRecipeText.innerText = "";
}

function changeDisplay() {
  imgCookPot.classList.toggle("hidden");
  randomRecipeIntro.classList.toggle("hidden");
  btnClear.classList.toggle("hidden");
};

function displayRecipe() {
  changeDisplay();
  randomRecipeText.innerText = `${randomRecipe}!`
};

function displayRecipeBar() {
  recipeBar.classList.toggle("hidden");
};

function displayUserRecipe() {
  changeDisplay();
  randomRecipeText.innerText = `${inputUserRecipe.value}`;
};

function addUserRecipe () {
  var mealType = inputUserMealType.value;
  var userRecipe = inputUserRecipe.value;
  if(mealType.toLowerCase() === "side") {
    sides.push(userRecipe);
  };
  if(mealType.toLowerCase() === "main dish") {
    mainDishes.push(userRecipe);
  };
  if(mealType.toLowerCase() === "dessert") {
    desserts.push(userRecipe);
  };
};

function validateForm(e) {
  var mealType = inputUserMealType.value;
   if(mealType.toLowerCase() !== "side" && mealType.toLowerCase() !== "main dish" && mealType.toLowerCase() !== "dessert") {
     e.preventDefault();
     messageError.classList.remove("hidden");
     messageError.innerText = "Please enter: side, main dish, or dessert";
  } else if(inputUserRecipe.value === "") {
      e.preventDefault();
      messageError.classList.remove("hidden");
      messageError.innerText = "input required";
  } else {
    e.preventDefault();
    messageError.classList.add("hidden");
    displayUserRecipe();
    addUserRecipe();
    recipeBar.reset();
  };
};
