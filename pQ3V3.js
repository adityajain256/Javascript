let comp = ["bloomBerg", "microsoft", "google", "uber", "IBM","Netflix" ];
{
let compp = comp.slice(1,comp.length)
console.log(compp)
}

{
comp.splice(3,1,"OLA")
console.log(comp)
}

{
    let comppp = comp.concat("Amazon")
    console.log(comppp);
    
}