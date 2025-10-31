/**
 * @param {string} s
 * @return {boolean}
 */
const hasSameDigits = function(s) {
  let array = [...s];
  while (array.length > 2) {
    array = array.reduce((acc , curr , ind) => {
      if (ind === 0) return acc;
      acc.push((+curr + +array[ind - 1]) % 10);
      return acc;
    } , []);
  }
  return array[0] === array[1];
};

console.log(hasSameDigits('3902')); // true
console.log(hasSameDigits('34789')); // false