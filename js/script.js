//Задача №1 дз модуль 1

// const name = "«Генератор защитного поля»"; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

// ***** Задача №2 модуль 1

// Использование тернарного оператора
// Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

// Есть переменные

// stock = 100. Это количество товаров на складе.
// invoice. Эта переменная - количество единиц товара в заказе. Переменной присваиваются только целые положительные числа (проверку на целые положительные числа делать не нужно). Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е. меньше чем stock, 100, т.е. равно stock и 150 - больше чем stock.
// message. Это переменная для текста с ответом на запрос о покупке. Возможно два значения:
// "На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
// "Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.

// const invoice = 150;
// const stock = 100;

// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';

// console.log(message);

// *****Задача №3 Модуль 1

// Использование if else
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword (данные, которые может передать пользователь). Возможны такие варианты:

// const ADMIN_PASSWORD = 'jqueryismyjam'. При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
// null. При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
// Любая строка, кроме ADMIN_PASSWORD. При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
// Используйте if else if else для написания скрипта.

// * Решение *
// const userPassword = prompt('Пожалуйста введите пароль!');

// const ADMIN_PASSWORD = 'jqueryismyjam';

// // const normalizedPassword = userPassword.toLowerCase();

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
//   console.log(message);
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// } else if (userPassword !== ADMIN_PASSWORD) {
//   message = ACCESS_DENIED;
//   console.log(message);
// }

// console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'

// ***** Задача с использованием шаблонной строки

// const firstName = "Anna";
// const lastName = "Sokolova";
// const hotelName = "Mercyri";
// const nomer = 25;
// const type = "Luxe";
// const message = `${firstName} ${lastName} поселяется в гостиницу ${hotelName} в номер ${nomer} ${type}.`;

// console.log(message);

// ***** Задача с выводом пароля пользователя в нижнем регистре

// const password = "qwerty";
// const userInput = prompt("Пожалуйста введите пароль!");
// const normalizedInput = userInput.toLowerCase();

// console.log("Пароль пользователя: ", userInput);
// console.log("normalizedInput: ", normalizedInput);

// console.log(password === normalizedInput);

// ***** Логический оператор И (&&)- выводит либо первый false, либо последний правый результат сравнения

// const number = 50;
// const isInRange = number > 10 && number < 60;

// console.log(`Число ${number} попададет в отрезок от 10 до 60?`, isInRange);

// ***** Логический оператор ИЛИ (||)- выводит первый результат true или последний результат сравнения

//(результат в примере будет false)
// const number = 15;
// const isInResult = number < 10 || number > 30;

// console.log(`Число ${number} попададет в отрезок от 10 до 30?`, isInResult); //false

// (результат в примере будет первое сравнение и оно равно true)
// const number = 5;
// const isInResult = number < 10 || number > 30;

// console.log(`Число ${number} попададет в отрезок от 10 до 30?`, isInResult); //true

// ***** Задача - Возможность начать чат онлайн и не dnd(режим Не беспокоить)

// Условие - если человек мой друг, он онлайн и он НЕ в режиме dnd, - тогда можно открыть с ним чат

// const isOnline = true;
// const isMyFriend = true;
// const isDnd = false;

// const OpenChat = isOnline && isMyFriend && !isDnd;

// console.log('OpenChat: ', OpenChat);

// *****   if ... else Задача на проверку баланса на счету покупателя

// let balance = 100;
// const payment = 2000;

// console.log(
//   `Общая стоимость покупки ${payment}. Проверяем кол-во средств на счету`,
// );

// if (balance >= payment) {
//   //если б денег на счету было б не достаточно, то эта операция не проводилась бы, и не отобразилась в консоле, а была б строка из операции else - Недостаочно средств...
//   balance = balance - payment;
//   console.log('Достаточно! Сниаем деньги!');
//   console.log(`На счету осталось ${balance} грн.`);
// } else {
//   console.log('На счету не достаточно средств!');
// }

// console.log('Next string');

// ***** Задача if ... else if  Если покупка со скидкой

// const totalExpenses = 2000; //сколько всего потратили в этом магазине
// const payment = 500; //сколько тратим сейчас
// let discount = 0; //скидка

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//   discount = 0.02;
//   console.log('Ваша скидка 2 процента');
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//   discount = 0.05;
//   console.log('Ваша скидка 5 процентов');
// } else if (totalExpenses >= 5000 && totalExpenses < 10000) {
//   discount = 0.15;
//   console.log('Ваша скидка 15 процентов');
// } else {
//   console.log('У вас ещё нет накопительной скидки');
// }

// // формула просчета скидки в гривне = payment * discount
// // формула просчета стоимости товара со скидкой = payment - (payment * discount)

// const finalAmount = payment - payment * discount;

// console.log(finalAmount);

// console.log(
//   `Оформляем заказ на сумму ${finalAmount} гривен со скидкой
//   ${discount * 100}%`,
// );

// const name = 'Mango';

// console.log(name);

// if (true) {
//   const name = '10';
//   console.log(name);
// }

// ***** Задача на ТЕРНАРНЫЙ ОПЕРАТОР *****

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 180;

// const message =
//   ordered <= total
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно твоаров!';
// console.log(message);

// ***** Задача №4 Модуль 1 *****

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const orderPieces = prompt(
//   'Введите количество дроидов, которые хотите купить!',
// );

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = pricePerDroid * orderPieces; // Write code on this line
// let balanceCredit = credits - totalPrice; // Write code on this line
// let message;

// // Write code under this line
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (totalPrice <= credits) {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// } else if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// }

// console.log(message);

//  ***** Задача №5 Модуль 1 *****

// Использование switch, if и методов slice, toUpperCase, toLowerCase
// Напиши скрипт имитирующий оформление заказа в избранную страну.

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName .
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
// Поэтому надо перезаписать текст переменной countryName так,
// чтобы первая буква(свойство[0]) была заглавной(метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

// Переменная message будет выводить сообщение. В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${} будет стоить ${} кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости (переменная price) или записи сообщения о невозможности доставки используй switch.

// В случае, если доставка возможна (цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// Решение

// const countryName = prompt('Укажите страну доставки');

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;

// if (countryName === null) {
//   message = CANCELED_BY_USER;
//   console.log(message);
// } else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//   switch (country) {
//     // Write code under this line
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       console.log(NO_DELIVERY);
//   }
// }
// if (price !== 0) {
//   // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
//   console.log(message);
// }
