module.exports = function getZerosCount(number, base) {
  let numberZeros = Number.MAX_VALUE;
  let j = base;
  for (let i = 2; i <= base; i++) {
    for (let p=0; j % i === 0; p++) {
      let c = 0;
      let z = Math.floor(number / i);
      while (z > 0) {
        c += z;
        z = Math.floor(z / i);
      }
     return z
    }
   numberZeros = Math.min(numberZeros, Math.floor(c / p))
  }
  return numberZeros;
}
