const shop = new shopN ((resolve, reject)=>{
    console.log(`you ordered ${food}`);
    resolve("success")
})

shop.then((result)=>{
    console.log(result);
    console.log(`we are preparing your ${food}`) 
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("your food is out of delevery")
        },2000);
    })
})
// i Don't  like this topic so i directly jump on asynk await