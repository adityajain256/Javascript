let pOfItem = [250,645,300,900,50];

let newPOfItem = [];

for(let i=0 ; i<pOfItem.length; i++){
    newPOfItem[i] = (pOfItem[i]- (pOfItem[i]/10) )  ;
}
console.log(newPOfItem);



