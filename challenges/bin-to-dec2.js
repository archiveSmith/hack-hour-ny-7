let binToDec = (binary) => {
  let arr = binary.split('').reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 1) sum += (Math.pow(2, i))
  }
  return console.log(sum);
}

binToDec('0')   // 0
binToDec('11')  // 3
binToDec('100') // 4
binToDec('101') // 5
binToDec('0101') // 5