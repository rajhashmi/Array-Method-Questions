// there will be basic and intermediate level Array method questions

// 1. Basic  

// Q1. Write a function to print all elements of an array using forEach().

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-1];

function consoleAllEl(arr){
    arr.forEach(element => {
        console.log(element);    // this will console all the element but the function will return undefined
    });
    return "."
}
console.log(consoleAllEl(numbers));

// Q2. Write a function to calculate the sum of all elements in an array using forEach().

function maxNumber(arr){
    let maxValue = arr[0];     // I created this variable to store the max num of array 
    arr.forEach((value)=>{
        if(value > maxValue){   // if my value is greeter than maxValue then my maxValue is  = to value
            maxValue = value
        }
    })
    return maxValue
}
console.log(maxNumber(numbers));

//  Q3. Write a function to count the number of even elements in an array using forEach().

function evenUsingForEach(arr){
    let evenNum = [];
    arr.forEach((value)=>{
        if(value %2==0){
           evenNum.push(value)
        }
    })
    return evenNum
}
console.log(evenUsingForEach(numbers));

// Q4. Write a function to count the number of even elements in an array using forEach().

function countEvenNumInArr (arr){
let counter = 0
    arr.forEach((element,)=>{
       if(element % 2 == 0){
        counter++
       }
    })
   return counter
}
console.log(countEvenNumInArr(numbers));


// Q5. Write a function to find the average value of all elements in an array using forEach().

function findAverage(arr){
    let sum = 0;
    arr.forEach((value) => {
        sum += value
        console.log(sum);
    });
    return  sum
}
console.log(findAverage(numbers));

// Q6. Write a function to check if all elements in an array are positive using forEach().

function checking(arr){
    let isTrue = 0;
    arr.forEach((value)=>{
        if(value > 0){
            isTrue++
        }
    })
    if(isTrue == arr.length){
        return true
    }else{
        return false
    }
}
console.log(checking(numbers));


// Q7. Write a function to find the index of a given element in an array using forEach().

function findIndex (arr,value){
    let indexValue = 0;
   arr.forEach((element,index)=>{
    if(element == value){
        indexValue = index
    }
   });
   return indexValue
}
console.log(findIndex(numbers,5));


// Q8. Write a function to calculate the product of all elements in an array using forEach().

function claculateProduct(arr){
    let product = 1;
    arr.forEach(value => product *= value )
    return product
}
console.log(claculateProduct(numbers));


// Q9. Write a function to create a new array that contains the squares of the elements in the original array using forEach().

function squareElement(arr){
   let square = [];
   arr.forEach(value => square.push(value*value))
   return square
}
console.log(squareElement(numbers));

// Q10. Write a function to double each element of an array using forEach().

function doubleElement(arr){
    arr.forEach((value,index)=>{
        arr[index] = value+value
    })
    return arr
}
console.log(doubleElement(numbers));


//  ================================================= BASIC ENDS HERE AND INTERMEDIATE STARTS HERE ==========================================================


let number2 = [1,3,2,4,5,6,7,8,9,10,3,5,4,7,6,1,8,5,6,3,1,9];

// Q1 Write a function to remove all duplicate elements from an array using forEach().

function removeDuplicate(arr){
    let removedElement = [];
    arr.forEach((value)=>{
        if(!removedElement.includes(value)){
            removedElement.push(value)
        }
    });
    return removedElement
}
console.log(removeDuplicate(number2));


// Q2. Write a function to find the first occurrence of an element in an array using forEach().

function firstOccurrence(arr,value){
    let foundIndex = -1;
    arr.forEach((element,index)=>{
        if(element == value && foundIndex == -1){
            foundIndex = index
        }
    });
    return foundIndex
}
console.log(firstOccurrence(number2,1));

// Q3. Write a function to find the second smallest element in an array using forEach().

function secondSmallestEl(arr){
  let smallestNum = Math.min(...arr);
  arr.forEach((value,index)=>{
    if(value == smallestNum)(
        arr.splice(index,1)
    )
  })
  smallestNum = Math.min(...arr)
  return smallestNum
}
console.log(secondSmallestEl(number2));


// Q4. Write a function to concatenate all elements of an array into a single string using forEach().

function  concatenateAllEl(arr){
    let convertingArrToStr =  "";
    arr.forEach((value)=>{
        convertingArrToStr += value
    })
    return convertingArrToStr;
}
console.log(concatenateAllEl(numbers));

// Q5. Write a function to remove all elements from an array that satisfy a given condition using forEach().
let condition = (element) => element %2 == 0;
function removedSatisfyingElement(arr,conditions){
    arr.forEach((value,index)=>{
        if(conditions(value)){
            arr.splice(index,1)
        }
    })
  return arr
}
console.log(removedSatisfyingElement(numbers,condition));


// Q6. Write a function to find the sum of the squares of all even elements in an array using forEach().

function evenSquare(arr){
    let sum = 0
    arr.forEach((element)=>{
        if(element%2==0){
            sum+= element*element
        }
    })
    return sum
}
console.log(evenSquare([1,2,3,4,5,6,7,8,9,10]));

// Q7. Write a function to check if all elements in an array are equal to a given value using forEach().

function isAllEqual(arr,value){
    let isEqual = true;
    arr.forEach((element)=>{
        if(element !== value){
            isEqual = false
        }
    })
    return isEqual
}
console.log(isAllEqual(numbers,1));

// Q8. Write a function to find the first positive element in an array using forEach().

function firstPositiveElement(arr){
    let firstElement = null;
    arr.forEach((value)=>{
        if(value > 0 && firstElement=== null){
            firstElement = value
        }
    })
    return firstElement
}
console.log(firstPositiveElement(numbers));

// Q9.Write a function to find the number of times a given element appears in an array using forEach().

function elAppearingInEl(arr,target){
    let counter = 0;
    arr.forEach((value)=>{
        if(value == target){
            counter++
        }
    });
    return counter
}
console.log(elAppearingInEl(numbers,1));

// Q10. Write a function to find the longest string in an array using forEach().

let names = ["HTML", "JAVASCRIPT", "C++", "JAVA"];

function longestNames(arr){
    let longest = "";
    arr.forEach((value)=>{
        if(value > longest){
            longest = value
        }
    })
    return longest
}
console.log(longestNames(names));


// Q11. Write a function to filter out all negative elements from an array using forEach().
let number3 = [-1,-2,-3,-4,5,6,7,8,9]

function filterAllNagative(arr){
    let negative = [];
    arr.forEach((value)=>{
        if(value < 0){
            negative.push(value)
        }
    })
    return negative
}
console.log(filterAllNagative(number3));

// Q12. Write a function to find the smallest element in an array that is greater than a given value using forEach().

let number4 = [1,2,3,4,5,6,7,8,9,10]

function smallestNum(arr){
    let smallest = Infinity;                   
    arr.forEach((element)=>{
        if(element < smallest){
            smallest = element
        }
    })
    return smallest
}

console.log(smallestNum(number4));

// Q13.  Write a function to reverse the order of elements in an array using forEach()

function reverseArray(arr){
    const reversedArray = [];
    arr.forEach((_, index, originalArray)=>{
        const reverseIndex = originalArray.length - 1 - index
        reversedArray.push(originalArray[reverseIndex])
        console.log(reverseIndex);
    });
    return reversedArray
}
console.log(reverseArray(number2));


//  Q14. Write a function to remove all elements from an array that are divisible by a given value using forEach().


function removedElementDivisible(arr,number){
    let divisiblenumber = [];
    arr.forEach((element)=>{
        if(element%number==0){
            divisiblenumber.push(element)
        }
    });
    return divisiblenumber
}
console.log(removedElementDivisible(number2,4));

// Q15. Write a function to transform an array into an object where the elements are keys and their counts are values using forEach().

function keyValue(arr){
    let object = {};
    arr.forEach((value)=>{
        object[value] = (object[value] || 0) + 1
    });
    return object
}
console.log(keyValue(number2));


// Q16. Write a function to check if an array is sorted in ascending order using forEach().

function isArraySort(arr){
    let isSort = true;
    let previousValue = arr[0];
    arr.forEach((value)=>{
        if(value < previousValue){
            isSort = false;
        }
        console.log(previousValue,value);
        previousValue = value;
        console.log(previousValue,value);

    })
    return isSort;
}
console.log(isArraySort([1,2,3,4,5,6,7,8,9,10]));

// Q17.  Write a function to remove all falsy values from an array using forEach().

let falsyValue = [true,false,-1,"",null,undefined,1,2,3,4,-5,NaN,-0]

function removeFalsyValue(arr){
    let truthyValue = [];
    arr.forEach((value)=>{
        if(value){
            truthyValue.push(value)
        }
    })
    return truthyValue
}
console.log(removeFalsyValue(falsyValue));


// Q18. Write a function to find the smallest positive integer that is not present in an array using forEach().

function smallestPositiveNum(arr){
    let smallest = [];
    arr.forEach((value,index,array)=>{
       if(value > 0){
        smallest.push(value)
       }
    })
    console.log(smallest);
    return Math.min(...smallest)
}
console.log(smallestPositiveNum(number3));


// Q19.  Write a function to create a new array that contains only the elements that appear more than once in the original array using forEach().


 function findDublicate(arr){
    const countMap = {};
    const duplicate = [];

    arr.forEach((element)=>{
      if(countMap[element]){
        countMap[element]++
      }else{
        countMap[element] = 1
      }
    })
    arr.forEach((element)=>{
        if(countMap[element] > 1 && !duplicate.includes(element)){
            duplicate.push(element)
        }
    })
    return duplicate;
 }
 console.log(findDublicate([1,2,3,4,5,6,7,8,9,4,3,6,5,8]));


//  Q20. Write a function to find the index of the smallest element in an array using forEach().

 function smallestNumIndex(arr){
    let smallestIndex = 0;
    let firstElement = arr[0]
    arr.forEach((element,index,array)=>{
        if(element<firstElement){
            firstElement = element;
            smallestIndex = index
        }
    });
    return smallestIndex;
 }
 console.log(smallestNumIndex([2,3,4,5,3,6,7,1,8]));