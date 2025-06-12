//creating a variable
var firstName = "John";
var lastName = "Doe";
console.log("Hello, " + firstName + " " + lastName + "!");

let age = 30;
const country = "Pakistan";
//country='India'; // This will throw an error because 'country' is a constant

lastName = 2;
console.log("Hello, " + firstName + " " + lastName + "!");

const products =["Iphone 12","watch","Macbook Pro"];
//const mobile = products[0];
const[mobile,watch] = products; // Destructuring assignment

console.log(mobile,watch); // Output: Iphone 12
console.log(products[0]); // Output: Iphone 12
console.log(products);

const Business ={
    obj2:22,
    pname:"chai",
    amount:1000000000000000,
    price:450,
}
console.log(Business.pname); // Output: chai
console.log(Business.amount); // Output: 1000000000000000

//const amount = Business.amount; this can also be done by 
const{amount,pname,obj2 } = Business; 
console.log(amount,pname,obj2); // Output: 1000000000000000 chai 22

function sum(a,b){
    return a+b;
}
var e = sum(4,3);
console.log(e);

const students=["Aamina","Romaisa","Areeba","Areej"];
let a =5;
let b =a; // stores copy of a it won't change if we change a
a=7;
console.log(b); 

let animal={
    name:"dog",
    age:3,
};

//let newanimal = animal; // stores reference to the object
let newanimal = {...animal}; 
newanimal.name = "Kapibara"; // changing the name of the animal object
console.log(animal);
animal.amount = 5; 
console.log(animal); // Output: { name: 'Kapibara', age: 3, amount: 5 }
console.log(newanimal); // Output: { name: 'Kapibara', age: 3 }

//Using the spread operator to create a copy of an array we can save the original array from being modified 
const shortlisted = [...students]
shortlisted.splice(2,2); // This will remove the first two elements from the array
console.log(shortlisted); // Output: [ 'Areeba', 'Areej' ]
console.log(students); // Output: [ 'Aamina', 'Romaisa', 'Areeba', 'Areej' ]

function sumAll(...args){ // using rest operator to get all the arguments passed to the function
    const r = args.reduce((sum,currentValue)=> currentValue + sum, 0); // this zero is the initial value of the sum
    return r;
}

console.log(sumAll(1,2,3,4,5)); // Output: 15
console.log(sumAll(0,0,0,0));


// we can run it by Ctrl + Shift + N
// or by using the Run button in the top right corner
// or by node main.js in the terminal


