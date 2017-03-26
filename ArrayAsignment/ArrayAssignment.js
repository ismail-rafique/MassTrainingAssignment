/* 1.Declare an empty array using JS literal notation to store
student names in future. */
	
	//var student = [];

/*2. Declare an empty array using JS object notation to store
student names in future. */
	
	//var students = new Array();

/*3. Declare and initialize a strings array. */

	// var strArray = ["string1", "string2", "string3"];

/*4. Declare and initialize a numbers array.*/

	// var numArray = [1, 2, 3, 4, 5];

/*5. Declare and initialize a boolean array.*/

	// var boolArray = [true, false];

/*6. Declare and initialize a mixed array.*/

	// var mixArray = [true, 1, "string", undefined, null, [], {}];

/*7. Declare and Initialize an array and store available mobile networks in Pakistan. */
	
	// var networks = ["Jazz", "Warid", "Zong", "Telenor", "Ufone"];

/*8. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: */
	
	// var qualification = ["SSC", "HSC", "BCS", "BS", "B.Com", "MS", "M.Phil", "PhD"];
	// document.writeln("<h1>Available Education in Pakistan</h1>");
	// document.writeln(qualification[0] + "<br>");
	// document.writeln(qualification[1] + "<br>");
	// document.writeln(qualification[2] + "<br>");
	// document.writeln(qualification[3] + "<br>");
	// document.writeln(qualification[4] + "<br>");
	// document.writeln(qualification[5] + "<br>");
	// document.writeln(qualification[6] + "<br>");
	// document.writeln(qualification[7]);


/*9. Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array. Display the elements & length of array in your browser. (Use array’s length method)*/

	// var movies = [];
	// movies.push("X-Man");
	// movies.push("Super Man vs Bat Man");
	// movies.push("Dead Pool");
	// movies.push("Minions");
	// movies.push("Captian of America");
	// document.writeln("<h1>Super-Hit Movies</h1>");
	// document.writeln(movies[0] + "<br>");
	// document.writeln(movies[1] + "<br>");
	// document.writeln(movies[2] + "<br>");
	// document.writeln(movies[3] + "<br>");
	// document.writeln(movies[4] + "<br>");
	// document.writeln("Total Movies: " + movies.length);


/*10. Declare and Initialize an array with your favorite cars. Show
a. First index of the array
b. Car at first index of the array
c. Last index of the array
d. Car at last index of the array */
	
	// var cars = ["Honda Civic", "Corrola XLI", "Cultex", "Vits"];
	// document.writeln("Start index of the array: 0 <br>");
	// document.writeln("Car at first index: " + cars[0] + "<br>");
	// document.writeln("Last index of the array: " + (cars.length -1) + "<br>");
	// document.writeln("Car at last index: " + cars[cars.length-1]);


/*11. Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student display the scores & percentages of students like:*/
	
	// var student = [];
	// var score = [];
	// var total = 500;
	// for (var i = 0; i<3; i++) {
	// 	student[i] = prompt("Enter the Name of student-" + (i+1));
	// 	score[i] = +prompt("Please enter " + student[i] + "'s Score (Max: 500)");
	// }
	// document.writeln("<h1>Score & Percentage of Students </h1><br>");
	// for (var j = 0; j<student.length; j++) {
	// 	document.writeln("<b>" + student[j].toUpperCase() + "</b><br>");
	// 	document.writeln("Score: " + score[j] + "<br>");
	// 	document.writeln("Percentage: " + ((score[j]/total)*100).toFixed(2) + "% <br><br>");
	// }


/*12. Initialize an array with color names. Display the array
elements in your browser.
    a. Ask the user what color he/she wants to add to the)
    beginning & add that color to the beginning of the array.
    Display the updated array in your browser.
    b. Ask the user what color he/she wants to add to the end &
    add that color to the end of the array. Display the updated
    array in your browser.
    c. Add two more color to the beginning of the array. Display
    the updated array in your browser.
    d. Delete the first color in the array. Display the updated
    array in your browser.
    e. Delete the last color in the array. Display the updated
    array in your browser.
    f. Ask the user at which index he/she wants to add a color &
    color name. Then add the color to desired position/index.
    . Display the updated array in your browser.
    g. Ask the user at which index he/she wants to delete
    color(s) & how many colors he/she wants to delete. Then
    remove the same number of color(s) from user-defined
    position/index. . Display the updated array in your
    browser.
*/
	// var color = ["Red", "Green", "Blue", "Yellow"];
	// document.writeln("Available Color: " + color + "<br><br>");
	
	// var colorAddAtStart = prompt("Which color do you want to add at the beginning?");
	// color.unshift(colorAddAtStart);
	// document.writeln("Updated Color (added at start): " + color + "<br><br>");
	
	// var colorAddAtEnd = prompt("Which color do you want to add at the end?");
	// color.push(colorAddAtEnd);
	// document.writeln("Updated Color (added at end): " + color + "<br><br>");

	// color.unshift("Magenta", "Pink");
	// document.writeln("Updated Color (added 2 more color at start): " + color + "<br><br>");
	
	// color.shift();
	// document.writeln("Updated Color (deleted first color): " + color + "<br><br>");
	
	// color.pop();
	// document.writeln("Updated Color (deleted last color): " + color + "<br><br>");

	// var desiredIndex = prompt("At which index do you want to add a new color?");
	// var desiredColor = prompt("Wihch color do you want to add at index " + desiredIndex);
	// color.splice(desiredIndex, 0, desiredColor);
	// document.writeln("Updated Color (added desired color): " + color + "<br><br>");
	
	// var delIndex = prompt("At which index do you want to delete color?");
	// var delItem = prompt("How many color do you want to delete from index " + delIndex);
	// color.splice(delIndex, delItem);
	// document.writeln("Updated Color (deleted desired color): " + color + "<br><br>");


/** 13. Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method. */
	
	// var studentScore = [234, 553, 534, 324, 534, 454, 544, 432, 343, 645]
	// document.writeln("Students Score: " + studentScore + "<br><br>");
	// document.writeln("Students Score (Sorted): " + studentScore.sort());
	
/** 14. Write a program to sort the below mentioned array:
var fruits = [“strawberry”, “apple”, “orange”, “banana”]; */

	// var fruits = ["strawberry", "apple", "orange", "banana"];
	// document.writeln("fruits: " + fruits + "<br><br>");
	// document.writeln("fruits (Sorted): " + fruits.sort());
	

/** 15. Write a program to initialize an array with city names. Copy
3 array elements from cities array to selectedCities array. */

	// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
	// document.writeln("<b>City List: </b>" + city + "<br><br>");
	// var selectedCity = city.slice(1, 4);
	// document.writeln("<b>Seleted City: </b>" + selectedCity);


/** 16. Write a program to create a single string from the below
mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */

	// var arr = ["This", "is", "my", "cat"];
	// document.writeln("Array: " + arr + "<br>");
	// var stringFromArray = arr.join(" ");
	// document.writeln("String: " + stringFromArray);




/** 17. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were
stored. (FIFO-First In First Out) */

	// var device = [];
	// device.push("Keyboard");
	// device.push("Mouse");
	// device.push("LCD");
	// device.push("LED");
	// device.push("Monitor");
	// document.writeln(device.shift() + "<br>");
	// document.writeln(device.shift() + "<br>");
	// document.writeln(device.shift() + "<br>");
	// document.writeln(device.shift() + "<br>");
	// document.writeln(device.shift() + "<br>");



/** 18. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-First
Out) */

	// var device = [];
	// device.push("Keyboard");
	// device.push("Mouse");
	// device.push("LCD");
	// device.push("LED");
	// device.push("Monitor");
	// document.writeln(device.pop() + "<br>");
	// document.writeln(device.pop() + "<br>");
	// document.writeln(device.pop() + "<br>");
	// document.writeln(device.pop() + "<br>");
	// document.writeln(device.pop() + "<br>");
	

/** 19. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
the following dropdown/select menu in your browser using
document.write() method: */

	// var manufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
	// var dropdown = "<select> <option>" + manufacturer[0] + "</option> <option>" + manufacturer[1] + "</option> <option>" + manufacturer[2] + "</option> <option>" + manufacturer[3] + "</option> <option>" + manufacturer[4] + "</option> <option>" + manufacturer[5] + "</option> </select>";
	// document.write(dropdown);


/** 20. Declare and initialize an empty multidimensional array.
(Array of arrays) */

	// var multidimArray = [];
	// multidimArray[0] = [];
	// multidimArray[1] = [];
	// multidimArray[2] = [];


/** 21. Declare and initialize a multidimensional array representing
the number matrix: */

	// var matrix = [];
	// matrix[0] = [1, 2, 3, 4];
	// matrix[1] = [2, 3, 4, 5];
	// matrix[2] = [3, 4, 5, 6];
	// document.writeln(matrix[0] + "<br>");
	// document.writeln(matrix[1] + "<br>");
	// document.writeln(matrix[2] + "<br>");
