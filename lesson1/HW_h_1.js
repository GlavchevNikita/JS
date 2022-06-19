// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

const age_2 = 18;
const age_3 = 60;

const checkAge = function(age_1) {
    
    if (age_1 < age_2) {
        console.log ("You don't have access cause your age is" + age_1 + "It's less then")
    } else if (age_1 >= age_2 && age_1 < age_3){
        console.log ("Welcome !")
    } else if (age_1 > age_3){
        console.log ("Keep calm and look Culture channel")
    } else {
        console.log ('Tecnical work')
    }
  
}

checkAge(17);
checkAge(18);
checkAge(61);
