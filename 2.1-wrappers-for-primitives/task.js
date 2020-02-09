'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    //код для задачи №1 писать здесь
    
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  if (isNaN(percent)) {
    return `Параметр \`Процентная ставка\` содержит неправильное значение`;
  } 
  
  if (isNaN(contribution)) {
      return `Параметр \`Первоначальный взнос\` содержит неправильное значение`;
  }
    
  if (isNaN(amount)) {
      return `Параметр \`Сумма кредита\` содержит неправильное значение`;
  }
    
    
  let now = new Date;
  let dueDate = new Date(date);
  let dateNow = now.getTime();
  let endMounth = dueDate.getTime() - dateNow;
  let p = parseFloat(percent);
  let monthlyPc = p / 12 / 100;
  let months = Math.floor(endMounth / 60000 / 60 /24 /30 );
  
  let payment = amount - contribution;
  
  let payMonthly = (monthlyPc * (Math.pow(1 + monthlyPc, months))) / (Math.pow(1 + monthlyPc, months) - 1);
  let totalAmount = payMonthly * payment * months;
  return totalAmount.toFixed(2);
     
}
    

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;
    if ( typeof name === 'undefined' || name === null || name === "" ) {
        name = 'Аноним';
    }
    
    let greeting = `Привет, мир! Меня зовут ${name}.`;
    return greeting;
}