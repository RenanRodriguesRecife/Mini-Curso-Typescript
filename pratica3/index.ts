class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails():void{
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

const will = new UserAccount("Willian",30)
console.log(will)
console.log(will.age)
will.logDetails()