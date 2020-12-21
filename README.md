
## title: What's For Dinner?
---

A [Front-End Project](https://frontend.turing.io/projects/module-1/dinner.html) by [Elizabeth Hahn](https://github.com/elizhahn) 



1. [Overview](#overview)
2. [Learning Goals](#learning-goals)
3. [Technologies](#technologies)
4. [Features](#features)
5. [Challenges](#challenges)
6. [Wins](#wins)
7. [Future Additions](#future-additions)


## Overview

This is a Turing School of Software and Design Module 1 project. The project consists of building an application to match a provided comp. The MVP will allow the user to chose a meal type and a random recipe idea will be displayed. In addition to building the application MVP, three extra functionalities were built:

* Creating a login page that matches the comp. The user should be able to login and be taken to the main page
* User ability to add a recipe of their own that is displayed on the main page and will be stored with the other recipies according to meal type. 
* Ability to clear the recipe from the main page
* Error handling for login page and add a recipe bar


## Learning Goals

* Gain experience building an application that utilizes HTML, CSS and JavaScript
* Write HTML and CSS to match a provided comp
* Understand how to listen to and respond to user events
* Individualize your programming skill set


## Technologies

* HTML
* CSS
* Javascript
* Git
* GitHub
* [GitHub Pages Site](https://elizhahn.github.io/whats-for-dinner/)

---
## Features

+ [Login Page](#login-page)
+ [Main Page Layout](#main-page-layout)
+ [Display Random Recipe](#create-your-own-cover)
+ [Clear Recipe](#save-cover)
+ [Add A Recipe](#delete-cover)


## Login Page

When user visits the page, they will be taken to a login page. Each input field has browser validation checks built in to ease user experience. The login page was designed to match the provided comp and create a feeling of unity. 

![](https://media.giphy.com/media/UmibTf3rF0zmqLcDx1/giphy.gif)


## Main Page layout

The main page was built to match this [spec](https://frontend.turing.io/projects/module-1/dinner.html). 

![comp](docs/comp.png)


## Display Random Recipe

When the user chooses a meal type, the cookpot image should disappear and a random recipe idea should display. The user should only be able to choose one, and cannot leave a radio button unchecked. 


![](https://media.giphy.com/media/nSv5Jf012x4BCvZMP9/giphy.gif)


## Clear Recipe
When the user clicks the "LET'S COOK!" button, a recipe will be displayed and a clear button will appear. When the clear button is clicked, the cook pot image should be displayed and the recipe should be cleared and hidden. 

![](https://media.giphy.com/media/mmevdry5IHNJ8QGOEQ/giphy.gif)


## Add A Recipe

If the "ADD A RECIPE" button is clicked, a bar on the bottom of the page will appear and give the user an option to add their own unique recipe idea. Input validation checks for the correct meal type and for empty fields. An error message will display to guide the user into correctly submitting a recipe. When recipe is submitted, input fields are cleared. Additionally, the user can hide the recipe bar by double clicking anywhere on the bar. 

![](https://media.giphy.com/media/1D7GoxY1WWlzU1st7K/giphy.gif)

---

![](https://media.giphy.com/media/3g3zShFYZpi7dQRGwX/giphy.gif)
---
## Challenges

* Integrating brand new CSS knowledge into building the comp proved to be challenging. 
* Form validation was also another area that required some time to figure out the best way to validate for the user. 
* Making methodical and organized commits is still something to work on. 


---
## Wins

* Successfully meeting all the learning goals and completing 3 CYOA features.
* Designing and creating a login page to match the application.
* Debugging with the debugger and Dev tools.

---
## Future Additions

* Create local storage so user data persists after page reloads. 
* Have an option for the user to create an account, and their information will be saved, if the user has an account, they can sign in with their email, and password and be greeted on the main page personally without inputting their name
* username and password validation from server side 
* Animated transition from login page to main page
