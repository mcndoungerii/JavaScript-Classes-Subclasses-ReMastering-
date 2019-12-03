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
}

const john = new User('John','Anderson',25);
// console.log(john.lastName);

console.log(john.getFullName());

