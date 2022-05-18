/*
function a(){
  console.log('A');
}
*/
var a = function (){
  console.log('A');
}
/*
a();  // a라는 변수가 담고있는 값인 함수를 실행할 수 있다.
*/

function slowfunc(callback){
  callback();
}

slowfunc(a);
