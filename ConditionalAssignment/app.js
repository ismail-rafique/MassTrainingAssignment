/** 1. Write a program that takes input a name from user & greet the
user like this: */

    // var userName = prompt("Enter your Name:");
    // document.writeln("Hello! " + userName);



/** 2. Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default. */

    // var num = prompt("Enter a number:", 5);
    // var count = 0;
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);
    // console.log( num + ' x ' + ++count + ' = ' + num*count);



/** 3. Write a program to take “city” name as input from user. If user
enters “Karachi”, welcome the user like this: “Welcome to city
of lights” */

    // var city = prompt("Enter your city:");
    
    // if (city.toLowerCase() == "karachi") {
    //     document.writeln("Welcome to the city of light");
    // }
    // else {
    //     document.writeln("Welcome to the " + city);
    // }



/** 4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am. */

    // var gender = prompt("Enter your gender:");
    
    // if (gender.toLowerCase() == "male") {
    //     document.writeln("Good Morning Sir");
    // }
    // else if (gender.toLowerCase() == "female") {
    //     document.writeln("Good Morning Ma'am");
    // }
    // else {
    //     alert("You can select your gender as Male or Female");
    // }



/** 5. Write a program to take input color of road traffic signal from
the user & show the message according to this table:

Signal color         Message
red                  vehicles must stop
yellow               vehicles should get ready to move
green                vehicles can move now */

    // var signalLight = prompt("Enter a Traffic Signal Light color");
    // if (signalLight.toLowerCase() == "red") {
    //     document.writeln("vehicles must stop");
    // }
    // else if (signalLight.toLowerCase() == "yellow") {
    //     document.writeln("vehicles should get ready to move");
    // }
    // else if (signalLight.toLowerCase() == "green") {
    //     document.writeln("vehicles can move now");
    // }
    // else {
    //     alert("Traffic Signal should must be 'Red', 'Yellow' or 'Green'")
    // }



/** 6. Write a program to take input max age & current age from
user. If the current age is less than or equal to max age, show
the message “You are welcome” */

    // var maxAge = prompt("Enter Max Age:");
    // var currentAge = prompt("Enter your current Age:");
    // if (currentAge <= maxAge) {
    //     document.writeln("<h1>You are Welcome</h1>");
    // }
    // else {
    //     document.writeln("You are not allowed");
    // }



/** 7. Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message “Please refill the fuel in your car” */

    // var currentFuel = prompt("How much fuel is remaining in your car (in Lit)");
    // if (currentFuel < 0.25) {
    //     document.writeln("Please refill the fuel in your car");
    // }
    // else {
    //     document.writeln("You are ready to go...");
    // }




 /** 8. Run this script, & check whether alert message would be
displayed or not. Record the outputs. */

    // /*a.*/  
    // var a = 4;
    // if (++a === 5){
    // alert("given condition for variable a is true");
    // } //true
    
    // /*b.*/  
    // var b = 82;
    // if (b++ === 83){
    // alert("given condition for variable b is true");
    // } //false
    
    // /*c.*/  
    // var c = 12;
    // if (c++ === 13){
    // alert("condition 1 is true"); //false
    // }
    // if (c === 13){
    // alert("condition 2 is true"); //true
    // }
    // if (++c < 14){
    // alert("condition 3 is true"); //false
    // }
    // if(c === 14){
    // alert("condition 4 is true"); //true
    // }
    
    // /*d.*/ 
    // var materialCost = 20000;
    // var laborCost = 2000;
    // var totalCost = materialCost + laborCost;
    // if (totalCost === laborCost + materialCost){
    // alert("The cost equals");
    // } //true
    
    // /*e.*/ 
    // if (true){
    // alert("True"); //true
    // }
    // if (false){
    // alert("False"); //false
    // }
    
    // /*f.*/ 
    // if("car" < "cat"){
    // alert("car is smaller than cat");
    // } //smaller



/** 9. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade
Show the total marks, marks obtained, percentage, grade &
remarks like: */

    // var subject1 = +prompt("Enter you obtained marks in Subject-1");
    // var subject2 = +prompt("Enter you obtained marks in Subject-2");
    // var subject3 = +prompt("Enter you obtained marks in Subject-3");
    // var obtained = subject1 + subject2 + subject3;
    // var totalMarks = prompt("Enter the total marks:");
    // var calculated = obtained/totalMarks*100;

    // document.writeln("<h1>Mark Sheet</h1><br>");
    // document.writeln("<b>Total Marks:<b> " + totalMarks + "<br>");
    // document.writeln("<b>Marks Obtained:<b> " + obtained + "<br>");
    // document.writeln("<b>Percentage :<b> " + calculated.toFixed(2) + "%<br>")
    // if (calculated >= 80) {
    //     document.writeln("<b>Grade: A-One<b>" + "<br>")
    //     document.writeln("<b>Remarks: Excellent<b>")
    // }
    // else if (calculated >= 70) {
    //     document.writeln("<b>Grade: B<b>" + "<br>")
    //     document.writeln("<b>Remarks: Good<b>")
    // }
    // else if (calculated >= 60) {
    //     document.writeln("<b>Grade: C<b>" + "<br>")
    //     document.writeln("<b>Remarks: You need to improved<b>")
    // }
    // else {
    //     document.writeln("<b>Grade: Fail<b>" + "<br>")
    //     document.writeln("<b>Remarks: Sorry<b>")
    // }


/** 10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount */

    // var item1 = prompt("Purchased item-1");
    // var price1 = +prompt("What is the price of " + item1);
    // var item2 = prompt("Purchased item-2");
    // var price2 = +prompt("What is the price of " + item2);
    // var qtyItem1 = +prompt("How many " + item1 + " have you purchased?");
    // var qtyItem2 = +prompt("How many " + item2 + " have you purchased?");
    // var shippingCharges = +prompt("Enter the Shipping Charges");
    // var total = (price1 * qtyItem1) + (price2 * qtyItem2) + shippingCharges;
    
    
    // document.writeln("<h1>Shopping Cart</h1><br>");
    // document.writeln("<b>Price of " + item1 + " is " + price1 + "<b><br>");
    // document.writeln("<b>Quantity of " + item1 + " is " + qtyItem1 + "<b><br>");
    // document.writeln("<b>Price of " + item2 + " is " + price2 + "<b><br>");
    // document.writeln("<b>Quantity of " + item2 + " is " + qtyItem2 + "<b><br><br>");
    // document.writeln("<b>Shipping Charges: " + shippingCharges + "<b><br><br>");
    // document.writeln("<b>Total cost of your order is " + total + " PKR<b><br>")
    // if (total >= 2000) {
    //     document.writeln("<b>Discount Price is " + Math.round((90/100) * total) + " PKR<b>")
    // }
    // else {
    //     document.writeln("<b>Discount Price is " + Math.round(total) + " PKR<b>")
    // }



/** 11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */

    // var secret = 7;
    // var userInput = +prompt("Guess the secret number:");
    // if ( (userInput - 1) == secret || (userInput + 1) == secret) {
    //     document.writeln("Close enough to the correct answer")
    // }
    // else if (userInput == secret) {
    //     document.writeln("Bingo! Correct answer");
    // }
    // else {
    //     document.writeln("Wrong! Tri Again...")
    // }


/** 12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3. */

    // var divisibleBy3 = +prompt("Check if a number is Divisible by 3");
    // if ( divisibleBy3 % 3 == 0 ) {
    //     document.writeln("Yes " +divisibleBy3 + " is Divisible by 3")
    // }
    // else {
    //     document.writeln("No " +divisibleBy3 + " is not Divisible by 3")
    // }


/** 13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B) */

    // var team1 = prompt("Enter the Name of First Team");
    // var scoreOfTeam1 = +prompt("Enter First Team Score:");
    // var team2 = prompt("Enter the Name of Second Team");
    // var scoreOfTeam2 = +prompt("Enter Second Team Score:");
    // if (scoreOfTeam1 > scoreOfTeam2) {
    //     document.writeln(team1 + " has won the match");
    // }
    // else if (scoreOfTeam1 < scoreOfTeam2) {
    //     document.writeln(team2 + " has won the match");
    // }
    // else {
    //     document.writeln("The match is tie.");
    // }



/** 14. Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables */

    var dataType = prompt("Enter a data and check its type:");
    if (typeof(parseFloat(dataType)) === "number" && parseFloat(dataType) !== NaN ) {
        document.writeln(dataType + " is a Number type");
    }
    else if (dataType.toLowerCase == "true" || dataType.toLowerCase == "false") {
        document.writeln(dataType + " is a Boolean type");
    }
    else {
        document.writeln(dataType + " is a String type");
    } //------------------------------------------------------incomplete


/** 15. Write a program that checks whether the given input is an
even number or an odd number. */
    
    // var number = +prompt("Enter a number to check Even or Odd");
    // if (number % 2 == 0) {
    //     document.writeln(number + " is a Even number")
    // }
    // else {
    //     document.writeln(number + " is a Odd number")
    // }



/** 16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

    // var temperature = +prompt("What is the current temperature in your city.")
    // if (temperature > 40) {
    //     document.writeln("It is too hot outside.");
    // }
    // else if (temperature > 30) {
    //     document.writeln("The Weather today is Noraml.");
    // }
    // else if (temperature > 20) {
    //     document.writeln("Today's Weather is cool.");
    // }
    // else {
    //     document.writeln("OMG! Today's Weather is so Cool.")
    // }



/** 17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */

    // var fNumber = +prompt("Enter first number");
    // var sNumber = +prompt("Enter second number");
    // var operator = prompt("Choose an operation, + , - , * , / , %");
    // if (operator == "+") {
    //     document.writeln(fNumber +  " + " + sNumber + " = " + fNumber + sNumber);
    // }
    // else if (operator == "-") {
    //     document.writeln(fNumber +  " - " + sNumber + " = " + fNumber - sNumber);
    // }
    // else if (operator == "*") {
    //     document.writeln(fNumber +  " * " + sNumber + " = " + fNumber * sNumber);
    // }
    // else if (operator == "/") {
    //     document.writeln(fNumber +  " / " + sNumber + " = " + fNumber / sNumber);
    // }
    // else if (operator == "%") {
    //     document.writeln(fNumber +  " % " + sNumber + " = " + fNumber % sNumber);
    // }
    // else {
    //     alert("Operator must be + , - , * , / , %")
    // }


/** 18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”. */

    // var day = prompt("Which day is today?");
    // day = day.toLowerCase();
    // if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
    //     document.writeln("It's a week day");
    // }
    // else if (day == "saturday") {
    //     document.writeln("It's weeekend");
    // }
    // else if (day == "sunday") {
    //     document.writeln("Yay! It's a holiday");
    // }
    // else {
    //     alert("Plase make sure you have entered a right name of the day");
    // }


/** 19. Write a program that takes input user’s score, if it’s greater
than 50, say “You are passed”. Otherwise, show “Try again!” */

    // var score = prompt("Enter your score.");
    // if (score > 50) {
    //     document.writeln("You have passed");
    // }
    // else {
    //     document.writeln("Sorry! Try again");
    // }



/** 20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10."). */

    // var fNumber = +prompt("Enter first number");
    // var sNumber = +prompt("Enter second number");
    // if (fNumber < sNumber) {
    //     document.writeln(sNumber + " is greater than " + fNumber);
    // }
    // else if (fNumber > sNumber) {
    //     document.writeln(fNumber + " is greater than " + sNumber);
    // }
    // else {
    //     document.writeln(fNumber + " and " + sNumber + " are equals.");
    // }


/** 21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages) */

    //-----incomplete



/** 22. Write a program to take input a number & tell whether it’s a
positive or negative number. */

    // var num = +prompt("Enter a number to check if it is positive or negative");
    // if (num < 0) {
    //     document.writeln(num + " is a negative number");
    // }
    // else {
    //     document.writeln(num + " is a positive number");
    // }


/** 23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog". */

    // var number = prompt("Plaese enter a number");
    // var noun = prompt("Please enter a noun");
    // if (number > 1) {
    //     document.writeln(number + " " + noun + "s");
    // }
    // else if (number == 1){
    //     document.writeln(number + " " + noun);
    // }