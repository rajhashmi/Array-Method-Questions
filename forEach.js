// there will be basic and intermediate level Array method questions

// 1. Basic  

// Q1. Write a function to print all elements of an array using forEach().

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

function finIndex (arr,value){
    let indexValue = 0;
   arr.forEach((element,index)=>{
    if(element == value){
        indexValue = index
    }
   });
   return indexValue
}
console.log(finIndex(numbers,5));


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


