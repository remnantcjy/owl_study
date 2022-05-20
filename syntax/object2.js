// array, object
// f는 처리 구문이면서도 값이 된다.

var f = function(){
  console.log(1+1);
  console.log(1+2);
}

//배열의 원소로써 함수가 존재할 수 있다.
var a = [f];
a[0]();

//func는 객체의 원소, 프로퍼티라고도 함.
var o = {
  func:f
}
o.func();

//i와 w는 값이 안 된다.
//var i = if(true){console.log(1)};

//var w = while(true){console.log(1)};
