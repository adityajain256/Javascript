// for loop for(let var=0; stopping; increament){}

// for of loop

// str = "I am aditya jain";
// size = 0;

// for(let val of str){
//     console.log("iteration ", val);
//     size++;
// }

// console.log(size)

// for of loop is used for only strings and arrays

// for in loop

const employee = {
    fullName: "aditya jain ",
    company: "google",
    employeeId: "gog256",
    salery: 5 + "million"
}

for(let key in employee){
    console.log( key,"= ", employee[key]);

}