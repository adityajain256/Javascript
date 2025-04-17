let numbers = [2,5,6,7,4,3,1,10];
let sqr = []

// numbers.forEach((i)=>{
//     swr =  i*i;
//     sqr.push(swr)
// })

// console.log(sqr)

//just imagine without doing alot of things you can directly create an array by using map

let newSqr = numbers.map((i)=>{
    return i*i;
})

console.log(newSqr)