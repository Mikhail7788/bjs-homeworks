'use strict'
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}


function sum(...args) {
  // Замедление на половину секунды.
  sleep(500);
  return args.reduce((sum, arg) => {
      return sum += +arg;
  }, 0);
}


function compareArrays( arr1, arr2 ) {
    return (arr1.length === arr2.length) && arr1.every((arr1, i) => arr1 === arr2[i]);
}

function memorize(fn, limit) {
    const results = [];
    return (...args) => {
        const memoryChecking = results.find(item => compareArrays(item.args, args));
        if (memoryChecking) {
            return memoryChecking.result;
        } else {
            let result = fn(...args);
            results.push({args: Array.from(args), result});
        
          if (results.length > limit) {
            results.shift();
          } 
        
          return result;
        }
    }
}


function testCase (testFunction, timeCheck) {
  let items = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];

  console.time(timeCheck);

  let i=0;
  while (i <= 100) {
    items.forEach(item => testFunction.apply(items));
    i++;
  }

  console.timeEnd(timeCheck);
}