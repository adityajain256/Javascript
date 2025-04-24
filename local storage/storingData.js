let inputCon = document.querySelector("#container");
let outputCon = document.querySelector("#output");
let fullName = document.querySelector("#name");
let age = document.querySelector("#age");
let saveBtn = document.querySelector("#save");

let arr = [];

let count = 0; 
function addName(e){
    let deletBtn = document.createElement('button');
    deletBtn.innerText = "Delete";
    deletBtn.style.color = "red";
    deletBtn.style.fontSize = "20px";
    deletBtn.style.marginLeft = "10px";


    if(e.target.tagName == "BUTTON"){
        

        let user = {name: fullName.value, age: age.value};
        localStorage.setItem(user, JSON.stringify(user));
        let data = JSON.parse(localStorage.getItem(user));

        let name = document.createElement('p');
        name.innerText = data.name;
        name.style.color = "green";
        name.style.fontSize = "20px";
        name.appendChild(deletBtn);
        
        let ager = document.createElement('p');
        ager.innerText = data.age;
        name.style.color = "red";
        ager.style.fontSize = "20px";
        
        outputCon.appendChild(name);
        outputCon.appendChild(ager);
        fullName.value = "";
        age.value = "";
        
        console.log("Name added to local storage");
        
        arr.push(user);
        console.log(arr);
        localStorage.setItem('user' , JSON.stringify(arr));
        localStorage.getItem("arr")
        deletBtn.addEventListener('click', ()=>{
            outputCon.removeChild(name);
            outputCon.removeChild(ager);
            localStorage.removeItem(user); 
        });
            console.log("Name removed from local storage");
            console.log(user);
        
}

}

saveBtn.addEventListener(("click"), addName);

window.addEventListener('load', ()=>{
    let data = JSON.parse(localStorage.getItem("user"));
    console.log(data)
    for(i=0; i< data.length; i++){
        let fname = data[i].name;
        let agen = data[i].age;
        let name = document.createElement('p');
        name.innerText = fname;
        name.style.color = "green";
        name.style.fontSize = "20px";

        let ager = document.createElement('p');
        ager.innerText = agen;
        ager.style.color = "red";
        ager.style.fontSize = "20px";
        outputCon.appendChild(name);
        outputCon.appendChild(ager);


    }
})

