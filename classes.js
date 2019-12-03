class User {
    constructor(firstName,lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        const fullName = `${this.firstName} ${this.lastName} is my full name.`
        return fullName;
    }

    editName(editName) {
        const name = editName.split(" ");
        this.firstName =  name[0];
        this.lastName = name[1];

        const newName = `My new name is ${this.firstName} ${this.lastName}`;
        return newName;
    }

    static myFullName() {
        return 'My Full name is Barnes Lars'; 
    }
}

const john = new User('John','Anderson',25);
// console.log(john.lastName);

// console.log(john.getFullName());
// console.log(john.editName('Allen Mwandunga'));
john.editName('Allen Mwandunga');
// console.log(john.getFullName());

//Accessing the static method
console.log(User.myFullName()); 



