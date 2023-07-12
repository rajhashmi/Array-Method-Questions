// there will be basic and intermediate level Array method questions of Reduce().

// 1. Basic.

// =================================================================================================================================================================

// Q1. Write a function to calculate the sum of all elements in an array using reduce().

function sum(){
    let arr = [1,2,3,4,5];
  let sumOfEl =  arr.reduce((previousValue,currentValue)=>{
        return previousValue += currentValue
    })
    return sumOfEl
}
console.log(sum());


// Q2. Write a function to find the maximum value in an array using reduce().

function maxNum(){
    let arr = [1, 2, 6, 3, 4, 5];
    let maxNumber = arr.reduce((previousValue,currentValue)=>{
        if(previousValue < currentValue){
            previousValue = currentValue
        }
        return previousValue
    },0)
    return maxNumber
}
console.log(maxNum());

// Q3. Write a function to count the number of occurrences of a given element in an array using reduce().

function countOrrcur(target){
    let arr = [2,1, 2, 3, 4, 5, 6, 2,];
    let find = arr.reduce((previousValue,currentValue)=>{
        if(currentValue == target){
            previousValue++
        }
        return previousValue
    },0)
    return find
}
console.log(countOrrcur(2));

// Q4. Write a function to concatenate all elements of an array into a single string using reduce().

function concatenateAllEl(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
    let concatenate = arr.reduce((previousValue,currentValue)=>{
        return previousValue += currentValue
    },"")
    return concatenate
}
console.log(concatenateAllEl());

// Q5. Write a function to create a new array that contains only the unique elements from the original array using reduce().

function uniqueElement(){
    let arr = [1,2,3,4,5,6,7,8,9,2,4,3,6,5];
    let unique = arr.reduce((previousValue,currentValue)=>{
        if(!previousValue.includes(currentValue)){
            previousValue.push(currentValue)
        }
        return previousValue
    },[])
    return unique
}
console.log(uniqueElement());

// Q6. Write a function to reverse the order of elements in an array using reduce().

function reverseTheOrder(){
    let arr = [1, 2, 3, 4, 5];
    let reverse = arr.reduce((previousValue,currentValue)=>{
            previousValue.unshift(currentValue)
            return previousValue
    },[])
    return reverse
}
console.log(reverseTheOrder());

// Q7. Write a function to multiply all elements of an array together using reduce().

function multiplyAllElement(){
    let arr = [1, 2, 3, 4, 5];
    let multiply = arr.reduce((previousValue,currentValue)=>{
        return previousValue *= currentValue
    },0)
    return multiply
}
console.log(multiplyAllElement());

// Q8. Write a function to find the average value of all elements in an array using reduce().

function averageOfElement(){
    let arr = [1, 2, 3, 4, 5];
    let average = arr.reduce((previousValue,currentValue)=>{
       return previousValue += currentValue
    },0);
    return average/arr.length
}
console.log(averageOfElement());

// Q9. Write a function to find the product of the even elements in an array using reduce().

function productOfEvenEl(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumProduct = arr.reduce((previousValue,currentValue)=>{
        if(currentValue%2==0){
            return previousValue * currentValue;
        }
        return previousValue
    },1)
    return evenNumProduct
}
console.log(productOfEvenEl());

// Q10. Write a function to find the index of the largest element in an array using reduce().

function findLargestIndex(){
    let arr = [1,2,3,4,5,6,11,7,8,9,10];
    let largeIndex = arr.reduce((previousValue,currentValue, _, arr)=>{
        if(previousValue < currentValue){
            previousValue = currentValue
        }
        return previousValue
    },0)
    return arr.indexOf(largeIndex)
}
console.log(findLargestIndex());


// ================================================= BASIC ENDS HERE AND INTERMEDIATE STARTS HERE ==========================================================

// Q1. Write a function to find the longest word in an array using reduce().

function longestWord(){
    let arr = ["javaScript", "kotlin", "java", "c++"];
    let longWord = arr.reduce((previousValue,currentValue)=>{
        if(currentValue.length > previousValue.length){
            previousValue = currentValue
        }
        return previousValue
    },"")
    return longWord;
};
console.log(longestWord());


// Q2. Write a function to create a new array that contains the elements of the original array sorted in ascending order using reduce().



// ==========================


// Q3. Write a function to check if an array is sorted in ascending order using reduce().

function isSorted(){
    let arr = [1,2,3,4,5];
    let checkSort = arr.reduce((previousValue,currentValue,index, arr)=>{
        if(currentValue < arr[index - 1]){
            return false
        }
        return previousValue
    },true)
    return checkSort
}
console.log(isSorted());


// Q4. Write a function to find the sum of the squares of all elements in an array using reduce().

function sumOfAllElement(){
    let arr = [2,3 ];
    let result = arr.reduce((previousValue,currentValue)=>{
        return previousValue += currentValue * currentValue;
    },0)
    return result;
}
console.log(sumOfAllElement());

// Q5. Write a function to create a new array that contains the elements from the original array in reverse order using reduce()

function reverseFunc(){
    let arr = [7,6,5,4,3,2,1];
    let reverse = arr.reduce((previousValue,currentValue,index,arr)=>{
        let reverseIndex = arr.length - 1 - index
        previousValue.push(arr[reverseIndex]);
        return previousValue
    },[])
    return reverse
}
console.log(reverseFunc());

// ==================== Another Method To Reverse ==================
 function reverseFuncTwo(){
    let arr = [1,2,3,4,5];
    let reverse = arr.reduce((previousValue,currentValue)=>{
        previousValue.unshift(currentValue)
        return previousValue
    },[]);
    return reverse;
};
console.log(reverseFuncTwo());

// Q6. Write a function to check if an array contains a specific element using reduce().

function containSpecificElement(){
    let arr = [14,2,3,4,5,6,7,8,9,10];
    let specificElement = arr.reduce((previousValue,currentValue)=>{
        if(currentValue%2==0){
            previousValue.push(currentValue)
        }
        return previousValue
    },[])
    return specificElement;
}
console.log(containSpecificElement());

// Q7. Write a function to find the first non-repeating element in an array using reduce().

function firstNonRepeating(){
    let arr = [1,4,1,2,2,3,3,4,5,5,0];
    let check = arr.reduce((previousValue,currentValue)=>{
        previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
        return previousValue
    },{})
    console.log(check);
    return arr.find(element => check[element] === 1)
}
console.log(firstNonRepeating());


// Q8. Check if a list contains any negative numbers using reduce().

 function containAnyNegativeNum(){
    let arr = [-1,2,3,4,5,6,7,8,9,10];
    return arr.reduce((previousValue,currentValue)=>{
        if(currentValue < 0){
            return true
        }
        return previousValue
    },false)
 }
 console.log(containAnyNegativeNum());


//  Q9. Capitalize the first letter of each word in a sentence using reduce().

function CapitalizeFirstLetter(){
    let arr = ["java","kotlin","c++","javaScript","python"];
    return arr.reduce((previousValue,currentValue, index)=>{
        previousValue.push(currentValue.charAt(0).toUpperCase() + arr[index].slice(1))
        return previousValue
    },[])
}
console.log(CapitalizeFirstLetter());


// Q10. Find the number of uppercase letters in a sentence using reduce().

function numberOfUpperCaseLetter(){
    let arr = "javaScript is Programming Language";
   return arr.split("").reduce((previousValue,currentValue,index,array)=>{
    if(currentValue == array[index].toUpperCase()){
        previousValue++
    }
    if(arr[index] === " "){
        previousValue--
    }
    return previousValue
   },0)
}
console.log(numberOfUpperCaseLetter());

// Q11.  Check if a string is a palindrome using reduce().

function checkPalindrome(){
    let arr = "madam"
    let reversingArr = arr.split("").reduce((previousValue,currentValue)=>{
        previousValue.unshift(currentValue);
        return previousValue
    },[])
    if(reversingArr.join("") === arr){
        return true
    }else{
       return false
    }

}
console.log(checkPalindrome());

// Q12. Find the common elements between two given array using reduce().

function commonElement(){
    let arr1 = [1,2,3,4,5];
    let arr2 = [3,4,2,6,4,3,1];
    return arr1.reduce((previousValue,currentValue, _,arr)=>{
       if(arr2.includes(currentValue)){
        previousValue.push(currentValue)
       }
       return previousValue;
    },[])
}
console.log(commonElement());

// Q13. Remove all vowels from a sentence using reduce().

function RemoveAllVowelsEl(){
    let vowels = ["a", "e", "i","o","u"];
    let sentence = "this is javascript code";
    return sentence.split("").reduce((previousValue,currentValue)=>{
        if(!vowels.includes(currentValue.toLowerCase())){
            previousValue +=currentValue
        }
        return previousValue
    },"")
}
console.log(RemoveAllVowelsEl());

// Q14.  Remove punctuation marks from a string using reduce().

function RemoveAllPunctionMarks(){
    let str = "Hello, how are you today?";
    let punctuationMarks = ['.', ',', ';', ':', '!', '?', '"', "'", '(', ')', '[', ']', '{', '}', '-'];

    return Array.from(str).reduce((previousValue,currentValue)=>{
        if(!punctuationMarks.includes(currentValue)){
            previousValue += currentValue;
        }
        return previousValue
    },"")
    
}
console.log(RemoveAllPunctionMarks());

// Q15. Write a function that uses reduce to return the length of the longest string in an array.

function findLongestStringLength(){
    let arr = ["javascript", "kotlin", "c++", "python", "java"];
    return arr.reduce((previousValue,currentValue)=>{
        let currentLength = currentValue.length;
        return currentLength > previousValue ? currentLength : previousValue;
    },0)
}
console.log(findLongestStringLength());
