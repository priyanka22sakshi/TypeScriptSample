/** create module */
export {}
let message = 'Hello Everyone there';
console.log(message);


/**types */

let x= 30;
const y= 20;

let value :boolean=true;
let total :number=300;
let name :string='piku';

let sentence: string=`My name is ${name}
I am a beginner in typescript`;
console.log(sentence); 

let isNew:boolean=null;
let newName:string=undefined;


/**Array */

let List1:number[]=[1,2,3];
let List2: Array<number>=[1,2,3];

let List3: [string,number]=['Sakshi',22];


/**enum */

enum color {Red=4, Green,Blue}

let c: color =color.Green;
console.log(c);

/**any type */
let randomvalue: any=true;
randomvalue=20;
randomvalue='Priyanka';


/**unknown */
let myvariable: unknown=10; 
function hasName(obj: any): obj is {name: string}{
    return !!obj &&
    typeof obj ==="object" &&
    "name" in obj
}
if(hasName(myvariable)){
console.log(myvariable.name);
}



/**Union type */
let a;  
a=10;;
a=true;

let b=20;

let multitype: number| boolean;
multitype= 20;
multitype=true;

let anytype: any;
anytype= 20;
anytype=true;


/**function */

function add(num1:number, num2:number){
    return num1+ num2;
}
add(5,10);

function mul(num1:number, num2?:number){
   if(num2)
    return num1* num2;
    else
    return num1;
}
mul(5,10);
mul(5);


/**Interface */

interface Person{
    firstName:string,
    lastName:string
}

function fullName(person:Person)
{
    console.log(`${person.firstName}  ${person.lastName}`)
}

let p={
firstName:'Priyanka',
lastName:'Sakshi'
}

fullName(p);


/**Class */

class employee
{
    employeeName:string;

    constructor(name:string)
    {
        this.employeeName= name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
    
}

let emp= new employee('Priyanka');
console.log(emp.employeeName);
emp.greet();

class manager extends employee
{
    constructor(managrName:string){
        super(managrName);
    }

    delegatework(){
        console.log(`Manager delegating task`);
    }
}
    let m1= new manager('Priyaka');
    m1.delegatework();
    m1.greet();
    console.log(m1.employeeName);


    /**Access Modifier */

     /**it sets the accebility of properties and methods in class
      * Public :- by default each class member is public. we can access them throughout the program.
      * private:- can't be access from outside. We can not access the private member even in derive class.
      * protected :- we can access members in derive class.
      */