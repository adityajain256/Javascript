function shop(food){
    console.log(`you orderd ${food}`);
}

function preparing(food){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(`we are preparing your ${food}...`) 
            resolve("success")
        }, 2000);
    })
}

function delevery(food){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`your ${food} is out of delevery...`);
            resolve("success");
        },5000)
    })
}

function enjoy(food){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`now you can enjoy your ${food}`);
            resolve("success");

        },9000)
    })
}

async function oreder(food){
    shop(food);
    await preparing(food);
    await delevery(food);  
    await enjoy(food);

}

oreder('Tanishka jain');