/*
###Задание 1

Спросить с помощью prompt у пользователя 2 числа и записать их в переменные.
Сравнить полученные числа.
С помощью alert вывести на экран сообщение о том, какое число больше. Если числа равны - сообщить что числа равны
*/


const num1 = Number(prompt("Enter any number for comparison"));
const num2 = Number(prompt("Enter the second number for comparison"));

if (num1 > num2) {
    alert("Comparison result: " + num1 + " is more than: " + num2)
} else if (num1 < num2) {
    alert("Comparison result: " + num1 + " is less than: " + num2)
} else if (num1 == num2) {
    alert("Comparison result: " + "Numbers are equal")
}
