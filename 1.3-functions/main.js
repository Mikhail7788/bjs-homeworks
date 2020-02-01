//Задание 1 
'use strict';

function  getSolutions(a, b, c) {
    let D = (Math.pow(b,2) - 4*a*c);
    let x1;
    let x2;
    
    if (D < 0) { 
      return { 
        D: D 
      }
    } else if (D === 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      return { 
        roots: [x1], 
        D: D 
      }
    } else if (D > 0) {
      x1 = (-b + Math.sqrt(D)) / (2*a);
      x2 = (-b - Math.sqrt(D)) / (2*a);
      return { 
        roots: [x1, x2], 
        D: D 
      }
    } 
}

function showSolutionsMessage(a, b, c) {
  let result =  getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) { 
  console.log("Уравнение не имеет вещественных корней")
  } else if (result.D === 0) {
       console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
  } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
  }
}

showSolutionsMessage(1, 4, 2);

//Задание 2

function getAverageScore(data) {
      let sumAverage = 0;
      let objectLength  = 0;
      for ( let averageMark in data ) {
        let value = data[ averageMark ];
        let sumResult = 0;
        for (let i = 0; i < value.length; i++) {
          sumResult += value[i];
        }
        data[ averageMark ] = sumResult / value.length;
        sumAverage += data[ averageMark ];
        objectLength++; 
        data.average = sumAverage / objectLength;
      }
      return data
    
    }
    
    console.log(getAverageScore({
      algebra: [3,4,5,4,5],
      music: [3,4,5],
      chemistry: [3,2,4,5],
      geometry: [3,4,5,4,5],
      russian: [3],
      physics: [3,4,4,5],
      english: [3,4,5],
      poetry: [3,4,5,2,5],
      french: [3,3,4,5],
      geography: [3,4,5]
    
    }));

//Задание 3

function getPersonData(secretData) {
    if (secretData.aaa === 0 && secretData.bbb === 0) {
      return secretData = {firstName: "Родриго", lastName: "Родриго"};
    } else if (secretData.aaa === 1 && secretData.bbb === 1) {
      return secretData = {firstName: "Эмильо", lastName: "Эмильо"};
    } else if (secretData.aaa === 0 && secretData.bbb === 1) {
      return secretData = {firstName: "Родриго", lastName: "Эмильо"};
    } else if (secretData.aaa === 1 && secretData.bbb === 0) {
      return secretData = {firstName: "Эмильо", lastName: "Родриго"};
    } 
  }
  
  console.log(getPersonData({aaa: 0, bbb: 0}));
  console.log(getPersonData({aaa: 1, bbb: 1}));
  console.log(getPersonData({aaa: 0, bbb: 1}));
  console.log(getPersonData({aaa: 1, bbb: 0}));