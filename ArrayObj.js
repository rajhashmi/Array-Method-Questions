const students = [
    { name: "Alice", age: 22, gender: "female", grade: 80 },
    { name: "Bob", age: 19, gender: "male", grade: 75 },
    { name: "Charlie", age: 25, gender: "male", grade: 90 },
    { name: "Diana", age: 21, gender: "female", grade: 95 },
    { name: "Eve", age: 20, gender: "female", grade: 85 },
  ];

// Q1. Find all male students in the students array.

let maleStudent = students.filter(element => element.gender === "male");
console.log(maleStudent);

// Q2.Calculate the total number of female students in the students array.

let totalNumOfFemales = students.reduce((previousVal,currentVal)=>{
    if(currentVal.gender === "female"){
        previousVal++
    }
    return previousVal
},0);

console.log(totalNumOfFemales);

// Q3. Get an array of names of students in the students array.

let namesOfStudent = students.map((element)=> element.name);
console.log(namesOfStudent);

// Q4. Find the student with the highest grade in the students array.

let highestStudentGrade = students.reduce((acc,val)=>{
    if(val.grade > acc){
        acc = val.grade
        return acc
    }
    return students.filter((el)=>{
        if(el.grade === acc){
            return el.name
        }
    })
},0)
console.log(highestStudentGrade);

// Q5. Check if all students are above the age of 18 in the students array.

let Checking = students.every(element => element.age > 18);
console.log(Checking);

// Q6. Calculate the average grade of female students in the students array.
let divider = 0;
let averageOfFemales = students.filter((element) => {
    if(element.gender === "female"){
        divider++;
        return element
    }
}).reduce((previousVal,currentVal)=> {
    previousVal += currentVal.grade
    return previousVal
},0)/divider
console.log(averageOfFemales);

// Q6. Find the student(s) who have grades above the average grade of the male students in the students array.

let grade = 0
let student = 0;
let maleStudentAverage = students.reduce((previousVal,currentVal)=>{
    if(currentVal.gender === "male"){
        student++
        previousVal.push(currentVal)
    }
    return previousVal
},[]).map((element)=>{
    grade += element.grade;
    return element
}).filter((el)=>{
    if(el.grade > grade/student){
        return el
    } 
})
console.log(maleStudentAverage);

