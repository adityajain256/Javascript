const product = [{id: 2010,name: "car", price: 500000},{id: 2011, name: "pen", price: 50},{id: 2012, name:"plane", price: 203450}]

for(let i of product){
    console.log(`name: ${i.name}\n price: ${i.price}`);
}
ex = []
const expencive = product.filter((p) => p.price > 500);

for(let l of expencive){
    console.log(l);
    
}
