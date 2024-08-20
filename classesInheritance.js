class Person{   
    constructor(name,age){
        this.name = name 
        this.age = age
    }

    greeting(){
        console.log('classes greeting')
        
    }
    newGreeting(){
        
        return "classes are the coolest"
    }
    static sayHello(){
        console.log("Hello From Static Person")
    }


}

const bob = new Person("Bob",30)
console.log(bob)
bob.greeting()

Person.prototype.greeting= function(){                  //  WE CAN CHANGE OUR METHODS ALSO LIKE THIS
    console.log("Now i can say something")
}



bob.greeting()

class Employee extends Person{                      //  CREATING A INHERITANCE OF PERSON IN EMPLOYEE
    constructor(name,age,position){
    // this.name = name;                 // this will not work if we are taking properties from inheritance we have to us super keyword
    // this.age = age;
    super(name,age)                     // by this it will work
    this.position = position;
    }
    testGreeting() {                    // How To invole  Methods in Inheritance  and without this also we can invoke inherit method also
        super.greeting()
    }                

    sayGreeting(){
        const parentString = super.newGreeting();
        console.log(`${this.name} thinks ${parentString}`)
    }
    
}

const barb = new Employee("Barb", 27,"developer")
console.log(barb)
barb.greeting()
barb.testGreeting()
barb.sayGreeting()




//  where to use classes   EXAMPLE

class Customer extends Person{
    constructor({name="customer",age="n/a",contactMethod }){
        super(name,age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;                  
    }
    addCredit(amount){
        this.accountCredit += amount;
    }
    reduceCredit(amount){
        this.accountCredit -= amount;
    }

    static sayHi(){                     // static method
        console.log('hi')
    }
    static sayCustomerNames(c1,c2){
        console.log(`${c1.name}, ${c2.name}`)
    }
    static sayCustomerNamesAnotherWay(...customers){        //  if dont want to define parameter then do like this ...customer
        // console.log(customers)
        for(const c of customers){
            console.log(c.name)
        }
    }


    static transferCredit(source,target){
        const amt = source.accountCredit;
        target.accountCredit += amt
        source.accountCredit -= amt
    }
    
}

const customer1 = new Customer({name:"jane Doe",contactMethod:"email"})
console.log(customer1)
console.log(customer1.accountCredit)
customer1.addCredit(100)
console.log(customer1.accountCredit)
customer1.reduceCredit(50)
console.log(customer1.accountCredit)

     
const customer2 = new Customer({name:"billy",contactMethod:"email"})
console.log(customer2)
console.log(customer2.accountCredit)


const customer3 = new Customer({name:'chris'})
//  static method

    // customer1.sayHi()            IT WILL NOT WORK
    Customer.sayHi()                // YOU CAN CALL STATIC METHOD BY THEIR CLASS NAME

    Customer.sayHello();            // we can call static method from parent class directly


    Customer.sayCustomerNames(customer1, customer2)

    Customer.sayCustomerNamesAnotherWay(customer1,customer2,customer3)



    console.log(customer1.accountCredit)
    console.log(customer2.accountCredit)
    Customer.transferCredit(customer2, customer1)
    console.log(customer1.accountCredit)
    console.log(customer2.accountCredit)

//  static method end  


//  ANOTHER EXAMPLE

class Family{
    constructor(lastName){
        this.lastName = lastName
    }       
    sayFamilyName(){
        console.log(`We are the ${this.lastName}`)
    }
}

class Parent extends Family{
    constructor(lastName,father,mother){
        super(lastName);
        this.father = father;
        this.mother = mother;

    }
}

class Child extends Family{
    constructor(lastName,firstName){
        super(lastName)
        this.firstName = firstName
    }
}

const dad = new Parent("Smith","George");
const mom = new Parent("Smith","Patty");
const jimmy = new Child("Smith","Jimmy");
const anny = new Child("Smith", "Anny");

anny.sayFamilyName()





class FamilyMember{
    constructor(lastName,firstName,relationship){
        this.lastName = lastName;
        this.firstName = firstName;
        this.relationship = relationship;
    }
    sayFamilyName(){
        console.log(`We are the ${this.lastName}`)
    }
}


class FamilyGroup{
    constructor(parents=[],children=[]){
        this.parents = parents 
        this.children = children
    }
    addMember(member){
        this.children.push(member)
    }
}



const father = new FamilyMember('simth','bill','father')
const mother = new FamilyMember("simth",'catherine','mother')
const annie = new FamilyMember('simth','annie','daughter')
const will = new FamilyMember('simth','will','son')
const theSimth = new FamilyGroup([father,mother])

console.log(theSimth)
theSimth.addMember(annie)
theSimth.addMember(will)
console.log(theSimth)


const simthFamily = {
    1:['simth','billy','father'],
    2:['simth','catherine','mother'],
    3:['simth','annie','daughter'],
    4:['simth','will','son'],
}


const anotherFamily = {
    1:['wilson','BillyBob','father'],
    2:['wilson','joejoe','son']
}
const createFamilyGroup = (famArray) =>{
    const famGroup = new FamilyGroup();
    console.log(famGroup)
    for(const prop of famArray){
        if(prop.relationship === 'father' || prop.relationship === 'mother'){
            famGroup.parents.push(prop)
        }else{
            famGroup.children.push(prop)
        }
    }
    console.log(famGroup)
    return famGroup
}
const createFamilyMembers = (famObj)=>{
    const allMembers = [];
    for(const prop in famObj){
        // console.log(famObj[prop])   how to destructure this
        const [last,first ,relationship] = famObj[prop]         // by E6 version of js destructuring
        const newMember = new FamilyMember(last,first,relationship)
        allMembers.push(newMember)
        console.log(last)
        console.log(first)
    }
    console.log(allMembers)
    createFamilyGroup(allMembers)
}

createFamilyMembers(simthFamily)
createFamilyMembers(anotherFamily)