let pOfItem = [250,645,300,900,50];

let newPOfItem = [];

// for(let i=0 ; i<pOfItem.length; i++){
//     newPOfItem[i] = (pOfItem[i]- (pOfItem[i]/10) )  ;
// }
// console.log(newPOfItem);


// if i want to do the same thing with the help of foreach by calling finction 

pOfItem.forEach((i)=>{
    np = (i- (i/10) );
    newPOfItem.push(np)
})

console.log(newPOfItem)
