let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let i=0;i<marks.length;i++){
//     sum += marks[i];
// }

// let avg = sum/marks.length;

// console.log(marks.length);

// console.log(avg);

// console.log(sum);

// using reduce to add all the numbers inside array

const sum = marks.reduce((res,cur)=>{
    return  res+cur;
})

console.log(sum)

//for average 

console.log(sum/marks.length)