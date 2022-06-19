// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


const age_2 = 18;
const age_3 = 60;
const checkAge3 = function(age_1) {   
    if(age_1 && !isNaN(age_1)) {    
        if (age_1 < age_2) {
            console.log ("You don't have access cause your age is" + age_1 + "It's less then")
        } else if (age_1 >= age_2 && age_1 < age_3){
            console.log ("Welcome !")
        } else if (age_1 > age_3){
            console.log ("Keep calm and look Culture channel")
        } else {
            console.log ('Tecnical work')
        }
    } else console.log('Not an integer value')  
    }
    

    checkAge3(17);
    checkAge3(18);
    checkAge3(61);
    checkAge3('Nikita');
    checkAge3('0');
    checkAge3('');
