
let num = Math.floor(Math.random() * 100) + 1;

let num3 = num % 3

let num5 = num % 5

if (num3 === 0 && num5 === 0) {
  console.log('3と5の倍数です');
}
else if (num3 === 0) {
  console.log('3の倍数です');
}
else if (num5 === 0){
    console.log('5の倍数です')
}

else{
    console.log(num)
}

