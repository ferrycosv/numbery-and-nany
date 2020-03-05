# Numbery or NaNy: development strategy

Building this site one step at a time

## 0. Setup

> * index.html, style.css
> * Basic HTML layout and CSS style.

## 1. Data & Log

> * entries.js, log.js
> * Creating data structure to store the state of the webpage interaction with the user functions, log data structure to save the user actions over time.

## 2. Init

> * init.js, renderlist.js
> * contains the code executed when the browser loads the webpage, renders the initial state of the data object 'entries' to the screen by html tags, logs the initial operation as first record in the log array.

## 3. User Story: Save button

> * Makes sense to start coding the save function to grab and store the values from the html input and perform the logic to update the information of the data object.
> * save-button.js handler and listener, hasduplicates.js
> * read the user input from the html input element, read perform the logic to separate numbers and strings and check for duplicate values, lastly render the data object on screen.

## 4. User Story: Remove button

> * The user may want to remove elements from the lists of numbers and strings. 
> * remove.js handler and listener
> * The remove button will allow the user to remove the input text from the list, and after allow them to save again the removed entries.