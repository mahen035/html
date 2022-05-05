/* let a = "10";
let b = 10;
console.log(typeof a);
console.log(typeof b);

console.log(a===b); */  //Stict Comparison

/* let names = ["Rohan", "Sam", "Rahul", "Iqbal"]

console.log("Before:: ", names);

names[1] = "Priti"

let newNames = names;

newNames.push("Gopal");

//console.log("After:: "+ names);

for(let name of names){
    console.log(name)
}

let rNames = names.filter(rNamesFunc);  //Callback

function rNamesFunc(name){
    return name.startsWith("R");
}

console.log(rNames);

const allNames = names.reduce(myFunc, " ");

function myFunc(concateStr, name) {
    return concateStr + name;
}

console.log(allNames);

if(" "){
    console.log("Valid return true")
}
else{
    console.log("Not valid")
}

const func = function(){
    console.log("This is a function expression");
}

func(); */

let sum = function(a, b){
    return a+b
}

let add = (a,b) => {
    return a+b;
}

console.log(add(10,20))

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 34
}

for(let key in person){
    console.log(person[key])
}

