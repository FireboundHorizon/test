"use strict";

// let number = 4;

// console.log(4 / 0);
// console.log(4 * "awda");
// const person = "Alex";
// console.log(person);

// const bool = true;

// console.log(bool);

// // console.log(som);

// let und;
// console.log(und);

// const obj = {
// 	name: "Alex",
// 	age: 24,
// 	isMarried: false,
// };

// console.log(obj.name);
// console.log(obj["name"]);

// const array = ["plum", "orange", "apple"];

// console.log(array[2]);

// const array = [1, 2, 3];
// const obj = { a: 1, b: 2, c: 3 };
// console.log(array[1]);

// const obj = {
// 	Anna: 500,
// 	Alice: 800,
// };

// console.log(obj.Alice);
// console.log(obj["Anna"]);
// obj.isMarried = false;

// console.log(obj.isMarried);

// const storeName = "Magnit";

// const storeDescription = {
// 	budget: 10000,
// 	employees: ["Elena", "Alex", "Ivan"],
// 	products: {
// 		phone: 10000,
// 		laptop: 50000,
// 	},
// 	open: true,
// };

// console.log(storeDescription);

// alert("Hello");

// const result = confirm("Are you ready?");
// console.log(result);

// const answer = prompt("What is your name?", "");

// console.log(typeof answer);

// const answers = [];

// answers[0] = prompt("Как вас зовут?", "");
// answers[1] = prompt("Ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/444`);

// console.log("333" + "33");

// let incr = 10;
// let decr = 10;

// ++incr;
// --decr;
// console.log(incr++);
// console.log(decr--);
// console.log(incr);

// console.log(5 % 2);

// console.log(5 == "5");

// let isChecked = true;
// let isClose = false;

// console.log(!isChecked || !isClose);
// console.log(10 ** 3);

// let str =
// 	"Lorem ipsum dolor sit amet, consectetur adipisicing  elit. Explicabo veniam amet praesentium hic minus qui atque, exercitationem quae distinctio autem corrupti! Quod dolore inventore ullam eos mollitia ducimus at aperiam";

// // console.log(str.length);

// let str1 = "abc";
// let str2 = "awdawd";
// let str3 = `${str1}${str2}`;
// console.log(str3);

// let a = null;
// console.log(a);
// let a = 3;
// let b = "awda";
// console.log(a * b);
// console.log(123);
// console.log("123");

// const PI = 3.14;
// let radius = 10;
// console.log(2 * PI * radius);

// let a = "3";
// let b = "4";
// console.log(a * b);
// alert(2 + Number("3"));

// console.log(parseInt("12.444pxx"));
// alert(true + 3);
// alert(true + true);
// alert("1" + true);
// alert(String(true) + 1);
// alert(String(true) + Number(true));
// let str = "abcd lorem";
// console.log(str[1]);

// console.log(str[str.length - 2]);

// let str = "12345";

// console.log(+str[0] + +str[1]);

// let num = 47;
// console.log(num);
// num += 7;
// console.log(num);
// num -= 18;
// console.log(num);
// num *= 10;
// console.log(num);
// num /= 15;
// console.log(num);

// let num = 10;
// num++;

// console.log(num--);
// console.log(num);
// let a = 0.05;
// let c = 0.05;
// let b = 0.2;
// let g = a + c + b;

// console.log(+g.toFixed(1));

// let name = prompt("Ваше имя&");
// console.log(name);
// document.write("text1<br>");
// document.write("text2<br>");
// document.write("text3<br>");
// let num1 = 1;
// let num2 = 2;
// console.log("сумма: " + (num1 + num2));

// let a = 1;
// let b = 2;
// console.log(a + b);
// let num = "123";
// let sum = +num[0] + +num[1] + +num[2];
// console.log(sum);

// let arr = ["a", "b", "c"];
// console.log(arr);
// alert(arr);
// let arr = ["a", "b", "c", "d"];

// // console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`);

// // console.log(arr[arr.length - 1]);
// arr[0] = 1212;
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];
// console.log(arr);

// let arr = [];
// arr.push(1, 2, 4);
// console.log(arr);
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1] + arr[key2]);
// delete arr[0];
// console.log(arr);
// console.log(arr.length);
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.lenght);

// let obj = {
// 	1: "пн",
// 	2: "вт",
// 	3: "cр",
// 	4: "чт",
// 	5: "пт",
// 	6: "сб",
// 	7: "вск",
// };
// console.log(obj["1"]);
// let obj = {
// 	a: "1",
// 	b: "2",
// 	c: "3",
// };

// console.log(obj.a);
// let date = {
// 	year: 2025,
// 	month: 1,
// 	day: 11,
// };

// console.log(date.year);

// function analyzeText(text) {
// 	// Убираем таймкоды из текста
// 	const cleanedText = text.replace(
// 		/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/g,
// 		""
// 	);

// 	// Разбиваем текст на слова, игнорируя знаки пунктуации
// 	const words = cleanedText.toLowerCase().match(/\b\w+\b/g) || [];

// 	// Считаем общее количество слов
// 	const totalWords = words.length;

// 	// Считаем количество уникальных слов и создаем частотный словарь
// 	const wordFrequency = words.reduce((freq, word) => {
// 		freq[word] = (freq[word] || 0) + 1;
// 		return freq;
// 	}, {});

// 	const uniqueWords = Object.keys(wordFrequency).length;

// 	// Сортируем слова по частоте употребления в порядке убывания
// 	const sortedWords = Object.entries(wordFrequency)
// 		.sort(([, countA], [, countB]) => countB - countA)
// 		.map(([word, count]) => ({ word, count }));

// 	return {
// 		totalWords,
// 		uniqueWords,
// 		sortedWords,
// 	};
// }

// const text =
// 	``;
// const result = analyzeText(text);
// console.log("Total words:", result.totalWords);
// console.log("Unique words:", result.uniqueWords);
// console.log("Words sorted by frequency:", result.sortedWords);
// let obj = { x: 1, y: 2, z: 3 };

// obj.x **= 2;
// obj.y **= 2;
// obj.z **= 2;
// console.log(obj);

// let obj = {};

// obj.a = 1;
// obj.b = 12;
// obj.c = 3;
// console.log(obj);

// let obj = { a: 1, b: 2, c: 3 };

// let keys = Object.keys(obj);

// console.log(keys);

// let obj = {
// 	x: 1,
// 	y: 2,
// 	z: 3,
// };

// let keys = Object.keys(obj);

// console.log(keys);
// let key = "x";
// console.log(obj[key]);
// let obj = { x: 1, y: 2, z: 3 };
// console.log(obj["x"]);
// let obj = { x: 1, y: 2, z: 3 };

// let prop = "x";
// console.log(obj[prop]);
// let obj = { x: 1, y: 2, z: 3 };

// let prop = "x";
// console.log(obj[prop]);

// let key1 = "name";
// let key2 = "age";
// let key3 = "color";
// let obj = {
// 	[key1 + "a"]: 1,
// 	[key2 + "d"]: 2,
// 	[key3 + "c"]: 33,
// };

// console.log(obj);

// let key1 = "x";
// let key2 = "y";
// let key3 = "z";

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3,
// };

// console.log(obj);
// let obj = { a: 1, b: 2, c: 3 };

// console.log("a" in obj);
// let obj = { x: 1, y: 2, z: 3 };

// console.log("x" in obj);
// console.log("w" in obj);

// let obj = { a: 1, b: 2, c: 3 };
// console.log("a" in obj);
// delete obj["a"];
// console.log(obj);
// console.log(typeof { x: 1, y: 2, z: 3 });
// console.log(typeof [1, 2, 3]);
// let arr = [1, 2, 3];
// console.log(typeof arr);
// let arr = [1, 2, 3];
// console.log(typeof arr[0]);
// let arr = ["1", "2", "3"];
// console.log(typeof arr[0]);
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));
// console.log(Array.isArray(4));

// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = obj1;

// // console.log(obj2);
// obj2.a = 10;

// console.log(obj2);
// console.log(obj1);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = "a";
// console.log(arr2);
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = "a";
// arr2[1] = "b";

// console.log(arr1);
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = "a";
// arr2[0] = "b";

// console.log(arr2);

// const obj = { a: 1, b: 2, c: 3 };
// obj.q = 1;

// obj.q = "hello";

// // delete obj.q;

// console.log(obj);
// const arr = ["a", "b", "c"];
// arr[3] = "!";
// arr.push(111);
// console.log(arr);
// const arr = ["a", "b", "c"];
// arr = ["a", "b", "c"];
// console.log(arr);
// const arr = [1, 2, 3, 4, 5];
// const res = arr[1] + arr[2];

// console.log(res);
// let obj = { x: 1, y: 2, z: 3 };
// console.log(obj["x"]);
// let obj = { x: 1, y: 2, z: 3 };
// let key = "x";

// console.log(obj[key]);
// let obj = { x: 1, y: 2, z: 3 };
// let sum = obj["x"] + obj["y"] + obj["z"];

// console.log(sum);
// let obj = { x: 1, y: 2, z: 3 };

// let keys = Object.keys(obj);

// console.log(keys.length);

// let test1 = "3";
// let test2 = 3;

// if (test1 !== test2) {
// 	console.log("+");
// } else {
// 	console.log("-");
// }

// let num = 3;

// if (num > 0 && num < 10) {
// 	console.log("+");
// } else {
// 	console.log("-");
// }

// let num1 = -3;
// let num2 = 5;

// if (num1 > 0 && (num2 == 3 || num2 == 5)) {
// 	console.log("+++");
// } else {
// 	console.log("---");
// }
// let test = "true"; // тут пишем или true, или false

// if (test == true) {
// 	console.log("+++");
// } else {
// 	console.log("---");
// }

// let test = true;

// if (!test) {
// 	console.log("+++");
// } else {
// 	console.log("---");
// }

// let test = 3;

// // if (Boolean(test) === true) {
// // 	console.log("+++"); // сработает это
// // } else {
// // 	console.log("---");
// // }
// if (test > 0) console.log("+++");

// let day = 1767;

// if (day >= 1 && day <= 10) {
// 	console.log("first");
// } else if (day >= 11 && day <= 19) {
// 	console.log("second");
// } else if (day >= 20 && day <= 31) {
// 	console.log("tfird");
// } else {
// 	console.log("error");
// }

// let num = 229;

// if (num >= 10 && num <= 99) {
// 	let str = `${num}`;
// 	let sum = Number(str[0]) + Number(str[1]);
// 	if (sum <= 9) {
// 		console.log("цифра однозначна");
// 	} else {
// 		console.log("сумма двузначна");
// 	}
// }

// let num = 22;

// switch (num) {
// 	case 1:
// 		console.log("1");
// 		break;
// 	case 2:
// 		console.log("2");
// 		break;
// 	case 3:
// 		console.log("3");
// 		break;
// 	default:
// 		console.log("other");
// 		break;
// }

// let lang = "dea";

// if (lang == "ru") {
// 	console.log("рус");
// } else if (lang == "en") {
// 	console.log("рус");
// } else if (lang == "de") {
// 	console.log("нем");
// } else {
// 	console.log("язык не поддерживается");
// }

// switch (lang) {
// 	case "ru":
// 		console.log("рус");
// 		break;
// 	case "en":
// 		console.log("анг");
// 		break;
// 	case "de":
// 		console.log("нем");
// 		break;
// 	default:
// 		console.log("язык не поддерживается");
// 		break;
// }

// let age = 24;

// let adult = age >= 24 ? true : false;
// console.log(adult);
// let a = 1;
// let b = 2;

// let result = a == b;
// console.log(result);

// let age = confirm("Есть ли вам 18 лет?");

// if (age) {
// 	console.log("+++");
// } else {
// 	console.log("---");
// }
// let num = 5;
// let res;
// if (num >= 0) {
// 	res = 1;
// } else {
// 	res = 2;
// }

// console.log(res);
// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

let min = 10;

if (min >= 0 && min <= 14) {
	console.log("1 четверть");
}

if (min >= 15 && min <= 29) {
	console.log("2 четверть");
}

if (min >= 30 && min <= 44) {
	console.log("3 четверть");
}

if (min >= 45 && min <= 59) {
	console.log("4 четверть");
}

console.log(min);
