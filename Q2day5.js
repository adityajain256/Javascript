class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("seceret data");
    }
}

class admin extends user{
    constructor(name,pass){
        super(name,pass)
    }
    editData() {
        console.log("you can edit data");
    }
}

let din = new admin("adit","tca2459");

din.editData()

console.log(din.name);
