/** 
 * Muhammad Ismail
 * ID: 4513
 * Batch: 4.1
 * Section: Bright
 */

/** 1. Write a program to display the message “Hello World” 5 times
in your browser using for loop. */

    // for (var i = 0; i < 5; i++) {
    //     document.writeln("Hello World! <br>");
    // }


/** 2. Write a program to print numeric counting from 1 to 10. */

    // for (var i = 1; i <= 10; i++) {
    //     document.writeln(i + "<br>");
    // }



/** 3. Write a program to print multiplication table of any number
using for loop. Table number & length should be taken as an
input from user. */

    // var table = +prompt("Enter a number to print table");
    // var length = +prompt("Enter the length of multiplication table");
    // for (var i = 1; i <= length; i++) {
    //     document.writeln(table + " x " + i + " = " + (table * i) + "<br>");
    // }



/** 4. You have an array
A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
Write each element on new line with the help of for loop. */

    // var brand = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
    // for (var i = 0; i < brand.length; i++) {
    //     document.writeln(brand[i] + "<br>");
    // }



/** 5. Write a program to print items of the following array using for
loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] */

    // var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    // for (var i = 0; i < fruits.length; i++) {
    //     document.writeln(fruits[i] + "<br>");
    // }
    // document.write("<br>")
    // for (var i = 0; i < fruits.length; i++) {
    //     document.writeln("Element at index " + i + " is " +  fruits[i] + "<br>");
    // }


/** 6. Write a program to initialize an array of N items by using
prompt. Where N is number of items as entered by the user. */

    // var length = +prompt("Enter the length of array you wanna make (in Number)");
    // var arr = [];
    // for (var i = 0; i < length; i++) {
    //     arr.push(prompt("Enter value of index " + i));
    // }
    // document.writeln("<b>Number of Items: " + length + " Item(s) </b><br><br>");
    // for (var j = 0; j < arr.length; j++) {
    //     document.writeln(arr[j] + "<br>")
    // }



/** 7. Generate the following series in your browser. See example
output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */

    // /** a */
    // for (var count = 1; count <= 15; count++) {
    //     document.writeln(count);
    // }
    // document.write("<br>");
    // /** b */
    // for (var rCount = 10; rCount >= 1; rCount--) {
    //     document.writeln(rCount);
    // }
    // document.write("<br>");
    // /** c */
    // for (var even = 0; even <= 20; even++) {
    //     if (even % 2 === 0) {
    //         document.writeln(even);
    //     }
    // }
    // document.write("<br>");
    // /** d */
    // for (var odd = 0; odd <= 20; odd++) {
    //     if (odd % 2 !== 0) {        // condition could be (odd % 2 !== 0) or (odd % 2 === 1)
    //         document.writeln(odd);
    //     }
    // }
    // document.write("<br>");
    // /** e */
    // for (var series = 1; series <= 20; series++) {
    //     if (series % 2 === 0) {
    //         document.writeln(series+"k, ");
    //     }
    // }


/** 8. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array.
After searching, prompt the user whether the given item is
found in the list or not. */

    // var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var required = prompt("Welcom to the Bakery! What do you want to order Sir/Ma'am?");
    // var availble = false;
    // for (var check = 0; check<items.length; check++) {
    //     if (items[check] === required.toLowerCase()) {
    //         alert("cookie is availble at index " + check + " in our Bakery");
    //         availble = true;
    //         break;
    //     }
    // }
    // if (!availble) {
    //     alert("We are sorry. " + required + " is not available in our bakery")
    // }



/** 9. Write a program to identify the largest number in the given
array.
A = [24, 53, 78, 91, 12] */

    // var number = [24, 53, 78, 91, 12];
    // var largest = 0;
    // for (var i = 0; i<number.length; i++) {
    //     if (number[i] > largest) {
    //         largest = number[i];
    //     }
    // }
    // document.writeln("Array Items: " + number + "<br>");
    // document.writeln("The largest number is " + largest);



/** 10. Write a program to identify the smallest number in the given
array.
A = [24, 53, 78, 91, 12] */

    // var number = [24, 53, 78, 91, 12];
    // var smallest = 999;
    // for (var i = 0; i<number.length; i++) {
    //     if (number[i] < smallest) {
    //         smallest = number[i];
    //     }
    // }
    // document.writeln("Array Items: " + number + "<br>");
    // document.writeln("The smallest number is " + smallest);



/** 11. Write a program to identify the largest & the smallest
number in the given array.
A = [24, 53, 78, 91, 12] */

    // var number = [24, 53, 78, 91, 12, 55, 88, 97, 99, 144, 4, 77];
    // var smallest = Infinity;
    // var largest = -Infinity;
    // for (var i = 0; i<number.length; i++) {
    //     if (number[i] < smallest) {
    //         smallest = number[i];
    //     }
    //     if (number[i] > largest) {
    //         largest = number[i];
    //     }
    // }
    // document.writeln("Array Items: " + number + "<br>");
    // document.writeln("The smallest number is " + smallest + "<br>");
    // document.writeln("The largest number is " + largest);


/** 12. Write a program to print multiples of 5 ranging 1 to 100 */
    
    // for (var multiple = 1; multiple <= 100; multiple++) {
    //     if (multiple % 5 == 0) {
    //         document.writeln(multiple + ", ");
    //     }
    // }



/** 13. You have given the following arrays:
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90]; */

    // var students = ["Ali", "Sami", "Taha", "Inam"];
    // var scores = [58, 73, 89, 90];
    // document.write("<table border=1px>");
    // document.write("<tr><th>Students</th><th>Scores</th></tr>")
    // for (var i = 0; i<students.length; i++) {
    //     document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>")
    // }
    // document.write("</table>");



/** 14. Write a program that prints number from start of the array
to desired stop value. Given array:
var scores = [12, 45, 3, 22, 34, 50];
(Hint: take stop value from user)
E.g. if user gives 3 as input value print 12, 45, 3
if user gives 34 as input value print 12, 45, 3, 22, 34 */

    // var scores = [12, 45, 3, 22, 34, 50];
    // document.writeln("Score: " + scores + "<br>");
    // var range = +prompt("Enter a value to print array till that value");

    // for (var i = 0; i <= scores.indexOf(range); i++) {
    //     document.writeln(scores[i] + "<br>");
    // }



/** 15. You have an array
A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
Write each element on new line with the help of nested for
loops. */

    // var multiArray = [ [1,2,3] , [4,5,6] , [7,8,9] ];
    // for (var i = 0; i<multiArray.length; i++) {
    //     for (var j = 0; j < multiArray[i].length; j++) {
    //         document.writeln(multiArray[i][j]);
    //     }
    //     document.writeln("<br>");
    // }



/** 16. Write a program to repeatedly print the value of the variable
num which is input by user. Value should be decreasing by 0.5
each time, as long as x Value remains positive. */

    // var num = +prompt("Enter a number");
    // for (var i = num; i >= 0; i = i - 0.5) {
    //     document.writeln(i + ", ")
    // }



/** 17. The even/odd reporter
Write a for loop that will iterate from 0 to 20. For each
iteration, it will check if the current number is even or odd, and
report that to the screen (e.g. "2 is even"). */

    // for (var i = 0; i<= 20; i++) {
    //     if (i % 2 == 0) {
    //         document.write(i + " is even <br>");
    //     }
    //     else {
    //         document.write(i + " is odd <br>");
    //     }
    // }



/** 18. Write a program to calculate the product of the odd integers
from 1 to 7. */

    // var product = 1;
    // for (var i = 1; i<=7; i += 2) {
    //     product *= i;
    // }
    // document.write(product);



/** 20. Write a program to create the following patterns in your
browser. */

    // for (var i = 7; i>0; i--) {
    //     for (var j = 0; j<i; j++) {
    //         document.writeln("*");
    //     }
    //         document.writeln("<br>");
    // }

    // document.writeln("<br>");
    // for (var i = 0; i<7; i++) {
    //     for (var j = 0; j<i; j++) {
    //         document.writeln("*");
    //     }
    //         document.writeln("<br>");
    // }
    
    // document.writeln("<br>");
    // for (var i = 0; i<5; i++) {
    //     for (var j = 0; j<5; j++) {
    //         document.writeln("*");
    //     }
    //         document.writeln("<br>");
    // }