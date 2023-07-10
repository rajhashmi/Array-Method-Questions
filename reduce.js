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