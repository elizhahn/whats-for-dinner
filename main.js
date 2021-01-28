
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
  inputMealType.forEach(meal => {
    if(meal.checked) {
    userChoice = meal.value;
  };
});
  switch(userChoice) {
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
};

function clearRecipe() {
  hideRecipe();
  randomRecipeText.innerText = "";
}

function hideRecipe() {
  imgCookPot.classList.remove("hidden");
  randomRecipeIntro.classList.add("hidden");
  btnClear.classList.add("hidden");
}

function showRecipe() {
  imgCookPot.classList.add("hidden");
  randomRecipeIntro.classList.remove("hidden");
  btnClear.classList.remove("hidden");
};

function displayRecipe() {
  showRecipe();
  randomRecipeText.innerText = `${randomRecipe}!`
};

function displayRecipeBar() {
  recipeBar.classList.toggle("hidden");
};

function displayUserRecipe() {
  showRecipe();
  randomRecipeText.innerText = `${inputUserRecipe.value}`;
};

function addUserRecipe () {
  var mealType = inputUserMealType.value;
  var userRecipe = inputUserRecipe.value;
  switch(mealType.toLowerCase()) {
    case "side":
    sides.push(userRecipe);
    break;
    case "main dish":
    mainDishes.push(userRecipe);
    break;
    case "dessert":
    desserts.push(userRecipe);
    break;
  };
}

// function validateForm(e) {
//   var mealType = inputUserMealType.value;
//    if(mealType.toLowerCase() !== "side" && mealType.toLowerCase() !== "main dish" && mealType.toLowerCase() !== "dessert") {
//      e.preventDefault();
//      messageError.classList.remove("hidden");
//      messageError.innerText = "Please enter: side, main dish, or dessert";
//   } else if(inputUserRecipe.value === "") {
//       e.preventDefault();
//       messageError.classList.remove("hidden");
//       messageError.innerText = "input required";
//   } else {
//     e.preventDefault();
//     messageError.classList.add("hidden");
//     displayUserRecipe();
//     addUserRecipe();
//     recipeBar.reset();
//   };
// };

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
