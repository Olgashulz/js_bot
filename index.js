// 18 / 36
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.
// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию 
// по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, 
// значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в 
//переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 
//"You ordered <число> droids, you have <число> credits left".


//function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
// let message;
//   function Transaction(pricePerDroid, orderedQuantity, customerCredits) {
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits ){
//   message = "Insufficient funds!";
//   } else {
//  message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   } 
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
//  //возвращает "You ordered 5 droids, you have 8000 credits left"
// console.log(makeTransaction(1000, 3, 15000));
//  //возвращает "You ordered 3 droids, you have 12000 credits left"
// console.log(makeTransaction(5000, 10, 8000));
//  //возвращает "Insufficient funds!"
// console.log(makeTransaction(2000, 8, 10000));
//  //возвращает "Insufficient funds!"
// console.log(makeTransaction(500, 10, 5000));
//   //возвращает "You ordered 10 droids, you have 0 credits left"
// -----------------------------------------------------------------------------

// 18/37
// Функция checkPassword(password) получает пароль пользователя в
//  параметр password, проверяет его на совпадение с паролем администратора в переменной 
//  ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// 
// Если значение параметра password равно null, значит пользователь 
// отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, 
// в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message 
// записывается строка "Access denied, wrong password!".


// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//     if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// // возвращает "Access denied, wrong password!"
// console.log(checkPassword(null));
// // возвращает "Canceled by user!"
// console.log(checkPassword("polyhax"));
// // возвращает "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam"));
// // возвращает "Welcome!"
// -----------------------------------------------------------------------------

// 24/36
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if(totalSpent >= 50000){
//   discount = GOLD_DISCOUNT;     
//   } else if (totalSpent < 50000 && totalSpent >= 20000) {
//  discount = SILVER_DISCOUNT;
//   } else if (totalSpent < 20000 && totalSpent >= 5000) {
//       discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//     }   

//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));
// -----------------------------------------------------------------------------

// 25/36
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message = ordered > available ? "Not enough goods in stock!" : "The order is placed, the manager will contact you";

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));
// -----------------------------------------------------------------------------

// // 27/36
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//      case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// -----------------------------------------------------------------------------

// // 28/36
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor")); 
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax")); 
// console.log(checkPassword("jqueryismyjam"));
// -----------------------------------------------------------------------------

// 29/36
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
// switch (country) {
//   case "China":
//     message = `Shipping to ${country} will cost 100 credits`;
//     break;

//   case "Chile":
//     message = `Shipping to ${country} will cost 250 credits`;
//     break;

//   case "Australia":
//     message = `Shipping to ${country} will cost 170 credits`;
//     break;

//   case "Jamaica":
//     message = `Shipping to ${country} will cost 120 credits`;
//     break;

//   default:
//     message = "Sorry, there is no delivery to your country";
// }
//   // Change code above this line
//   return message;
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//   case 'China':
//     message: 'Shipping to China will cost 100 credits';
//       break;
//    case 'Chile':
//     message: 'Shipping to Chile will cost 250 credits';
//     break;
//   case 'Australia':
//     message: 'Shipping to Australia will cost 170 credits';
//     break;
//    case 'Jamaica':
//    message: 'Shipping to Jamaica will cost 120 credits';
//     break;
//    default:
//   message: 'Sorry, there is no delivery to your country';
//     }
//   return message;
// }
    
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));
// -----------------------------------------------------------------------------

// // 30/36
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// 31/36
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // 32/36
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);
//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));
// -----------------------------------------------------------------------------

// /36
// Функция formatMessage(message, maxLength) принимает 
// строку(параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength 
// символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//     let result;
//         console.log(message);
//         console.log(message.length);
//         console.log(maxLength);
//     result =
//       message.length <= maxLength
//         ? message
//         : message.slice(0, maxLength) + "...";


//   /// Change code above this line
//   return result;
// }


// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// -----------------------------------------------------------------------------

// /36/36
// Функция checkForSpam(message) принимает строку(параметр message),
// проверяет её на содержание запрещенных слов spam и sale, и возвращает
// результат проверки.Слова в строке параметра message могут быть в произвольном
// регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// function checkForSpam(message) {
//     let result;
//     result =
//       message.toLowerCase().includes("sale") ||
//       message.toLowerCase().includes("spam");

//   return result;
// }

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     messageToLowerCase = message.toLowerCase();

//     if ((messageToLowerCase.includes('sale'))
//         || (messageToLowerCase.includes('sale'))) {
//         result = true;
//     }
//     else {
//         result = false;
//     }
//     return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
// Блок 2
// 1/32
// Запиши условие в инструкции if так, чтобы функция работала правильно.
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// -----------------------------------------------------------------------------

// 2/32
// Функция checkPassword получает пароль пользователя в параметр password, 
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
 
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));// возвращает "Access denied, wrong password!"
// console.log(checkPassword("polyhax"));// возвращает "Access denied, wrong password!"
// console.log(checkPassword("jqueryismyjam"));// возвращает "Welcome!"
// -----------------------------------------------------------------------------

// 3/32
// Функция checkStorage проверяет возможность
// оформления заказа и возвращает сообщение о результате.О
// на принимает два параметра, значения которых будут задаваться
// во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя
// паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "Your order is empty!";
//     } if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     } 
//         return "The order is accepted, our manager will contact you";
//     }


// console.log(checkStorage(100, 50)); 
// // возвращает "The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); 
// // возвращает "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0)); 
// // возвращает "Your order is empty!"
// console.log(checkStorage(200, 20)); 
// // возвращает "The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); 
// // возвращает "Your order is too large, not enough goods in stock!"
// console.log(checkStorage(150, 0)); 
// // возвращает "Your order is empty!"
// -----------------------------------------------------------------------------

// 5/32
// Объяви три переменные и присвой каждой из них значение, 
// используя нотацию квадратных скобок.

// Имя переменной	Значение переменной
// firstElement	первый элемент массива
// secondElement	второй элемент массива
// lastElement	последний элемент массива

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];


// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
// -----------------------------------------------------------------------------

// 8/32
// Объяви две перемнные:
// Имя переменной	Ожидаемое значение
// lastElementIndex	Мндекс последнего элемента масcива
// fruits через длина_массива - 1
// lastElement	Значение последнего элемента массива

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);
// -----------------------------------------------------------------------------

// 9/32
// Напиши функцию getExtremeElements(array) которая принимает
// один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - первого
// и последнего элемента параметра array.

// function getExtremeElements(array) {
//     let howItemsRemoved = array.length -2;
//     array.splice(1, howItemsRemoved);
//     return array;
//     }

//     // вариант 2
//     function getExtremeElements(array) {
//         const newArray = [array[0], array[array.length - 1]];
//         return newArray;
//     }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// // // возвращает[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// // возвращает["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// // // возвращает["apple", "banana"]
// -----------------------------------------------------------------------------

// 10/32
// Дополни код функции splitMessage(message, delimeter) так, 
// чтобы она возвращала в переменной words результат разделения строки 
// message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//     let words;
//     words = message.split(delimeter);
//     return words;
//   }

// console.log(splitMessage("Mango hurries to the train", " ")); 
// // возвращает ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")); 
// // возвращает ["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_")); 
// // возвращает ["best", "for", "week"]
// -----------------------------------------------------------------------------

// 11/32
// Сервису гравировки украшений нужна функция,которая бы автоматически считала
// цену гравировки, в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord). 
// Эта функция принимает строку, состоящую из слов разделённых только 
// пробелами (параметр message) и цену гравировки одного слова 
// (параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки 
// всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//     let totalPrice;

//     totalPrice = message.split(" ").length * pricePerWord;
//     return totalPrice; 
//  }

//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
//  // возвращает 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// // возвращает 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// // возвращает 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20));
// // возвращает 80
// -----------------------------------------------------------------------------

// 12/32
// Дополни код функции makeStringFromArray(array, delimeter) так,
// чтобы она возвращала в переменной string результат соединения элементов массива
// array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//     let string;
//     string = array.join(delimeter);
//     return string;
//   }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// // возвращает "Mango hurries to the train"
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// //возвращает "Mango"
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));
// // возвращает "top_picks_for_you"
// -----------------------------------------------------------------------------

// 13/32
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр 
// title, и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены 
// только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире

// function slugify(title) {
//     let slug;
//     slug = (title.split(" ").join("-").toLowerCase());
//     return slug;
// }

// console.log(slugify("Arrays for begginers"));
// // возвращает "arrays-for-begginers"
// console.log(slugify("English for developer"));
// // возвращает "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript"));
// // возвращает "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
// // возвращает "how-to-become-a-junior-developer-in-two-weeks"
// -----------------------------------------------------------------------------

// 14/32
// Дополни код так, чтобы переменные содержали частичные копии исходного 
// массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);


// console.log(firstTwoEls);
// // это массив ["apple", "plum"]
// console.log(nonExtremeEls);
// // это массив ["plum", "pear", "orange"]
// console.log(lastThreeEls);
// // это массив ["pear", "orange", "banana"]
// -----------------------------------------------------------------------------

// 15/32
// Дополни код так, чтобы в переменной allClients 
// получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); 
// console.log(allClients);
// -----------------------------------------------------------------------------

// 16/32
// Напиши функцию makeArray(firstArray, secondArray, maxLength) 
// для создания нового массива со всеми элементами двух исходных 
// firstArray и secondArray. Параметр maxLength содержит максимально 
// допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, 
// функция должна вернуть копию массива длиной maxLength элементов. 
// В противном случае функция должна вернуть новый массив целиком.

// function makeArray(firstArray, secondArray, maxLength) {
//     let newArray = firstArray.concat(secondArray);
//     newArray =
//     newArray.length <= maxLength ? newArray : newArray.slice(0, maxLength);
//     return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// // // возвращает ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// // // возвращает ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// // // возвращает ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// // // возвращает ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// // // возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
// // // возвращает []
// -----------------------------------------------------------------------------

// 17/32
// Дополни цикл for так, чтобы он логировал все целые числа 
// в диапазоне от start до end включительно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
// -----------------------------------------------------------------------------

// 18/32
// Напиши функцию calculateTotal(number), которая принимает целое число 
// (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. 
// Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//     let sum = 0;
// for(let i = 1; i <= number; i += 1) {
//     sum = sum + i;    
// }
// return sum;
//    }

// console.log(calculateTotal(1));// возвращает 1
// console.log(calculateTotal(3));// возвращает 6
// console.log(calculateTotal(7));// возвращает 28
// console.log(calculateTotal(18));// возвращает 171
// console.log(calculateTotal(24));// возвращает 300
// console.log(calculateTotal(187));// со случайным числом возвращает правильное значение
// -----------------------------------------------------------------------------

//  19/32
// Дополни код цикла for так, чтобы он последовательно логировал
//  все элементы массива fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// -----------------------------------------------------------------------------

// 20/32
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр
// order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма 
// элементов должна сохраняться в переменной total, которая возвращается, как 
// результат работы функции.

// function calculateTotalPrice(order) {
//     let total = 0;
//     for(let i = 0; i < order.length; i +=1){
//         total = total + order[i];
//     }
//     return total;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает 1116
// -----------------------------------------------------------------------------

// 21/32
// Напиши функцию findLongestWord(string) которая принимает произвольную строку 
// состоящую только из слов разделённых пробелом (параметр string) и возвращает 
// самое длинное слово в этой строке.

// function findLongestWord(string) {
//     let newArray = string.split(" ");
//     let longestWord = newArray[0];
//     // console.log(longestWord);

//     for (let i = 1; i < newArray.length; i += 1){        
//         // console.log(newArray[i]);
//         // console.log(newArray[i].length);
//         // console.log(longestWord.length);    
//         newArray[i].length < longestWord.length ? longestWord : longestWord = newArray[i];
//         // console.log(longestWord);     
//     }
//     return longestWord;
//   }

// Вариант 2
//   function findLongestWord(string) {
// 	const arrayString = string.split(" ");
//     console.log(arrayString);
// 	let longestWord = arrayString[0];
// 	for (let i = 0; i < arrayString.length; i+=1) {
// 		if (longestWord.length < arrayString[i].length) {
// 			longestWord = arrayString[i];
// 		}
// 	}
// 	return longestWord;
// }

// function findLongestWord(string) {
//   const arrString = string.split(" ");
//   console.log(arrString);
//   const longestWord = arrString[0];
//   console.log(`Самое длинное слово дефолт: ${arrString[0]}`);

//   for (let i = 0; i < arrString.length; i += 1) {
//     console.log(`Проверяем слово: ${arrString[i]}`);

//     if (longestWord.length < arrString[i].length) {
//       console.log(longestWord.length);
//       console.log(`Это слово длинее?: ${arrString[i].length > longestWord.length}`);
//       longestWord = arrString[i];     
//     }
// }
// console.log(longestWord);
// }


//console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // возвращает jumped
// console.log(findLongestWord("Google do a roll"));
// // // возвращает Google
// console.log(findLongestWord("May the force be with you"));
// // возвращает force
// -----------------------------------------------------------------------------

// 22/32
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она 
// возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i++) {
//         numbers.push(i);        
//     }
//     return numbers;
//   }

//   console.log(createArrayOfNumbers(1, 3));
// // возвращает [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17));
// // возвращает [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34));
// // возвращает [29, 30, 31, 32, 33, 34]
// -----------------------------------------------------------------------------

// 23/32
// Напиши функцию filterArray(numbers, value), которая принимает массив 
// чисел (параметр numbers) и возвращает новый массив, в котором 
// будут только те элементы массива numbers, которые больше чем значение 
// параметра value (число).

// function filterArray(numbers, value) {
//     const newArray = [];
//     // console.log(value);
//     // console.log(numbers.length);
//     for (let i = 0; i < numbers.length; i += 1){        

//         // console.log(numbers[i]);
//         numbers[i] > value ? newArray.push(numbers[i]) : newArray;
//         // console.log( numbers[i] > value)
//         // console.log(newArray);

//     }
//     return newArray;

//  }

//  console.log(filterArray([1, 2, 3, 4, 5], 3));
//  // возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// // возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// // возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// // возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// // возвращает [24, 41, 76]
// -----------------------------------------------------------------------------

// 24/32
// Функция checkFruit(fruit) принимает строку с названием фрукта 
// (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//      return fruits.includes(fruit);
//   }

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
 
//     return fruits.includes(fruit);
//   }

// console.log(checkFruit("plum"));
// // возвращает true
// console.log(checkFruit("mandarin"));
// // возвращает false
// console.log(checkFruit("pear"));
// // возвращает true
// console.log(checkFruit("Pear"));
// // возвращает false
// console.log(checkFruit("apple"));
// // возвращает true
// -----------------------------------------------------------------------------

// 25/32
// Общими элементами массивов называют те элементы, которые 
// присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 
// 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 
// присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает 2
//  массива произвольной длины в параметры array1 и array2, и возвращает 
//  новый массив, состоящий из тех элементов, которые присутствуют в обоих 
//  исходных массивах.

// function getCommonElements(array1, array2) {
//     const repeatingNumbers = [];

//     for (let i = 0; i < array1.length ; i += 1) {
//         // console.log(array1);
//         // console.log(array1[i]);
//         // console.log(array2);
//         // console.log(array2.includes(array1[i]));
//         // console.log(repeatingNumbers);
//         array2.includes(array1[i]) ? repeatingNumbers.push(array1[i]) : repeatingNumbers;
//     }
//     return repeatingNumbers;    
//   }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
//   // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // возвращает [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// //возвращает []
// -----------------------------------------------------------------------------

// 26/32

// Выполни рефакторинг кода функции calculateTotalPrice(order) 
// заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
  
//     // Change code above this line
//     return total;
//   }
// -------------------------------

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const price of order){        
//         // console.log(order);
//         // console.log(price);
//     total += price;
//     //    console.log(total);
//     }      
//     return total;
//   }
  

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// // возвращает 138
// // console.log(calculateTotalPrice([164, 48, 291]));
// // // возвращает 503
// // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// // // возвращает 1116
// // console.log(calculateTotalPrice([]));
// // возвращает 0
// -----------------------------------------------------------------------------

// 27/32
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//     }
  
//     // Change code above this line
//     return total;
//   }
//----------------------------------------
// function calculateTotalPrice(order) {
//     let total = 0;   
    
//     for (const sum of order){
//         total += sum;
//     }
//     return total;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291]));
// // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// // возвращает 1116
// console.log(calculateTotalPrice([]));
// // возвращает 0
// -----------------------------------------------------------------------------

// 28/32
// Выполни рефакторинг функции filterArray(numbers, value) 
// заменив цикл for на for...of.
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       const number = numbers[i];
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Change code above this line
//   }
//----------------------------------------

// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     for (const number of numbers){
//         // if (number > value) {
//         //     filteredNumbers.push(number);
//         //   }
//           number > value ? filteredNumbers.push(number) : filteredNumbers;
//     }
//       return filteredNumbers;
//   }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// // возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// // возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// // возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// // возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// // возвращает [24, 41, 76]
// -----------------------------------------------------------------------------

// 26/32
// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// -----------------------------------------------------------------------------

// 27/32
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив 
// всех чётных чисел от start до end. Чётным считается число которое делится на 2 
// без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//     const evenNumbers = [];

//     for ( let i = start; i <= end; i +=1){
//         if(i % 2 === 0){
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
//    }

// console.log(getEvenNumbers(2, 5));
// // возвращает [2, 4]
// console.log(getEvenNumbers(3, 11));
// // возвращает [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12));
// // возвращает [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8));
// // возвращает [8]
// console.log(getEvenNumbers(7, 7));
// // возвращает []
// -----------------------------------------------------------------------------

// 30/32
// Дополни код так, чтобы в переменную number записывалось первое число от 
// start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// -----------------------------------------------------------------------------

// 31/32
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// function findNumber(start, end, divisor) {
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
//       }
//     }  
//   }

// console.log(findNumber(2, 6, 5)); // возвращает 5
// console.log(findNumber(8, 17, 3)); // возвращает 9
// console.log(findNumber(6, 9, 4)); // возвращает 8
// console.log(findNumber(16, 35, 7)); // возвращает 21
// -----------------------------------------------------------------------------

// 32/32
// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет, есть 
// ли в массиве array значение value, возвращая true если есть и false в 
// противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать 
// метод массив.includes(значение).

// function includes(array, value) {
//     // console.log(array);
//     let result = false;
//     for ( let i = 0; i < array.length; i +=1) {
 
//         // console.log(array[i]);
//         // console.log(value);
//         // console.log(array[i]===value);

//         if(array[i]===value){
//         return !result;
//         } 
//     }
//   return result;
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// //возвращает true
// console.log(includes([1, 2, 3, 4, 5], 17));
// //возвращает false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// // возвращает true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// // возвращает false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// // возвращает true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
// //возвращает false

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Блок 3
// 3/41
// Дополни код присвоив объявленным переменным выражения обращения к 
// соответствующим свойствам обьекта apartment.
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки

//   console.log(aptRating);
//   console.log(aptDescr);
//   console.log(aptPrice);
//   console.log(aptTags);
  // -----------------------------------------------------------------------------

//   4/41
// Дополни код присвоив объявленным переменным выражения 
// обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//       name: 'Генри',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com',
//     },
//   };
  
//   // Пиши код ниже этой строки
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
//   // Пиши код выше этой строки
  // -----------------------------------------------------------------------------

  // 5/41
// Дополни код присвоив объявленным переменным выражения обращения к 
// соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».
// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };


// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// -----------------------------------------------------------------------------
// 
// 6/41
// Дополни код обновив значения свойств объекта apartment:
// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на 'Генри Сибола';
// массив тегов в свойстве tags добавив в конец строку 'trusted'.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');
// -----------------------------------------------------------------------------

// 7/41
// Добавь объекту apartment несколько новых свойств:
// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными 
// свойствами;
// country - страна, строка 'Ямайка';
// city - город, строка 'Кингстон'.

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Ямайка',
//   city: 'Кингстон'
// } 
// -----------------------------------------------------------------------------
// 8/41
// Дополни код объявления объекта так, чтобы у него были свойства name,
// price, image и tags со значениями из переменных с аналогичными именами.
// Обязательно используй синтаксис коротких свойств.

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
// name,
// price,
// image,
// tags
// };
// -----------------------------------------------------------------------------

// 9/41
// Дополни код объявления объекта credentials так, чтобы в результате у него 
// были два свойства: email и password, имена которых хранятся в переменных emailInputName 
// и passwordInputName.
// Значением свойства email должна быть строка 'henry.carter@aptmail.com', 
// а значением свойства password - строка 'jqueryismyjam'.

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam'

// };

// credentials[emilInpuatName]='henry.carter@aptmail.com';

// console.log(credentials.email);
// console.log(credentials.password);
// -----------------------------------------------------------------------------

// 10/41
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, 
// а в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// console.log(apartment);

// for (key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// -----------------------------------------------------------------------------
// 11/41
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in 
// проверку на собственное свойство.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };

// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     console.log(apartment.hasOwnProperty(key));

//   keys.push(key);
//   values.push(apartment[key]);
  
//   }
  
// }
// console.log(keys);
// console.log(values);
// -----------------------------------------------------------------------------

// 12/41
// Напиши функцию countProps(object), которая считает и возвращает 
// количество собственных свойств объекта в параметре object. Используй 
// переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;

//   propCount = Object.keys(object).length;

//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// -----------------------------------------------------------------------------
// 13/41
// Перебери объект apartment используя метод Object.keys() и цикл for...of. 
// Запиши в переменную keys массив ключей собственных свойств объекта 
// apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// console.log(apartment);

// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// console.log(keys);

// for (key of keys){
//   values.push(apartment[key])
// }
// console.log(values);
// -----------------------------------------------------------------------------

// 14/41
// Выполни рефакторинг функции countProps(object) используя метод 
// Object.keys() и, возможно, цикл for...of.
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
// return propCount;
// }
// -------------------------------

// function countProps(object) {

//   let propCount = Object.keys(object).length;
//   return propCount;
// }

// console.log(countProps({}));
// // возвращает 0.
// console.log(countProps({ name: 'Mango', age: 2 }));
// // возвращает 2.
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
// // возвращает 3.
// -----------------------------------------------------------------------------
//  15/41
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех 
// значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys); //это массив ['descr', 'rating', 'price'].
// console.log(values); //это массив ['Просторная квартира в центре', 4, 2153].
// -----------------------------------------------------------------------------

// 16/41
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
// где имя свойства это имя сотрудника, а значение свойства это зарплата. 
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. 
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   let keys = Object.keys(salaries);
//   for (key of keys){
//     totalSalary += salaries[key];
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // возвращает 0.
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330.
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // возвращает 400.
// -----------------------------------------------------------------------------

// 17/41
// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения 
// свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (color of colors){ 
//   // console.log(color.hex);

//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }


// console.log(hexColors);
// //это массив ['#f44336', '#2196f3', '#4caf50', '#ffeb3b'].
// console.log(rgbColors);
// // это массив ['244,67,54', '33,150,243', '76,175,80', '255,235,59'].
// -----------------------------------------------------------------------------

// !!!!!!!!!!!!!!!!Репета перебор масива элементов!!!!!!!!!!!!!!!!!!!!!
//  const cart = {
//    items: [],

//    getItems(){
//      return this.items;
//    },

//    add(product){

//     for (const item of this.items) {

//       if ( item.name === product.name){
//         console.log(`Такой продукт уже есть`, product.name);
//         item.quantity += 1;
//         return;
//       }
//     }
//      const newProduct = {
//        ... product,
//        quantity: 1,
//      }

     

//      this.items.push(newProduct);
//    },

//   //  remove(productName){
//   //    for (let i = 0; i < this.items.length; i +=1 ) {
//   //      console.log(this.items[i]);

//   //      if(productName === this.items[i].name && this.items[i].quantity > 1){
//   //       console.log(`Нашли такой продукт`, productName);
//   //       this.items.splice(i, 1);
//   //     } else {
//   //       this.items[i].quantity -=1;
//   //    }
//   //  },

//   // //  Та же функция с десктруктуризацией
  
//   remove(productName){
//   // Деструктуризируем this.items
//       const { items } = this;

//     for (let i = 0; i < items.length; i +=1 ) {

//   // Деструктуризируем this.items[i].name
//       const { name } = items[i];
//   // Деструктуризируем this.items[i].quantity
//       const { quantity } = items[i];
      
       
//       if(productName === name && quantity > 1) {
//        console.log(`Нашли такой продукт`, productName);
//        items.splice( i , 1);
//      } else {

//       //quantity -= 1;
//       items[i].quantity -= 1;      
//       console.log(quantity);
//      }
//     }
//   },

//    clear(){
//      this.items = [];
//    },

//    countTotalPrice() {
//      console.log(this.items);
//        // Деструктуризируем this.items

//        const { items } = this;

//      let total = 0;

//      for (const item of items) {
//        total += item.price * item.quantity;       
//      }

//      // Можно деструктуризировать item.price
//     //  for (const { price, quantity } of items) {
//     //   total += price * quantity;       
//     // }
//      return total;
//    },

//    increaseQuantity(productName){

//     for (const item of this.items) {

//       if ( item.name === productName){
//         console.log(`Аргумент функции -`, productName);
//         console.log(`Такой продукт уже есть`, item.name);
//         item.quantity += 1;
//         return;
//       }
//     }

//    },
//    decreaseQuantity(productName){

//     for (const item of this.items) {

//       if ( item.name === productName){
//         console.log(`Аргумент функции -`, productName);
//         console.log(`Такой продукт уже есть`, item.name);
//         item.quantity -= 1;
//         return;
//       }
//     }
//    },
//  }



//  cart.add({name: "apple", price: 50});
//  cart.add({name: "lime", price: 60});
//  cart.add({name: "lime", price: 60});
//  cart.add({name: "grapes", price: 60});
//  cart.add({name: "tomato", price: 20});
//  cart.add({name: "lime", price: 60});
//  cart.add({name: "tomato", price: 20});

//  console.table(cart.getItems());

// cart.remove("lime");
// console.table(cart.getItems());

//  console.log(`Общая сумма`,cart.countTotalPrice());

//  cart.increaseQuantity("tomato");
//  console.table(`добавили количество томатов`, cart.getItems());

//  cart.decreaseQuantity("tomato");
//  console.table(`уменьшили количество томатов`, cart.getItems());

 
//  cart.clear();
//  console.log(`После очистки`,cart.getItems());

 
// -----------------------------------------------------------------------------
// 18/41
// Напиши функцию getProductPrice(productName) которая принимает один параметр 
// productName - название продукта. Функция ищет объект продукта с таким именем 
// (свойство name) в массиве products и возвращает его цену (свойство price). 
// Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//  for (const product of products) {
//    console.log(product);

//    if( product.name === productName){
//      return product.price;
//    }   
//  }
//  return null;
// }


// console.log(getProductPrice("Radar")); // возвращает 1300.
// console.log(getProductPrice("Grip")); // возвращает 1200.
// console.log(getProductPrice("Scanner")); // возвращает 2700.
// console.log(getProductPrice("Droid")); // возвращает 400.
// console.log(getProductPrice("Engine")); // возвращает null.
// -----------------------------------------------------------------------------

// 19/41
// Напиши функцию getAllPropValues(propName) которая принимает один 
// параметр propName - имя (ключ) свойства. Функция должна вернуть 
// массив всех значений свойства с таким именем из каждого объекта в массиве 
// products. 
// Если в объектах нет свойства с таким именем, функция должна 
// вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

  //!!!!!!!!!!!!!!!вариант Дикого

//   function getAllPropValues(propName) {
//   const arrProp = [];
//   for (const product of products) {
    
//     if (product[propName]) {
//       arrProp.push(product[propName]);
//     }
//   }
//   return arrProp;
// }

// function getAllPropValues(propName) {

//   let newArr = [];  

//   for (product of products) {

//     Object.keys(product).includes(propName) ? newArr.push(product[propName]) : newArr;
//   }
//   return newArr; 
// }

//console.log(getAllPropValues("name"));
// // возвращает ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));
// // // возвращает [4, 3, 7, 9]
// console.log(getAllPropValues("price"));
// // // возвращает [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));
// // возвращает []
// -----------------------------------------------------------------------------

// 20/14
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр 
// productName - название товара. Функция должна вернуть общую стоимость 
// (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       // console.log(totalPrice);
//     }    
//   }
//  return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster")); // возвращает 0
// console.log(calculateTotalPrice("Radar")); // возвращает 5200
// console.log(calculateTotalPrice("Droid")); // возвращает 2800
// console.log(calculateTotalPrice("Grip")); // возвращает 10800
// console.log(calculateTotalPrice("Scanner")); // возвращает 8100
// -----------------------------------------------------------------------------

// 21/41

// Пришел трёхдневный прогноз максимальных температур и мы считаем 
// среднюю температуру за три дня (meanTemperature). Замени объявления 
// переменных yesterday, today и tomorrow одной операцией деструктуризации 
// свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(yesterday);
// console.log(today);
// console.log(tomorrow);
// console.log(meanTemperature);
// -----------------------------------------------------------------------------


// 22/41
// В прогнозе максимальных температур также может быть необязательное
//  свойство icon - иконка погоды. Замени объявления переменных yesterday,
//   today, tomorrow и icon одной операцией деструктуризации свойств объекта 
//   highTemperatures. Задай значение по умолчанию для 
//   icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// -----------------------------------------------------------------------------


// 23/41
// Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией 
// деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для highIcon - 
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// // Change code below this line
// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// // Change code above this line

// //Решение
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(meanTemperature);
// -----------------------------------------------------------------------------

// 24/41
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась
// деструктуризация объекта..

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// -----------------------------------------------------------------------------

// 25/41
// Мы получили прогноз погоды на два дня, с минимальными и 
// максимальными температурами, а также необязательными иконками. 
// Замени объявления всех переменных одной операцией деструктуризации 
// свойств объекта forecast. Задай значение по умолчанию для иконок, 
// переменных todayIcon и tomorrowIcon - строку 
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };


// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow:
//   {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },

// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// -----------------------------------------------------------------------------

// 26/41
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на 
// два дня следующего формата:

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }

// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией 
// деструктуризации свойств объекта forecast.

// function calculateMeanTemperature(forecast) {
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

// // решение:
//   const { today: { low:todayLow, high:todayHigh },
//           tomorrow : { low:tomorrowLow, high:tomorrowHigh } 
//         } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
//   // возвращает 28.5
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));
// // возвращает 37
// -----------------------------------------------------------------------------

// 27/41

// В переменной scores хранится массив результатов тестирования. Используя 
// распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной 
// bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(... scores);
// const worstScore = Math.min(... scores);
// console.log(bestScore);
// console.log(worstScore);
// -----------------------------------------------------------------------------

// 28/41
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores 
// хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
// -----------------------------------------------------------------------------

// 29/41
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию 
// которые хранятся в переменной defaultSettings. Во время создания теста, все или 
// часть настроек можно переопределить, они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста, необходимо взять настройки по 
// умолчанию и поверх них применить переопределённые настройки. Дополни код так, 
// чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};
// console.log(finalSettings);
// -----------------------------------------------------------------------------

// 30/41
// Напиши функцию makeTask(data) которая принимает один параметр data - объект 
// со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя 
// напрямую параметр data. В новом объекте должно быть свойство completed, 
// значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а 
// остальные два, category и priority, могут отсутствовать. Тогда, в новом 
// объекте задачи, в свойствах category и priority должны быть значения по 
// умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

// const newTask = { completed, category, priority, ...data };
// return newTask;
// }

// console.log(makeTask({}));
// // возвращает { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// // возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// // возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// // возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" }));
// // возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// 31/41
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество 
// аргументов, считала и возвращала их сумму.


// function add(... args) {
//   console.log(arguments);
//   let sum = 0;
//  for (const arg of args) {
//    console.log(arg);
//    sum += arg;
//  }
//  return sum;
// }


// console.log(add(12, 4, 11, 48));
// возвращает 75
// console.log(add(32, 6, 13, 19, 8));
// // возвращает 78
// console.log(add(74, 11, 62, 46, 12, 36));
// возвращает 241
// -----------------------------------------------------------------------------

// 32/41
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело 
// функции addOverNum() так, чтобы она считала сумму только тех аргументов, 
// которые больше чем заданное число. Это число должно быть первым параметром функции.

// function addOverNum(maxValue, ...args) {
//   let total = 0;
//   for(arg of args){
//     maxValue < arg ? total += arg : total;
//   }
//   return total;
// }

// console.log(addOverNum(50, 15, 27)); // возвращает 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // возвращает 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // возвращает 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // возвращает 218
// ------------------------------------------------------------------------------------

// 33/41
// Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда 
// будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, в котором 
// будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому 
// что только они есть в массиве первого аргумента.


// function findMatches(array, ...args) {
//   const newArr = [...array];
//   const matches  = [];

//   for (const arg of args) {
//     console.log(arg);
//     console.log(newArr.includes(arg));
//     newArr.includes(arg) ? matches.push(arg): matches;
//   }
//   return matches;
// }

// function findMatches(...args) {
//   console.log(...args);
//   const matches = []; // Don't change this line
// //   for (const number of allNumbers) {
//   for (let i = 0; i < args.length; i+= 1 )
//   if (args[0].includes(args[i]))
//    {      matches.push(args[i]);
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));


//console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); 
// возвращает [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); 
// // возвращает [17, 89, 2]
//console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); 
// // возвращает [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); 
// возвращает []
// ------------------------------------------------------------------------------------

// 34/41
// Добавь объекту bookShelf ещё два метода, которые пока что будут 
// возвращать просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 
// "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя>
//  и <новое имя>это значения параметров oldName и newName соотвественно.

// const bookShelf = {

//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }
// };

//  console.log(bookShelf.getBooks()); // возвращает строку "Возвращаем все книги"
//  console.log(bookShelf.addBook("Haze")); // возвращает строку "Adding book Haze"
//  console.log(bookShelf.removeBook("Red sunset")); // возвращает строку "Deleting book Red sunset"
//  console.log(bookShelf.updateBook("Sands of dune", "Dune")); // возвращает строку "Updating book Sands of dune to Dune"
 // ------------------------------------------------------------------------------------

 // 35/41
//  Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName 
//  на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный 
//  элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // console.log(this.books.indexOf(oldName));
//     // console.log(this.books)
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;

//   },
// };

//console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); 
// значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

//console.log(bookShelf.updateBook("The last kingdom", "Dune")); 
//значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]
 // ------------------------------------------------------------------------------------
//  37/41
//  Добавь объекту atTheOldToad метод getPotions(), который просто 
// возвращает значение свойства potions.

// const atTheOldToad = {

//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   getPotions(){
//     return this.potions;
//   }

// };

// console.log(atTheOldToad.getPotions());
//------------------------------------------------------------------------------------

// 38/41

// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName
//  в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   addPotion(potionName) {
//     this.potions.push(potionName);
//     console.log(potionName);
//     console.log(this.potions)
//     return this.potions;
//   },
// };

//console.log(atTheOldToad.addPotion('Invisible'));
//в свойстве potions будет массив 
// ['Speed potion', 'Dragon breath', 'Stone skin', 'Invisible']

// console.log(atTheOldToad.addPotion('Зелье силы'));
//в свойстве potions будет массив 
// ['Speed potion', 'Dragon breath', 'Stone skin', 'Invisible', 'Power potion']
 
//------------------------------------------------------------------------------------
// 39/41

// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName 
// из массива зелий в свойстве potions.

//  const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     console.log(this.potions.indexOf(potionName));
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// // в свойстве potions будет массив ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion("Speed potion"));
// // в свойстве potions будет массив ["Stone skin"]

// 40/41
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял 
// название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // console.log(this.potions.indexOf(oldName));
//     // console.log(newName);
//     // console.log(this.potions.splice(1, 1, newName));
//     // console.log(this.potions);
//    this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//    return this.potions;
//   },

// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
//console.log(atTheOldToad.updatePotionName("Stone skin", "Invisible"));
// в свойстве potions будет массив `["Speed potion", "Polymorth", "Invisible"]``

// 41/41
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и 
// ценой, а в будущем может быть и другими характеристиками. Поэтому теперь 
// в свойстве potions будет храниться массив объектов со следующими свойствами.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с 
// массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.

// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив 
// в свойстве potions.

// removePotion(potionName) - удаляет объект зелья с именем potionName 
// из массива в свойстве potions.

// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья 
// с названием oldName на newName в массиве potions.

//const atTheOldToad = {
  // potions: [
  //   { name: 'Speed potion', price: 460 },
  //   { name: 'Dragon breath', price: 780 },
  //   { name: 'Stone skin', price: 520 },
  // ],
  // Change code below this line
  // getPotions() {
  //   return this.potions;
  // },

  // addPotion(potionName) {
  //   const { potions } = this;
  //   // console.log(potionName);
  //   // console.log(potions);

  //   for (const potion of potions) {
  //     console.log(potion.name)
  //     if (potion.name === potionName.name){
  //       console.log(potionName.name)
  //       // console.log(potion.name)
  //       return `Potion ${potionName.name} is already equipped!`;
  //     }      
  //   }
  //   potions.push(potionName);
  //   console.log(potions);    
  // },

  // removePotion(potionName) {
  //   const { potions } = this;
  //   let isNotInInventory = true;
     
  //   //console.log(potionName);

  //   for (let i = 0; i < potions.length; i += 1) {      
  //     // console.log(potions[i]);
  //     // console.log(i);      

  //     if (potions[i].name ===  potionName ){
  //       potions.splice(i, 1);
  //       isNotInInventory = false;
  //     } 
  //     //console.log(potions);
      
  //   }

  //   if (isNotInInventory === true){
  //     return `Potion ${potionName} is not in inventory!`;
  //          }
  // },


  //////// Анино решение!!!!!!!!!!!!!!!!!!!!!!!!

  // removePotion(potionName) {
  //   const { potions } = this;
  //   for (let i = 0; i < potions.length; i += 1) {
  //     if (potions[i].name === potionName) {
  //       potions.splice(i, 1);
  //       return potions;
  //     }
  //   }
  //   return `Potion ${potionName} is not in inventory!`;
  // }, 
  // ///////////////////////////////////////////////


  // updatePotionName(oldName, newName) {
  //   const { potions } = this;
  //   let isNotInInventory = true;

  //   for (let i =0; i < potions.length; i +=1){

  //     if (potions[i].name === oldName){
  //       potions[i].name = newName;
  //       isNotInInventory = false;
  //     }
  //     console.log(potions);
  //   }

  //   if (isNotInInventory === true){
  //     return `Potion ${newName} is not in inventory!`;
  //          }
  // },


    //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },

//};


//console.log(atTheOldToad.getPotions());
// для исходного объекта возвращает 
//[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

//console.log(atTheOldToad.addPotion({ name: "Invisible", price: 620 }))
// //в массиве potions последним элементом будет этот объект
//console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }))
// //в массиве potions последним элементом будет этот объект

//console.log(atTheOldToad.removePotion("Dragon breath"));
// //в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
//console.log(atTheOldToad.removePotion("Speed potion"));
// //в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

//console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// //в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
//console.log(atTheOldToad.updatePotionName("tone skin", "Invulnerability potion"));
// //в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////// Модуль 4 /////////////////////////////////////////////

// 1/10
// Дополни код так, чтобы в переменной result был результат выполнения 
// функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// Значение переменной result это строка 'Ваша пицца готовится, ожидайте.'.
// Значение переменной pointer это ссылка на функцию makePizza.
//------------------------------------------------------------------------------------

// 2/10
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром 
// (параметр callback) колбэк-функцию и возвращала ее вызов. Функция 
// deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом 
// имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza));
// // возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// console.log(makeMessage('Ультрасыр', deliverPizza));
// // возвращает строку 'Доставляем пиццу Ультрасыр.'.
//------------------------------------------------------------------------------------

//  3/10
// Дополни второй вызов функции makePizza(pizzaName, callback), передав 
// вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая 
// логирует строку 'Едим пиццу <имя пиццы>'.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });


// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`);  
// });
//------------------------------------------------------------------------------------

// 4/10
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг 
// метода order так, чтобы он принимал вторым и третим параметрами два колбэка 
// onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, 
// метод order должен возвращать результат вызова колбэка onError, передавая 
// ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод 
// order должен возвращать результат вызова колбэка onSuccess, передавая ему 
// аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. 
// Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     console.log(this.pizzas.includes(pizzaName));
//     return this.pizzas.includes(pizzaName) 
//     ? makePizza(pizzaName)
//     : onOrderError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// // возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// // возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// // возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
// // возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.
//------------------------------------------------------------------------------------

// 5/10
// Методы getAuthors и addAuthor это функции, которые вызываются в контексте 
// объекта bookShelf. Во время их выполнения в this записывается ссылка на объект 
// bookShelf и мы можем обратиться к его свойствам и методам.

// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в 
// местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],

//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
// };

// console.log(pizzaPalace.order('Аль Копчино'));
// // возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
// console.log(pizzaPalace.order('Четыре нарезона'));
// // возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.
// console.log(pizzaPalace.order('Биг майк'));
// // возвращает строку 'В ассортименте нет пиццы с названием «Биг майк».'.
// console.log(pizzaPalace.order('Венская'));
// // возвращает строку 'В ассортименте нет пиццы с названием «Венская».'.
// // Метод checkPizza объекта pizzaPalace использует this.
// // Метод order объекта pizzaPalace использует this.
//------------------------------------------------------------------------------------


// 6/10
// Перед увольнением разработчик сломал исходный код управления аккаунтами 
// пользователей нашего сервиса доставки еды. Выполни рефакторинг методов 
// объекта customer, расставив отсутствующие this при обращении к свойствам 
// объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, 
// в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],

//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
//------------------------------------------------------------------------------------


// 7/10
// Сервису приготовления и доставки еды требуется функция генерации сообщений о 
// статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала 
// строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' 
// Позиция это значение параметра position - позиция элемента в массиве 
// (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте 
// которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе 
// заказов из массива orders с помощью цикла for.

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// function composeMessage(position) {
//   // console.log(this.dish)
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
  
//   }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1){
//   // console.log(orders[i]);
//   messages.push(composeMessage.call(orders[i], i+1));
// }

// console.log(messages);


// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом call внутри цикла for.
// Объявлена переменная messages.
// Значение переменной messages это массив 
// ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 
// 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 
// 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].
//------------------------------------------------------------------------------------


//8/10
// Выполни рефакторинг кода так, чтобы функция composeMessage(position)
//  вызывалась методом apply.

//  const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

// console.log(messages);
//------------------------------------------------------------------------------------


//9/10
// Функция composeMessage(customerName) создаёт приветственные сообщения для 
// ресторанов. Дополни код так, чтобы в переменных pizzaPalaceComposer и 
// burgerShackComposer были её копии с привязанным контекстом к соответствующим
//  объектам.

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');
//------------------------------------------------------------------------------------


// 10/10
// Сервису рассылки электронной почты необходимо добавить логирование действий для 
// сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и 
// действие которое нужно выполнить - ссылку на метод объекта service. Сбор
//  статистики симулируется логированием строки. Разберись и дополни код так, 
//  чтобы он работал верно.

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Модуль 5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 1/19

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };

// const child = Object.create(parent);

// child.name = 'Jason';
// child.age = 27;


// console.log(parent.hasOwnProperty('surname')); // возвращает true.
// console.log(parent.hasOwnProperty('heritage')); // возвращает true.
// console.log(child.hasOwnProperty('name')); // возвращает true.
// console.log(child.name);// возвращает 'Jason'.
// console.log(child.hasOwnProperty('age')); // возвращает true.
// console.log(child.age);// возвращает 27.
// console.log(child.hasOwnProperty('surname')); // возвращает false.
// console.log(child.surname);// возвращает 'Moore'.
// console.log(child.hasOwnProperty('heritage')); // возвращает false.
// console.log(child.heritage);// возвращает 'Irish'.
// console.log(parent.isPrototypeOf(child)); // возвращает true.
//------------------------------------------------------------------------------------

// 2/19

// Измени код, построив цепочку прототипов так, чтобы объект ancestor был 
// прототипом для parent, а тот в свою очередь был прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.isPrototypeOf(child)); // возвращает true.
// console.log(parent.surname); // возвращает 'Moore'.
// console.log(parent.heritage); // возвращает 'Irish'.
// console.log(parent.hasOwnProperty('surname')); // возвращает true.
// console.log(parent.hasOwnProperty('heritage')); // возвращает false.
// console.log(ancestor.isPrototypeOf(parent)); // возвращает true.
// console.log(child.hasOwnProperty('surname')); // возвращает false.
// console.log(child.surname); // возвращает 'Moore'.
// console.log(child.heritage); // возвращает 'Irish'.
// console.log(child.hasOwnProperty('heritage')); // возвращает false.
// console.log(ancestor.heritage); // возвращает 'Irish'.
// console.log(ancestor.hasOwnProperty('surname')); // возвращает true.
// console.log(ancestor.hasOwnProperty('heritage')); // возвращает true.
// console.log(ancestor.surname); // возвращает 'Dawson'.

//------------------------------------------------------------------------------------
// 3/19
// Задание
// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand, 
// model и price, значениями которых должны быть переданные аргументы во 
// время её вызова с оператором new.