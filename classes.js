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
// console.log(User.myFullName()); 

//Subclasses

class Person extends User {
    constructor(firstName,lastName,age,education) {
        super(firstName,lastName,age);
        this.education = education;
    }

    getDetails() {
        const details = `My name is ${this.firstName} ${this.lastName}. I'm ${this.age} years old. I have a bachelor's ${this.education}`
        return details;
    }
}

//Instatiate the class
const mag = new Person('Juma','Hassan',45,'degree');
console.log(mag.getDetails());





