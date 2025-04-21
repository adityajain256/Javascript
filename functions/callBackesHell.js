// by using callbackes 
function shop(food){
    console.log(`you ordered ${food}`);
    setTimeout(() => {
        console.log(`we are preparing your ${food}`) 
    setTimeout(()=>{
        console.log(`your ${food} is out of delevery`);
        setTimeout(()=>{
            console.log(`now you can enjoy your  ${food}`);},2000);
    },2000);
    }, 2000);
        
}

shop('pizza');

