let n  = prompt("enter the number");

let initN = 0;

let arr = []

for(i=0; i<n; i++){
    initN += 1;
    arr.push(initN);
}

alert(arr)

let sum = arr.reduce((pre,cur)=>{
    return pre+cur;
})

alert(sum)

let product = arr.reduce((pre,cur)=>{
    return pre*cur;
})

alert(product)