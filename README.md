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
- Your calculator should not evaluate more than a single pair of numbers at a time 
- You should round answers with long decimals so that they don't overflow the screen
- Pressing = before entering all of the numbers or an operator could cause problems
- Pressing "clear" should wipe out any existing data.. make sure the user is really starting fresh after pressing "clear"
- Display a snarky error message if the user tries to divide by 0.. and don't let it crash your calculator

Extra credit:
- Users can get floating point numbers if they do tha math required to get one, but they can't type them in yet. Add a (.) button and let users input decimals. Make sure you don't let them type more than one!
- Make it look nice! At least make the operations a different color from the keypad buttons
- Add a "backspace" button, so the user can undo if they click the wrong number
- Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN doccumentation for event.preventDefault (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to help solve this problem

Resources:

For backspace function:
https://www.scaler.com/topics/remove-last-character-from-string-javascript/

For function to prevent decimal repetition:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

Add event listener to multiple elements using a loop:
https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/#:~:text=(more%20details).-,Adding%20an%20Event%20Listener%20to%20Multiple%20Elements%20Using%20a%20for,loop%20back%20into%20the%20function.

Converting a string to a number:
https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/#:~:text=(quantity))%3B-,How%20to%20convert%20a%20string%20to%20a%20number%20in%20JavaScript,will%20go%20before%20the%20operand.&text=We%20can%20also%20use%20the,into%20a%20floating%20point%20number.

JS Variable Scoping:
https://2ality.com/2011/02/javascript-variable-scoping-and-its.html#:~:text=Scoping%20in%20JavaScript%20is%20static,function%20in%20the%20following%20code.

Calling Array.join() on an object:
https://bobbyhadz.com/blog/javascript-typeerror-join-is-not-a-function

Pass-by-reference / Pass-by-value: 
https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language/5314911#5314911

Rounding:
https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript

https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

Check if an array is empty:
https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/#:~:text=To%20check%20if%20an%20array,0%20elements%20inside%20of%20it.

e.target:
https://developer.mozilla.org/en-US/docs/Web/API/Event/target


Rabbit hole links/ other useful info:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

Breaking out of an if statement:
https://stackoverflow.com/questions/4851657/call-break-in-nested-if-statements#:~:text=If%20you%20label%20the%20if%20statement%20you%20can%20use%20break.&text=You%20can%20even%20label%20and%20break%20plain%20blocks.

Switch statements:
https://www.w3schools.com/js/js_switch.asp

How to make CSS buttons the same size:
https://www.sitepoint.com/community/t/how-to-make-css-buttons-the-same-size/2720

Button hover effects:
https://www.w3schools.com/howto/howto_css_fading_buttons.asp


