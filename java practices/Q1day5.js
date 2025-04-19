class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("seceret data");
    }
}

let aditya = new user("adita","jainda@gmail.com");

console.log(aditya.email)
 
aditya.viewData()