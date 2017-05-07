/** 1. Write a program that takes two user inputs for first and last
name using prompt and merge them in a new variable titled
fullName. Greet the user using his full name. */

    // var fName = prompt("Enter your first Name");
    // var lName = prompt("Enter your last Name");
    // var fullName = fName + " " + lName;
    // document.write("Hello! " + fullName)



/** 2. Write a program to take a user input about his favorite mobile
phone model. Find and display the length of user input in your
browser. */

    // var aboutPhone = prompt("Write somthing about your favorite phone");
    // document.write("About Phone: " + aboutPhone + "<br>");
    // document.write("Length of String: " + aboutPhone.length);



/** 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser. */

    // var pak = "Pakistani";
    // document.write("String: " + pak + "<br>");
    // document.write("index of 'n': " + pak.indexOf('n'));



/** 4. Write a program to find the last index of letter “l” in the word
“Hello World” and display the result in your browser. */

    // var greet = "Hello World";
    // document.write("String: " + greet + "<br>");
    // document.write("Last index of 'l': " + greet.lastIndexOf('l'));



/** 5. Write a program to find the character at 3rd index in the word
“Pakistani” and display the result in your browser. */

    // var pak = "Pakistani";
    // document.write("String: " + pak + "<br>");
    // document.write("Character at index '3rd': " + pak.charAt(3));



/** 6. Repeat Q1 using string concat() method. */

    // var fName = prompt("Enter your first Name");
    // var lName = prompt("Enter your last Name");
    // var fullName = fName.concat(" " + lName);
    // document.write("Hello! " + fullName)



/** 7. Write a program to replace the “Hyder” to “Islam” in the word
“Hyderabad” and display the result in your browser. */

    // var city = "Hyderabad";
    // document.write("String: " + city + "<br>");
    // document.write("Changed: " + city.replace("Hyder", "Islam"));



/** 8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser. */

    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // document.write("Message: " + message + "<br>");
    // document.write("Replace (and): " + message.replace(/and/g, "&"));



/** 9. Write a program that converts a string “472” to a number 472.
Display the values & types in your browser. */

    // var value = "472";
    // document.write("Value: " + value + "<br>");
    // document.write("Type: " + typeof(value) + "<br>");
    // value = parseInt(value);
    // document.write("Value: " + value + "<br>");
    // document.write("Type: " + typeof(value) + "<br>");



/** 10. Write a program that take a URL as user input in the
following format: (www.facebook.com / www.yahoo.com ).
Extract the domain name & show in your browser. */

    // var urlInput = prompt("Enter a URL (eg. www.xyz.com)");
    // document.write("URL: " + urlInput + "<br>");
    // document.write("Doamain: " + urlInput.slice(4));



/** 11. Write a program that takes user input. Convert and show the
input in capital letters. */

    // var str = prompt("Etner a string");
    // document.write("String: " + str + "<br>");
    // document.write("Uppercase: " + str.toUpperCase());



/** 12. Write a program that takes user input. Convert and show the
input in small letters. */
    
    // var str = prompt("Etner a string");
    // document.write("String: " + str + "<br>");
    // document.write("Lowercase: " + str.toLowerCase());



/** 13. Write a program that takes user input. Convert and show the
input in title case. */
    
    // var str = prompt("Etner a string");
    // document.write("String: " + str + "<br>");
    // document.write("Tilecase: " + str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());



/** 14. Write a program that converts the variable num to string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */

    // var num = 35.36;
    // num = num.toString();
    // document.write("Number: " + num + "<br>");
    // for (var i = 0; i < num.length; i++) {
    //     if (num.charAt(i) === ".") {
    //         document.write("Result: " + num.replace(num.charAt(i), ''));
    //         break;
    //     }
    // }



/** 15. Write a program to display the value of x in your browser if a=”3”
and b=”3”? */

    // var a = '3', b = '3';
    // x = a + b;
    // document.write("a is " + a + "<br>");
    // document.write("b is " + b + "<br>");
    // document.write("a + b is " + x);

    // /** 16 */
    // x = a - b;
    // document.write("<br>a - b is " + x);



/** 17. Write a program to take user input and store username in a
variable. If the username contains any special symbol among
[@ . , !], prompt the user to enter a valid username.  */

    // var userName = prompt("Enter your name");
    // for (var i = 0; i<userName.length; i++) {
    //     if (userName.charAt(i) == '@' || userName.charAt(i) == '.' || userName.charAt(i) == ',' || userName.charAt(i) == '!') {
    //         alert("Please Enter a valid Name:")
    //     }
    //


/** 18. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array.
After searching, prompt the user whether the given item is
found in the list or not.
Note: Perform case insensitive search. Whether the user enters
cookie, Cookie, COOKIE or coOkIE, program should inform
about its availability. */

    // var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var required = prompt("What do you want Sir/Ma'am?");
    // var found = false;
    // for (var i = 0; i<items.length; i++) {
    //     if (required.toLowerCase() == items[i]) {
    //         found = true;
    //         document.write(required + " is <b>availabe</b> at index " + i + " in our bakery");
    //         break;
    //     }
    // }
    // if (!found) {
    //     document.write("We are sorry, " + required + " is <b>not available</b> in our bakery.")
    // }




/** 19. Write a program to take two input strings. Using string
comparison, tell which string is greater than other or if they
both are equal. */

    // var str1 = prompt("String comparision: Enter 1st string");
    // var str2 = prompt("String comparision: Enter 2nd string");
    // if (str1 != str2) {
    //     if (str1 > str2) {
    //         document.write(str1 + " is greater than " + str2);
    //     }
    //     else {
    //         document.write(str2 + " is greater than " + str1);
    //     }
    // }
    // else {
    //         document.write(str1 + " and " + str2 + " are equal");
    // }



/** 20. Write a program to take password as an input from user. The
password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password */

    // var pass = prompt("Enter your password");
    // var firstChar = false, count = 0, alpha = false, numeric = false;
    // if (pass.charCodeAt(0) < 48 || pass.charCodeAt(0) > 57) {
    //     firstChar = true;
    //     for (var i = 0; i < pass.length; i++) {
    //         if ((pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91) || (pass.charCodeAt(i) > 96 && pass.charCodeAt(i) < 123)) {
    //             alpha = true;
    //             count++;
    //             continue;
    //         }
    //         if (pass.charCodeAt(i) > 47 && pass.charCodeAt(i) < 58) {
    //             numeric = true;
    //             count++;
    //         }
    //     }

    //     if (count >= 6 && alpha && numeric) {
    //         alert("You have successfully created your new password");
    //     }
    //     else {
    //         alert("Password must be at least 6 Character and must contain both alphabates and numbers")  
    //     }
    // }
    // else {
    //     alert("Password must be start with an alphabate");
    // }
    


/** 21. Write a program to convert the following string to an array
using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser. */

    // var university = "University of Karachi";
    // var uniArray = university.split("");
    // document.write("String: " + university + "<br><br>");
    // for (var i = 0; i<uniArray.length; i++) {
    //     document.write(uniArray[i] + "<br>");
    // }



/** 22. Write a program to display the last character of a user input. */

    // var str = prompt("Enter a string");
    // document.write("Last character of string: " + str.charAt(str.length-1));



/** 23. You have a string “The quick brown fox jumps over the lazy
dog”. Write a program to count number of occurrences of word
“the” in given string. */


    // var string = "The quick brown fox jumps over the lazy dog";
    // var count = 0, loop = 0;
    // for (var i = 0; i<string.length; i++) {
    //     if (string.slice(i, i+3).toLowerCase() === "the") {
    //         count++;
    //         i = i+2; 
    //     }
    //     loop++;
    // }
    // document.write("Text: " + string + "<br>");
    // document.write("Occurrence of word 'the' : " + count + "<br>");
    // document.write("Loop count : " + loop);
    



/** 24. Write a program to count number of vowels & consonants in
given string
var str = “Pakistan”; */

    // var alpha = prompt("Enter a string to find vowels and consonants");
    // var vowels = 0, consonants = 0;
    // for (i = 0; i<alpha.length; i++) {
    //     if ((alpha.charAt(i)).toLowerCase() == 'a' || (alpha.charAt(i)).toLowerCase() == 'e' || (alpha.charAt(i)).toLowerCase() == 'i' || (alpha.charAt(i)).toLowerCase() == 'o' || (alpha.charAt(i)).toLowerCase() == 'u') {
    //         vowels++
    //     }
    //     else {
    //         consonants++;
    //     }
    // }
    // alert("Given string has " + vowels + " vowel(s) and " + consonants + " consonant(s)");