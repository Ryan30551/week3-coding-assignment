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

let firstArray = [6, 9, 12, 18, 24];
let secondArray =[3, 7, 13, 17, 21];   
let totalOfFirstArray = 0;
let totalofSecondArray = 0;

for(let i = 0; i < firstArray.length; i++) {
    totalOfFirstArray+= firstArray[i];
}
console.log(totalOfFirstArray);
console.log(totalOfFirstArray / firstArray.length);

for(let i = 0; i < secondArray.length; i++) {
    totalofSecondArray+= secondArray[i];
}
console.log(totalofSecondArray);
console.log(totalofSecondArray / secondArray.length);

//This one I had a hard time determining the final steps. 
//I could find the sums of the array and the averages, but I wasn't sure how to produce the Boolean results to compare the averages of the array.

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

let moneyInPocket = 10.50;
let isHotOutside = true;

if(isHotOutside && moneyInPocket >= 10.50) {
    console.log(true);
} else {
    console.log(false);
}

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function createAddress(houseNumber, streetName) {
    console.log(houseNumber + '' + streetName);
}
createAddress(123 , 'Main Street');

//This function would be useful for combining data together in seperate arrays to create customer addresses within a database. 