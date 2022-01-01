/*1. variable -let,const ,var */
/*2. arrow function
const arrowFun = () => {
  console.log("hello");
};*/
/*3. Export & import (Modules)*/
/*Class */
/*
class male {
  gender = "Male";

  printGender() {
    console.log(this.gender);
  }
}
class person extends male {
  name = "shubham";

  printName() {
    console.log(this.name);
  }
}

const per = new person();
per.printName();
per.printGender();
*/

/* 4.Spread operator(...) */
//used to split up an array or object properties
//const newArray =[...oldArray,1,2];
//const newobj = {...oldObj, new: 2};

/*const num = [1, 2, 4, 3, 5, 6, 8];
const newNum = [...num, 10, 12];
console.log(newNum);
const obj = {
  name: "shubham",
};
const newObj = {
  ...obj,
  gf: "anushka",
};
console.log(newObj);
*/

/* 5. Rest operator(...) */
//used to merge a list of function arguments into array
/*function restOp(...args){
    return args.sort()
  }
*/
/*const fun = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(fun(1, 2, 3));
*/
/*6. destructuring*/
//Easily extract array elemets or objects properties and store them in variables
/*const num = [1, 2, 3];
[num1, num2] = num;
console.log(num1, num2);
*/
/*refrence by value and by address*/
/*const person = {
  name: "shubham",
};
const man = { ...person };
person.name = "shubham kumar";
console.log(man);
*/

/*Array functions*/
const array = [1, 2, 3];
const double = array.map((num) => {
  return num * 2;
});
console.log(array);
console.log(double);
