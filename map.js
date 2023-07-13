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

// Q1. Calculate the length of each word in a sentence using map().

function findLengthOfEachEl(){
    let str = "this is javaScript code";
      return str.split(" ").map(value => value.length)
}
console.log(findLengthOfEachEl());

// Q2. Reverse each string in a list using map().

function reverseArray(){
    let arr = ["this","is","javaScript","code"];
    return arr.map((element,index,arr)=>{
        let reverseIndex = arr.length - 1 - index;
        console.log(reverseIndex);
        return arr[reverseIndex]
    })
}
console.log(reverseArray());

// Q3. Given an array of strings, capitalize the first letter of each word using map().

function CapitalizeFirstLetterOfEl(){
    let arr = ["javascript","java","kotlin"];
    return arr.map((value,index)=>{
        return value.charAt(0).toUpperCase() + arr[index].slice(1)
    })
}
console.log(CapitalizeFirstLetterOfEl());

// Q4. Given an array of strings, convert each string to its reverse using map().

function reverseEachString(){
    let str = "this is javaScript code";
    let reverse = str.split("").map(( _ ,index,arr)=>{
        return arr[arr.length - 1 - index]
    });
    return reverse.join("")
}
console.log(reverseEachString());

// Q5. Take an array of numbers and make them strings

function numberToString(){
    let arr = [1,2,3,4,5];
    return arr.map(element => element.toString())
}
console.log(numberToString());


// Q6. Given an array of numbers, check if each number is a prime number using map().

function checkEcahNumIsPrimeNum(){
    let arr = [1,3,5,7];
   let result = true;
   let checking = arr.map((element)=>{
    if(element%2==0){
        result = false
    }
   })
   return result
}
console.log(checkEcahNumIsPrimeNum());

// Q7. Given an array of strings, convert each string to lowercase and remove  using map().

function convertAndRemoveDup(){
    let str = "this is javaScript code";
    let result = [];
    let checking = str.split("").map((element,index,arr)=>{
      if(!result.includes(element)){
        result.push(element)
      }
    })
    return result.join("")
}
console.log(convertAndRemoveDup());

// Q8. Given an array of numbers, find the minimum number in each subarray using map().

function findMinNumOfEachSubArray(){
    let arr = [[1,2,3,],[4,5,6],[7,8,9]];
    return arr.map(element => Math.min(...element))
}
console.log(findMinNumOfEachSubArray());

// Q9. Given an array of strings, replace specific words with another word using map().

function stringReplace(target,newWord){
    let arr = ["this", "is", "c++", "code"] // replace c++ with javaScript
    return arr.map((element,index)=>{
        if(element == target){
           arr[index] = newWord;
        }
        return arr[index]
    })

}
console.log(stringReplace("c++","javaScript"));

// Q10. Given an array of strings, remove duplicate words from each string using map().

function removeDuplicateWordFromArrStr(){
    let arr = ["this this", "is", "javaScript", "code"];
    return arr.map((str)=>{
        let words = str.split(" ");
        let uniqueWord = words.filter((word,index)=> words.indexOf(word)=== index);
        return uniqueWord.join(" ")
    })
}
console.log(removeDuplicateWordFromArrStr());
