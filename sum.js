// const numbers1 = 10;
// const numbers2 = [5, 6, 3];
// const numbers3 = [[1, 5, 4], [2, 8]];
// const numbers4 = [['1', '5,6', '4, 1'], ['2 3', '8']];
// const numbers5 = ['14', '15,9', '1, 2', '5 4'];
// const numbers6 = '9, 6, 3';
// const numbers7 = '8,6,1';
// const numbers8 = '8 9 10';



function sum(...args) {
  let sum = 0;
  
  for (const element of args) {
    if (typeof element === 'object') {
      for (const elem of element) {
        if (typeof elem === 'number') {
          sum += elem;
        }

        if (typeof elem === 'object') {
          for (const el of elem) {
            if (typeof el === 'number') {
              sum += el;
            }
              
            if (typeof el === 'string') {
              let spliter = ' ';
              if (el.includes(',')) spliter = ',';
              if (el.includes(', ')) spliter = ', ';

              const stringArray = el.split(spliter);

              for (const e of stringArray) {
                sum += Number(e);
              }
            }
          }
        }

        if (typeof elem === 'string') {
          let spliter = ' ';
          if (elem.includes(',')) spliter = ',';
          if (elem.includes(', ')) spliter = ', ';
          
          const stringArray = elem.split(spliter);
          
          for (const el of stringArray) {
            sum += Number(el);
          }
        }
      } 
    } 
    
    if (typeof element === 'number') {
      sum += element;
    } 
    
    if (typeof element === 'string') {
      let spliter = ' ';
      if (element.includes(',')) spliter = ',';
      if (element.includes(', ')) spliter = ', ';
      
      const stringArray = element.split(spliter);
      
      for (const elem of stringArray) {
        sum += Number(elem);
      }
    }
  }
  
  return sum;
}
