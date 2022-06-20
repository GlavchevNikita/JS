// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке


const agePromt = prompt("Введите возраст")
    const age_2 = 18;
    const age_3 = 60;
const div = document.getElementById('d')
 const checkAge = function(...age) {   
    age.forEach(element => {
        if (element && !isNaN(element)){
            if (element < age_2) {
                div.innerHTML += "You don't have access cause your age is " + element  + " It's less then" + '<br /r>'
            } else if (element >= age_2 && element < age_3) {
                div.innerHTML += "Welcome !" + '<br /r>'
            } else if (element > age_3) {
                div.innerHTML += "Keep calm and look Culture channel" + '<br /r>'
            } else {
                div.innerHTML += "Tecnical work" + '<br /r>'
        }
    } else div.innerHTML += ('Not an integer value')  + '<br /r>' 
    })
 }    
    
 
 checkAge(agePromt)
