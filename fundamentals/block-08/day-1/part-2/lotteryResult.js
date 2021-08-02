const numberCheck = (num, sortNum) => num === sortNum;
const lotteryResult =  (num, callback) => {
  const sortNum = Math.floor((Math.random() * 5) + 1);
  console.log (sortNum);
  return callback(num, sortNum) ? 'Parabéns você ganhou' : 'Tente novamente';
};
console.log(lotteryResult(2, numberCheck));