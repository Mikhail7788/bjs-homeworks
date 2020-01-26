'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let dm = (Math.pow(b,2) - 4*a*c);
    let x = [];
    
    if (dm < 0) 
       return [];
    if (dm === 0) 
        xOne = ((-b) + Math.sqrt(dm))/(2*a);
    if (dm > 0){
        x[0] = ((-b) + Math.sqrt(dm))/(2*a);
        x[1] = ((-b) -Math.sqrt(dm))/(2*a);
    }
    
    return x;
    
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    if (marks.length > 5) {
    	console.log("Количество оценок больше 5");
    	marks = marks.slice(0, 5);
    }
    let averageMark = 0;
    for (let i=0; i < marks.length; i++) {
    	averageMark += marks[i];
    }
    averageMark = (averageMark/marks.length);
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
    let nowYear = new Date();
    let age = nowYear.getFullYear() - dateOfBirthday.getFullYear();
    let message;
    if (age > 18) {
    	message = `Не желаете ли олд-фэшн, ${name} ?`;
    } else {
    	message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(message);
    return message;
}