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

function getAverageMark(marks) {
	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	let result = sum / marks.length;
	return result;
}
function getAverageScore(data) {
	let value = new Object();
  for (let prop in data) {
		value[prop] = getAverageMark(data[prop]);
  }
  
  let averageSum = 0;
  let propSum = 0;
	for (let prop in value) {
		averageSum += value[prop];
    propSum++;
	}
  let average = averageSum / propSum;
  let averageProp = 'average';
  value[averageProp] = average;
  return value;
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
 
    function secretName(number) {
     let result;
     if (number === 0) {
       result = 'Родриго';
     } else if (number === 1) {
       result = 'Эмильо';
     }
    return result;
    }
   
    return {
     firstName: secretName(secretData.aaa),
     lastName: secretName(secretData.bbb)
    }
}
  
console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));