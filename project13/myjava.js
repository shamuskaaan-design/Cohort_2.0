/* let array = [1, 2, 3, 4, 5];
array.push(21);

array.pop();

array.shift();

array.unshift(20); 

array.slice(1,4); 

array.splice(2, 1, 99);

array.reverse();

let arrays = [78, 90, 67, 91, 79];
let newarr = arrays.sort(function (a, b) {
  return b - a;
}); 

let newarr = array.forEach(function(val){
  console.log(val*10);
}) 

let newarr = array.map(function(val){
  if(val > 2) return val;
}); 

let newarr = array.filter(function(val){
  if(val > 1) return true;
}); 

let newarr = array.reduce(function(acc, val){
  return acc * val;
} , 2); 

let newarr = array.find(function(val){
  return val === 5; console.log("found");
}); 

let students = ["daraksha", "gulafsha", "sadia", "aisha"];

let newarr = students.forEach(val => console.log(val) ); 

let array = [1, 2, 3, 4, 5];

let newarr = array.filter(val => val%2 === 0); 

let prices = [100, 250, 50, 89];

let newarr = prices.map(val => val * 18/100 + val );

let salary = [5000, 6000, 7000, 8000];

let newarr = salary.reduce((acc, val) => acc + val, 0); 

let arr = [89, 17, 9, 91, 56];

let newarr = arr.sort((a,b) => b-a);

let names = ["daraksha", "gulafsha"];

let [first,second] = names;

console.log(first);
console.log(second); 

let arr =  [78, 90, 67, 54,  23];
let newarr = [...arr, 90, 80];
console.log(newarr); 


// objects in javascript

let role = "admin";

let student = { name :"daraksha",
                age : 28,
                city : "lucknow",
                education : "betch",
                study: { school : "abc",
                         college : "xyz"
                },
                [role] : "Daraksha",
} 

let stud = { name : "daraksha",
            age : 90,
            city : "lucknow",
            education : "betch", 
            isenrolled : true,
            study : { school :"abc", 
                      intercollege : "abgg",
            }
} */

//Practice Problems
/*
function sayhello(){
  console.log("Hello Daraksha");
}   
sayhello(); 


function sum(a,b){ 
  return a+b;
}

let total = sum(8,10);



function greetings(name = "guest"){
  return `hello ${name} welcome to sha's institute of learning`;
}
let guest1 = greetings();


function sum(...num){
   let total = 0; 
  for(let i=0; i<num.length; i++){
    total = total + num[i];
  }
   console.log(total);
    
  let total = num.reduce(function(acc, val){
    return acc + val;
  }, 0);
  console.log(`The total is ${total}`);
}
 
sum(1,89, 78, 67, 56);



(function(){
  console.log("I run instantly");
})();

function outer(num){
  let num2 = 6 * num;
  function inner(){
    console.log(`The total is ${num2}`);
  }
  inner();
}

outer(6);

let arr = ["Apple", "Banana", "Grapes", "Mango"];
arr.push("Orange");
arr.shift();
console.log(arr);
arr.splice(1, 1, "Pineapple");
console.log(arr);
let newarr = arr.map(function(val){
  return val.toLowerCase();
});
console.log(newarr);

let arr = ["Apple", "Banana", "Grapes", "Mango"];
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}

 let obj = {
  Name :"Daraksha",
  age : 78,
  email : "gsya@gmail",
  salary : 95000
 }

 for(let key in obj){
  console.log(`${key.toUpperCase()} : ${obj[key]}`);
 }


setTimeout(function(){
  let name = "Daraksha";
  console.log(`I run after 3 seconds ${name}`);
}, 3000);


function first(variable){
  variable("Daraksha");
  variable("Gulafsha");
}

first(function(name){
  console.log(`Hello ${name} from callback function`);
})

let global = 0;
function impure(a){
  global++;
  return a + global;
}

console.log(impure(8));
console.log(impure(9));

function details(obj){
  const {name , age} = obj;
  console.log(name,age);
}

details({name: "Daraksha",age : 28});

let obj = {
  name :"daraksha",
  fnc1: function(){
    let fnc2 = () => {
    console.log(this);
  }
  }
}
obj.fnc1().fnc2();

let arr = [8, 9, 7, 8 ,6];
let arr2 = arr.map(function(val){
  return val * val;
});
console.log(arr2);

let arr = [8, 9, 7, 8 ,6];
let arr2 = arr.filter(function(val){
  return val % 2 === 0;
});
console.log(arr2);

let arr = [1000, 7000, 8900, 56000, 4500];
let arr2 = arr.reduce(function(acc,val){
  return acc + val;
}, 0);
console.log(arr2);

let arr = ["ali","om", "is", "daraksha", "alisha"];
let arr2 = arr.every(function(val){
  return val.length > 3;
});
console.log(arr2);

let user =  {
  name :"daraksha",
  age : 28,
  city : "lucknow",
}
Object.seal(user);
Object.freeze(user);
user.age = 29;
user.country = "India";
console.log(user);

let user =  {
  name :"daraksha",
  age : 28,
  address : {
   city : "lucknow",
  }
}

let {city} = user.address;
console.log(city);
*/





