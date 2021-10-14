abstract class Pessoa{
    p:string;
    id: number;

    constructor(p:string, id:number){
        this.p = p
        this.id = id
    }
}

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


class CharAccount extends UserAccount{
    protected nickname: string
    private level: number
    public bonus: number
    readonly email: string

    constructor(name: string, age: number, nickname: string, level:number, email:string,bonus:number){
        super(name,age)   
        this.nickname = nickname;
        this.level = level;
        this.email = email
        this.bonus = bonus
    }

    get getLevel(){
        console.log("--------GET--------")
        return this.level
    }

    set setLevel(level: number){
        this.level = level
    }
}


const will = new UserAccount("Willian",30)
console.log(will)
console.log(will.age)
will.logDetails()

const john = new CharAccount("John",45,"johnmaster",80,"john@test.com",43);
john.logDetails()


console.log(john.getLevel)
john.setLevel = 89
console.log(john.getLevel)