console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1

function sum(first, second){  // parameter
  console.log('a');
  return first + second;  // return 순수한 값으로 출력 & 거기서 함수가 종료
  console.log('b'); // 위에서 return 됐기에 함수 종료 후 값 출력 안 됐음
}

console.log(sum(2,4)); // argument
