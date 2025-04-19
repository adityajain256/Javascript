// create a object that store name roll and marks of 3 students

const student1 = {
    fullName: "aditya jain",
    roll: 5434,
    marks: 92,
}
const student2 = {
    fullName: "tanishkla jain",
    roll: 544,
    marks: 2,
}
const student3 = {
    fullName: "adya jain",
    roll: 543,
    marks: 9,
}

let arr = [student1, student2, student3]

for(let i of arr){
    console.log(i)
}

for(let i of arr){
    if(i.marks>50){
        console.log(i.marks)
    }
    
}