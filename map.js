// there will be basic and intermediate level Array method questions of Map().

// 1. Basic

// ======================================================================================================================================================================

// Q1.Write a function to create a new array that contains the double of each element in the original array using map().

function doubleEachEl(){
    let arr = [1,2,3,4,5];
    let double = arr.map(element => element + element)
    return double
}
console.log(doubleEachEl());


// Q2. Write a function to create a new array that contains the square of each element in the original array using map().

function squareEveryEl(){
    let arr = [1, 2, 3, 4, 5];
    let square = arr.map(value => value*value);
    return square
}
console.log(squareEveryEl());

// Q3. Write a function to create a new array that contains the length of each string in the original array using map().

function everyElementLength(){
    let arr = ["one", "two", "there", "four", "five"];
    let elementLength = arr.map(value => value.length);
    return elementLength
}
console.log(everyElementLength());

// Q4. Write a function to create a new array that contains the uppercase version of each string in the original array using map().

function everyElementToUpperCase(){
    let arr = ["java", "kotlin", "javascript", "c++"];
    let elementUpperCase = arr.map(value => value.toUpperCase())
    return elementUpperCase
}
console.log(everyElementToUpperCase());

// Q5. Write a function to create a new array that contains the first letter of each string in the original array using map().

function firstLetterOfEachString(){
    let arr = ["face", "everything", "and", "rise"];
    let firstLetter = arr.map(value => value.charAt(0));
    return firstLetter
}
console.log(firstLetterOfEachString());

// Q6. Write a function to create a new array that contains the type of each element in the original array using map().

function checkTheTypeOfEveryEl(){
    let arr = ["javascript", 17, null, undefined];
    let checkType = arr.map(value => typeof value);
    return checkType
}
console.log(checkTheTypeOfEveryEl());

// Q7. Write a function to create a new array that contains the index of each element in the original array using map().

function returnIndexOfEveryEl(){
    let arr = [5,4,6,8,7,2,1,3,9]; // just a random number;
    let returnIndex = arr.map((element,index)=>{
        return index
    });
    return returnIndex
}
console.log(returnIndexOfEveryEl());

// Q8. Write a function to create a new array that contains the sum of each pair of elements from two arrays using map().

function sumOfEachPair(){
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [5, 4, 3, 2, 1];
    let sumOfPair = arr1.map((value,index)=>{
        return value + arr2[index];
    })
    return sumOfPair
}
console.log(sumOfEachPair());

// Q9. Write a function to create a new array that contains the difference between each pair of elements from two arrays using map().

function differenceBetweenEachPairs(){
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    let difference = arr2.map((element,index)=>{
        return element - arr1[index]
    })
    return difference
}
console.log(differenceBetweenEachPairs());

// Q10. Write a function to create a new array that contains the product of each pair of elements from two arrays using map().

function productOfEachPairs(){
    let arr1 = [1, 2, 3, 4, 5]
    let arr2  = [1, 2, 3, 4, 5];
    let product = arr1.map((element,index)=>{
        return element * arr2[index]
    })
    return product
}
console.log(productOfEachPairs());



//  ================================================= BASIC ENDS HERE AND INTERMEDIATE STARTS HERE ==========================================================



