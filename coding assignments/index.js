/*1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•	Do not use numbers to reference the last element, find it programmatically, 
•	ages[7] – ages[0] is not allowed!

1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
1c.	Use a loop to iterate through the array and calculate the average age. */
var ages = [3 , 9 , 23 , 64 , 2 , 8 , 28];
console.log((ages[ages.length -1]) - ages[0]);
ages.push(50);
console.log(( ages[ages.length - 1]) - ages[0]);

var sum = 0;

for(i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}
var average = sum/ ages.length;
console.log("The average of the numbers in the array is " + average);

/*2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. */
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

var total = 0;
for(var i = 0; i < names.length; i++){
    total+=names[i].length;
}
var average = total/names.length;
console.log("The average name length is " + average);

var namesList = " ";
for (i = 0; i < names.length; i++) {
    if (i >0) {
        namesList += " ";
    }
    namesList += names[i]
}
console.log("The list of names is " + namesList);

/*3.	How do you access the last element of any array?*/
console.log("By using the array.length - 1"); 

/*4.	How do you access the first element of any array?*/
console.log("0 always indicates the first element of an array. so array[0] will always access whatever the first element is.");

/*5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array*/

var namesLength = [];
for (i = 0; i < names.length; i++) {
    namesLength[i] = names[i].length;
}
console.log("The array of the length of the names is " + namesLength);

/*6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */
var sum = 0
for( i= 0; i < namesLength.length; i++) {
sum += namesLength[i];
}
console.log("The sum of the length of names in the array is " + sum);

/*7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

function concatNTimes(word, n){
    var phrase = word
    for(i = 1; i < n; i++) {
        phrase = phrase.concat(word);
    }
    return phrase;
}
console.log(concatNTimes("Hello", 3));

/*8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.
•	The full name should be the first and the last name separated by a space.*/

function createFullName(firstName, lastName) {
    return firstName.concat(" ", lastName);
}
console.log("My full name is " + createFullName("Mary", "Schiff"));

/*9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/

array = [20, 30, 10, 15, 50];
function sumOfNumbers(numberArray) {
    var sum = 0;
    for (i = 0; i < numberArray.length; i++) {
        let total = numberArray[i];
        sum += total;
    } if (sum > 100);{
            return true;
    }
    
}
console.log("The sum of 20, 30, 10, 15, and 50 is greater than 100 " + sumOfNumbers(array));


/*10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

var arrayTwo = [1,2,3,4,5];
function takeAverage(numArray) {
    sum = 0;
    for(i = 0; i < numArray.length; i++) {
       var total = numArray[i];
       sum += total;
    }
    return(sum / numArray.length);
}
console.log(" The average of 1, 2, 3, 4, and 5 is " + takeAverage(arrayTwo));


/*11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/

function compareAvgs(array1, array2) {
    if (takeAverage(array1) > takeAverage(array2)) {
        return true;
    }
    else {
        return false;
    }
}
console.log("The average of the array in number 10 is greater than the avergae in number 11 is " + compareAvgs(array, arrayTwo));

/*12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

var isHotOutside = false;
var moneyInPocket = 27.00;
function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    }
    else {
        return false;
    }
}
console.log("I will buy the drink: " + willBuyDrink(isHotOutside,moneyInPocket));

/*13.	Create a function of your own that solves a problem. 
•	In comments, write what the function does and why you created it.*/
//A function determine whether or not I should winterize my garden on saturday based on whether the temperature hits freezing or below//

var saturdayTemperature = 29
function winterizeGarden(temperature) {
    if (saturdayTemperature <= 32) {
        return true;
    }
    else {
        return false;
    }
}
console.log("I will winterize my garden: " + winterizeGarden(saturdayTemperature));