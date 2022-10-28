export const romanNumbers = (num: number) => {
  return romanize(num)
}

function romanize (arabNum: number) {

  if (isNaN(arabNum) || 0 >= arabNum){
    return ''
  } else {
    var numbersMap = {
      M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
      L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    var romanizizedNumber = ''
  
    for (var romanNumber of Object.keys(numbersMap)) {
      var romanFactor = Math.floor(arabNum / numbersMap[romanNumber]);
      arabNum -= romanFactor * numbersMap[romanNumber];
      romanizizedNumber += romanNumber.repeat(romanFactor);
    }
  
    return romanizizedNumber
  }
      
}