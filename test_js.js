// 1. Что будет выведено в консоль?
// const x = 1;
// const x = 'hello';
// console.log(x); 
// Uncaught SyntaxError: Identifier 'x' has already been declared


// let x = 1;
// x = 'hello';
// console.log(x); 
///////////////////////////////////////////////////////////////////////////
// 2. Что будет выведено в консоль?
// let b = 20;

// if (true) {
//   console.log(b);
//   let b = 10;
// }
//Uncaught ReferenceError: Cannot access 'b' before initialization

// let b = 20;

// if (true) {
//  let b = 10;
//  console.log(b);
// }
//////////////////////////////////////////////////////////////////////////////
//3. Что будет выведено в консоль?
// const x;
// x = 1;
// console.log(x);
//Missing initializer in const declaration

// let x;
// x = 1;
// console.log(x);
//////////////////////////////////////////////////////////////////////////////
//4. Что будет выведено в консоль?
// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
//   let sum = amount;
// }

// console.log(sum);
//Uncaught ReferenceError: sum is not defined

// const MAX = 10;
// let amount = 0;
// let sum;

// while (amount++ < MAX) {
//   sum = amount;
// }

// console.log(sum);
//////////////////////////////////////////////////////////////////////////////
// const person = {
//     firstName: 'bob',
//     showName() {
//       console.log(this.firstName);
//     },
//   };
  
//   const foo = function(callback) {
//     callback();
//   };
  
//   foo(person.showName);
//undefined

// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = person;
// foo.showName();
//////////////////////////////////////////////////////////////////////////////
// const person = {
//     age: 10,
//     setAge(newAge) {
//       this.age = newAge;
//     },
//     refreshAge(userId) {
//       fetchAgeFromDb(function(newAge) {
//         this.setAge(newAge);
//       });
//     },
//   };
  
//   function fetchAgeFromDb(cb) {
//    cb(20);
//   }
  
//   person.refreshAge();
//   console.log(person.age);
  //Uncaught TypeError: this.setAge is not a function
//////////////////////////////////////////////////////////////////////////////
// const person = {
//     age: 10,
//     setAge(newAge) {
//       this.age = newAge;
//     },
//     refreshAge(userId) {
//       fetchAgeFromDb(function(newAge) {
//         this.setAge(newAge);
//       });
//     },
//   };
//   person.setAge(11);
//   console.log(person.age);
    
//////////////////////////////////////////////////////////////////////////////
// 7. Что будет выведено в консоль?
// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);
//20
//////////////////////////////////////////////////////////////////////////////
//. Что будет выведено в консоль?
const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
const answer = sum(1, 5, 20, 10);
console.log(answer);
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const fn = arr => arr.map(el => {
    const item = document.createElement('div');
    item.textContent = el;
    console.log(item); 
    return item;
   });

   let nevArr = fn(['html', 'css', 'js', 'react']);
   console.log(nevArr)
   console.log(typeof nevArr[0])
   console.log(false === null)
   const b = 2
   const c = 1
   const a = b || c ? b + c : b - c;
   console.log(a)
  
  //console.log(fn(['html', 'css', 'js', 'react']));
 
//   const item = document.createElement('div');
//   item.textContent ='css';
  //console.log(item)