/*******************************************_______WEEK 3 CODING ASSIGNMENT - RYAN FOLEY________*****************************************/

//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
    console.log("original array", ages);

//a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.

let firstEle = ages.shift();
console.log("first element", firstEle);

let lastEle = ages.pop();
console.log("last element", lastEle);

let subtraction = lastEle - firstEle;
console.log(subtraction)

//b.Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push('35');
console.log("ages after push", ages);

//c. Use a loop to iterate through the array and calculate the average age. 

console.log(ages)
let total = 0;

for(let i = 0; i < ages.length; i++) {
    total = total + ages[i];
    console.log('Average age of ages array = ' + (total / ages.length));
}
//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’

let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(namesArray);

//a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let lett = 0;

for(let i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i].length);
    lett = lett + namesArray[i].length
}
console.log('Average number of letters in each name for names array = ' + (lett / namesArray.length));

//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

for(let i = 0; i < namesArray.length; i++) {
    console.log('Concatenated Names:' + namesArray.join(''));
}

//3. How do you access the last element of any array?

// You can use the array length property. First, you would define your array Using a let command. Next, you'd define your last element using let.
// Then you would type in array.length and include -1 to identify the correct element of the array to print the last element to the console. 

let numbers = [2, 4, 6, 8, 10, 12, 14];
let lastElement  = numbers[numbers.length -1];

console.log('Accessing last element of array', (lastElement));

//4. How do you access the first element of any array?

//Utilizing two methods to access the first element of the array. I first used 'slice' to make a copy of the array. 
//Next, I used shift to remove the element from the array. 

let dogs = ['English Springer', 'Lab', 'Terrier', 'Pit Bull', 'Dalmatian'];

let firstDog = dogs.slice(0, 1).shift();
console.log('first element of array', firstDog);

5. //Create a new array called nameLengths. Write a loop to iterate over the previously created names array. and add the 
//length of each name to the nameLengths array.

namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let nameLengths = [3, 5 , 3, 5, 4, 3]

for(let i =0; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let sum = 0;
for(let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}
console.log(sum);

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

let word = 'Hello World';
let n = '3'

console.log(`'repeat function': ${word.repeat(3)}`);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.

function createName(firstName, lastName) {
    return firstName + '' + lastName;
}

let fullName = createName('George', 'Washington');
console.log('Create Name Example' + fullName);

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let array1 = [1, 2, 8, 12, 80];
let sumOfArray = 0;

function greaterThan100 () {
  } if(sumOfArray > 100) {
        console.log(true);
}   
    else {
    console.log(false);
}

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

let array2 = [3, 5, 7, 9, 12, 15]
let sumOfArray2 = 0;
let i = 0;

for(i = 0; i < array2.length; i++) {
sumOfArray2+= array2[i];
}
console.log(sumOfArray2);
console.log(sumOfArray2 / array2.length);
   
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

let firstArray = [6, 9, 12, 18, 24];        //first array
let secondArray =[3, 7, 13, 17, 21];        //second array
let totalOfFirstArray = 0;                  //total of first array
let totalofSecondArray = 0;                 //total of second array
let averageOfFirstArray = 0;                //averageOfFirstArray variable
let averageOfSecondArray = 0;              //averageOfSecondArray variable

for(let i = 0; i < firstArray.length; i++) {
    totalOfFirstArray+= firstArray[i];         //sum of first array
}
console.log(totalOfFirstArray);
console.log(totalOfFirstArray / firstArray.length);    //average of first array

for(let i = 0; i < secondArray.length; i++) {
    totalofSecondArray+= secondArray[i];         //sum of second array
}
console.log(totalofSecondArray);
console.log(totalofSecondArray / secondArray.length);  //average of second array

function greaterAverage () {
    if(averageOfFirstArray > averageOfSecondArray) {
        console.log(true);
    } else 
        console.log(false);                        //result of function
}
greaterAverage();

//This one I had a hard time determining the final steps, but I was able to finally figure out how to write a function 
//that would produce the results.


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let moneyInPocket = 10.50;
let isHotOutside = true;

if(isHotOutside && moneyInPocket >= 10.50) {
    console.log(true);
} else {
    console.log(false);
}

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//I've created a function called 'scrambledNumbers'. This function will take an array of numbers
//and put them in order from smallest to largest. This could be very useful when working with sets of numbers in a database to ensure that they
//appear in numerical order to determine median value when given a particular set of data to analyze. In this example, these elements in the array
//could be ages of participants in a survey and you wanted a function that could help you order them in numerical value to find a median age. 

let numbersArray = [21, 58, 63, 2, 7, 13, 99];

function scrambledNumbers () {
numbersArray.sort(function(a, b){return a - b});
console.log(numbersArray);
}
scrambledNumbers();
