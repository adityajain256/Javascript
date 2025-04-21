function greet(name) {
    console.log(`hello ${name}`);
    setTimeout(asking, 2000);
}

function asking() {
    console.log('how are you?');
    setTimeout(bye, 2000);
}

function bye(){
    console.log('bye');
}

greet('aditya');
