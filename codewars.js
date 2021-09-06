
// Write a function called repeatStr which repeats the given string string 
// exactly n times.

// Напишите функцию с именем repeatStr, которая повторяет заданную строку ровно n раз.

// function repeatStr (n, s) {
//     let string = "";

//     for (let i = 1; i <= n; i += 1){
//       string += s;
//     }

//     return string;
//   }

// console.log(repeatStr(3, "*")); // "***");
// console.log(repeatStr(5, "#")); // "#####");
// console.log(repeatStr(2, "ha ")); // "ha ha ");

// ------------------------------------------------------------------------------------

// Simple, remove the spaces from the string, then return the resultant string.

// Просто удалите пробелы из строки, а затем верните результирующую строку.

// function noSpace(x){
// console.log(x);
// // const arrayOfStrings = x.split(' ');
// // console.log(arrayOfStrings);

// // x = arrayOfStrings.join('');
// // console.log(x);
// //return x;

// return x.split(' ').join('');

// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')) // '8j8mBliB8gimjB8B8jlB');
// console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')) // '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
// console.log(noSpace('8aaaaa dddd r     ')) // '8aaaaaddddr'); 

// ------------------------------------------------------------------------------------
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot 
// contain anything but exactly 4 digits or exactly 6 digits.

// function validatePIN (pin) {

//     let result = false;
//     if(pin.length === 6 || 
//         pin.length === 4){
//             // console.log(`длинна пароля`, pin.length);
//             // console.log(pin > 0 || Number.isInteger(+pin));
//             // console.log(`includes`, !pin.includes("."));
//          result = pin > 0 && Number.isInteger(+pin) && !pin.includes(".") && !isNaN(pin); 
          
//   }

//   return result;
  
// }

//console.log(validatePIN("1")); //false, "Wrong output for '1'")
// console.log(validatePIN("12")); //false, "Wrong output for '12'")
// console.log(validatePIN("123")); //false, "Wrong output for '123'")
// console.log(validatePIN("12345")); //false, "Wrong output for '12345'")
// console.log(validatePIN("1234567")); //false, "Wrong output for '1234567'")
// console.log(validatePIN("-1234")); //false, "Wrong output for '-1234'")
// console.log(validatePIN("1.234")); //false, "Wrong output for '1.234'")
// console.log(validatePIN("-1.234")); //false, "Wrong output for '-1.234'")
// console.log(validatePIN("a234"));//false, "Wrong output for 'a234'")
// console.log(validatePIN(".234"));//false, "Wrong output for '.234'")
  
// console.log(validatePIN("1234"));//true, "Wrong output for '1234'");
// console.log(validatePIN("0000"));//true, "Wrong output for '0000'");
// console.log(validatePIN("1111"));//true, "Wrong output for '1111'");
// console.log(validatePIN("123456"));//true, "Wrong output for '123456'");
// console.log(validatePIN("098765"));//true, "Wrong output for '098765'");
// console.log(validatePIN("000000"));//true, "Wrong output for '000000'");
// console.log(validatePIN("123456"));//true, "Wrong output for '123456'");
// console.log(validatePIN("090909"));//true, "Wrong output for '090909'");

// ------------------------------------------------------------------------------------
// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row
//  of this triangle (starting at index 1) e.g.:

// Учитывая треугольник последовательных нечетных чисел:
// Вычислите сумму чисел в n-й строке этого треугольника 
// (начиная с индекса 1), например:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29


// function rowSumOddNumbers(n) {
    
//     let previousNumber = 1;    
//     let cycleLength = 0;
//     let sum = 0;    
    
//     if(n === 1) {
//         return sum =1;
//     }

//     // длинна цикла

//     for (let index = 1; index <= n - 1; index += 1) {
//         cycleLength += index;
//     }
//         console.log(`Длинна цикла:`, cycleLength);

//     // последнее число в предыдущей строке
//     for (let index = 1; index < cycleLength; index += 1) {   

//         previousNumber += 2;
//     }
//     console.log(`previousNamber:`, previousNumber);

//     // считаем сумму
//     let startNumber = previousNumber;

//     for (let index = 1; index <= n; index += 1) { 
        
//         startNumber += 2;        
//         let number = startNumber;
//         //console.log(`startNumber`,startNumber);
//         //console.log(`число:`,number);

//         sum +=  number;
//         //console.log(`сумма:`,sum); 
//     }

//     return sum;
// }

// console.log(rowSumOddNumbers(1)); // 1);
// console.log(rowSumOddNumbers(42)); // 74088);
// ------------------------------------------------------------------------------------
// Implement a function which convert the given boolean value into its string representation.
// Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление.

// function booleanToString(b){
//     return String(b)
//   }

//   console.log(booleanToString(true));
//   console.log(booleanToString(false));
// ------------------------------------------------------------------------------------
// Make a function that will return a greeting statement that uses an input; your program should return, 
// "Hello, <name> how are you doing today?".

// Создайте функцию, которая будет возвращать 
// приветствие, использующее ввод; ваша программа должна вернуть: 
// «Привет, <имя>, как у тебя дела сегодня?».

// function greet(name){
//     return `Hello, ${name}, how are you doing today?`
//   }

//   console.log(greet("Ryan"));
// ------------------------------------------------------------------------------------
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

// Напишите функцию, которая вычисляет среднее значение чисел в данном списке.
// Примечание: пустые массивы должны возвращать 0.

// function find_average(array) {
//     //let averageNumber;
//     let sum = 0;
//     if (array.length === 0) {
//         return 0;
//     }

//     for (let i = 0; i< array.length; i+=1) {
//         //console.log(array[i]);
//         sum += array[i];
//     }
//     //console.log(sum);
//     return sum / array.length;
    
//   }

// console.log(find_average([1,1,1])); // 1);
// console.log(find_average([1,2,3])); // 2);
// console.log(find_average([1,2,3,4])); // 2.5);
// ------------------------------------------------------------------------------------

// Complete the solution so that it reverses the string passed into it.
// Завершите решение так, чтобы оно перевернуло переданную в него строку.

// function solution(str){
//     let newArray = [];
//     if(str.length === 0){
//         return str;
//     }
//       for ( let i = str.length-1; i>=0; i -=1){
//       console.log(i);
//       console.log(str[i]);
//      newArray.push(str[i]);
//   }
//   return newArray.join('');
// }

// // console.log(solution('world')); //'dlrow';
// // console.log(solution('hello')); //'olleh'
// console.log(solution('')); // '');
// console.log(solution('h')) // 'h');
// ------------------------------------------------------------------------------------


// Find Maximum and Minimum Values of a List
// Your task is to make two functions, max and min 
// (maximum and minimum in PHP and Python, maxi and mini 
//     in Julia) that take a(n) array/vector of integers 
//     list as input and outputs, respectively, the largest and 
//     lowest number in that array/vector.


// Результаты перевода
// Найти максимальное и минимальное значения списка
// Ваша задача - создать две функции, max и min (максимальное и 
//     минимальное в PHP и Python, maxi и mini в Julia), которые 
//     принимают (n) массив / вектор списка целых чисел в качестве 
//     входных и выходных данных, соответственно, наибольшее и 
//     наименьшее число. в этом массиве / векторе. 

// var min = function(list){
//     let min = 0;

//     for (let i = 0; i < list.length; i += 1){
//         min > list[i] ? min = list[i] : min;
//     }
    
//     return min;
// }

// var max = function(list){
//     let max = 0;
//     for (let i = 0; i < list.length; i += 1){
//         max < list[i] ? max = list[i] : max;
//     }
    
//     return max;
// }

// console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110);
// console.log(min([42, 54, 65, 87, 0])); // 0);
// console.log(max([4,6,2,1,9,63,-134,566])); // 566);
// console.log(max([5])); // 5);
// ------------------------------------------------------------------------------------
// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуй найти!

// Гарантируется, что массив содержит минимум 3 числа.
// Тесты содержат очень большие массивы, так что подумайте о производительности.

// function findUniq (array) {

//     for ( let i = 0; i < array.length; i+=1){

//         console.log(array[i]);
//         console.log(array[i+1])
        
//         console.log(array[i] !== array[i + 1])

//         if (array[i] !== array[i + 1] && array [ i + 1 ] !== array[i + 2]){
//             return array[i + 1];
//         } 
//     }

//    return (array[0]);    
// }

// console.log(findUniq([ 10, 2, 2, 2 ])); //10
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // 2);
// console.log(findUniq([ 3, 10, 3, 3, 3 ])) // 10);
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ])) // 0.55
// ------------------------------------------------------------------------------------
// Задача 
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
// var stringToNumber = function(str){
//     return +str;
//   }

//   console.log(stringToNumber("1234")); //1234)
//   console.log(stringToNumber("605")); // 605)
//   console.log(stringToNumber("1405")); //1405)
//   console.log(stringToNumber("-7")); //  -7)
// ------------------------------------------------------------------------------------
// 
// Given an array of integers as strings and numbers, return the sum of the 
// array values as if all were numbers.
// Return your answer as a number.

// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений 
// массива, как если бы все они были числами.
// Верните свой ответ в виде числа.

// function sumMix(x){
//     let sum =0;
//     for (const el of x) {
//         console.log(el);
//         console.log(Number(el))
//       sum += Number(el)
//     }
//     return sum;
// }

// console.log(sumMix([9, 3, '7', '3'])); // 22);
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])); // 42); 
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])); // 41);
// ------------------------------------------------------------------------------------
// Задача 8
//Jaden Smith, the son of Will Smith, is the star of films such as 
// The Karate Kid (2010) and After Earth (2013). Jaden is also known 
// for some of his philosophy that he delivers via Twitter. When writing 
// on Twitter, he is known for almost always capitalizing every word. For 
// simplicity, you'll have to capitalize each word, check out how 
// contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by 
// Jaden Smith. The strings are actual quotes from Jaden Smith, but 
// they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Джейден Смит, сын Уилла Смита, является звездой таких фильмов, 
// как The Karate Kid (2010) и After Earth (2013). Джейден также известен 
// своей философией, которую он распространяет через Twitter. Когда он 
// пишет в Твиттере, он известен тем, что почти всегда использует каждое 
// слово с большой буквы. Для простоты вам придется писать каждое слово 
// с заглавной буквы, посмотрите, как ожидается сокращение в приведенном 
// ниже примере.

// Ваша задача - преобразовать строки в то, как они были бы написаны 
// Джейденом Смитом. Строки - это настоящие цитаты Джейдена Смита, но 
// они не пишутся с заглавной буквы так, как он их изначально набирал.

// var str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function (str) {
//     console.log(str)
    
//     let newArr =str.split(' ');
//     console.log(newArr);

//     // console.log(typeof str[0])
//     // console.log(str[0]);
//     // console.log(newArr[0][0])
//     // console.log(newArr[1][0])

//     for ( let i =0; i < newArr.length; i +=1){
//         console.log(newArr[i][0].toUpperCase());
//         console.log(newArr[i].slice(1));
//         console.log(newArr[i][0].toUpperCase() + newArr[i].slice(1))
//         newArr[i] = newArr[i][0].toUpperCase() + newArr[i].slice(1)
//     }
//     console.log(newArr);
//     str = newArr.join(' ');
//     return str;
//   };

//   console.log(String.prototype.toJadenCase(str));
// ------------------------------------------------------------------------------------
// Задача 9
// Deoxyribonucleic acid, DNA is the primary information storage molecule 
// in biological systems. It is composed of four nucleic acid bases Guanine 
// ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
// RNA differs slightly from DNA its chemical structure and contains no 
// Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.


// Дезоксирибонуклеиновая кислота, ДНК является основной молекулой 
// хранения информации в биологических системах. Он состоит из четырех 
// оснований нуклеиновых кислот: гуанина («G»), цитозина («C»), аденина («A») 
// и тимина («T»).

// Рибонуклеиновая кислота, РНК, является основной молекулой-посредником в 
// клетках. РНК немного отличается от ДНК своей химической структурой и не 
// содержит тимина. В РНК тимин заменен другой нуклеиновой кислотой урацилом 
// ('U').
// Создайте функцию, которая переводит заданную строку ДНК в

// For example:
// "GCAT"  =>  "GCAU"

// function DNAtoRNA(dna) {
//     let newArr = dna.split('')
//     console.log(newArr);

  
//     for( let i = 0; i < newArr.length; i+=1){
//         console.log(newArr[i]);
//         if (newArr[i] === "T"){
//         console.log(newArr[i] === "T");        
//         console.log(newArr.splice(i, 1 , "U"))
//         newArr.splice(i, 1 , "U");
//         console.log(newArr);
//         }
  
//     }
//    return newArr.join('');
//   }

// //console.log(DNAtoRNA("TTTT"));// "UUUU")
// //console.log(DNAtoRNA("GCAT"));// "GCAU")
// // console.log(DNAtoRNA("GACCGCCGCC"));// "GACCGCCGCC
// ------------------------------------------------------------------------------------
// Задача 10
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string 
// in Expanded Form. For example:

// Вам будет предоставлен номер, и вам нужно будет вернуть его в виде 
// строки в развернутой форме. Например:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// function expandedForm(num) {

//     let digits = [];
//     let dozens = 1;

//     while (num) {      
//       console.log(dozens)
//       console.log((num % 10))

//       if ((num % 10) !== 0){
//       digits.unshift((num % 10)*dozens);
//     }

//       num = Math.floor(num/10);
//       dozens = dozens *10;
//       console.log(dozens)
//     }

//     return digits.join(' + ');
//   }
  

// console.log(expandedForm(12)); // '10 + 2');
// console.log(expandedForm(42)); // '40 + 2');
// console.log(expandedForm(70304)); // '70000 + 300 + 4');
// ------------------------------------------------------------------------------------

