The Odin Project
Calculator:

Steps: 

(1) Create functions for the following math operators and test in console:

add
subtract
multiply
divide

(2) Create an operate function that takes an operator and 2 numbers and calls one of the above functions on the numbers

(3) Create a basic HTML calculator with buttons for each digit, each of the above functions and the (=) key
- Don't worry about connecing the JS yet
- There should also be a display for the calculator. Fill it with some dummy numbers so it looks correct
- Add a "clear" button

(4) Create the functions that populate the display when you click the number buttons. You should be storeing the "display value in a variable for use in the next step

(5) Make the caculator work! You'll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the (=) key
- You should already have the code that can populate the display, so once operate() has been called, update the display with the "solution" of the operation
- This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them (this may take a while)

(6) Watch out for these bugs if they show up in your code:
- Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For ex: 12 + 7 - 5 * 3 = should yield 42. Example link : https://mrbuddh4.github.io/calculator/
- Your calculator should not ecaluate more than a single pair of numbers at a time 
- You should round answers with long decimals so that they don't overflow the screen
- Pressing = before entering all of the numbers or an operator could cause problems
- Pressing "clear" should wipe out any existing data.. make sure the user is really starting fresh after pressing "clear"
- Display a snarky error message if the user tries to divide by 0.. and don't let it crash your calculator