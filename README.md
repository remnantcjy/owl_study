# owl_study

## 생활코딩
> 태그 정의는 스스로 추론 후 확인 !
> 
> 중복은 끝까지 쫓아가서 다 없애버려라 !
>
* WEB1 - HTML & Internet (O)
* ```
  * <h1>~<h6> 제목 태그, 줄 바꿈
  * <p> 문단 태그로 css를 사용하면 줄 바꿈 간격을 상세히 지정 가능
  * <br> 줄 바꿈 태그
  * <strong> 굵은 텍스트로 표현
  * <u> 밑줄 태그
  * <img> 이미지 태그
  * <ul> 순서 없는 목록 만드는 태그
  * <ol> 순서 있는 목록 만드는 태그
  * <li> 목록의 각 항목을 나타내는 태그
  * <!doctype html> 웹 문서가 어떤 버전의 HTML 언어로 작성되었는지 결정하는 기능으로 웹 브라우저에 전달
  * <html>, <head> 본문에 대한 설명, <body> 본문
  * <a href = " "> a는 다른 웹사이트의 링크, href 웹 사이트가 참조하는 것, 속성
  ```
 
* WEB2 - CSS (O)
  ```
  * <style> CSS </style>
  * 선택자 우선순위 : id (구체적) > class > tag(포괄적)
  * <div>, <span> CSS나 JS를 통해 정보를 제어하고 싶을 때 감싸주는 무색무취의 태그
  * <div> 화면 전체 사용, 줄 바꿈 O | <span> 콘텐츠 크기 사용, 줄 바꿈 X
  * ex. display :inline 태그 안 보이게 감추는 기능
  * grid 최신 기술로 두 개의 태그를 감싸는 부모 태그가 필요 | 장점 : 텍스트가 많아져도 사이즈가 자동으로 커짐
  
  ex. display : grid;
      grid - template ~ columns(열) : 150px 1fr;
                            row(행)
   
  * caniuse.com 사이트 : 최신 css 기능 사용을 위해 현재 웹 브라우저들이 얼마나 그 기술을 채택하고 있는가를 통계냄
  * 미디어 쿼리 : 반응형 디자인을 css로 통해 구현하는 핵심적인 개념
  * (반응형 웹, 디자인 : 화면의 크기에 따라 웹페에지의 각 요소들이 반응해서 최적화 된 모양으로 바뀌게 하는 것)
  
  @media(max-width:800px){
      div {
          display: none;
       }
  }
  ```

 * WEB2 - JavaScript (O)
 ``` 
  * 구글 개발자 도구 : 마우스 우클릭 -> 검사, elements창 & console창 (파일을 만들지 않고 즉석으로 js 코드 사용 O)
  * <script> JS </script>
  * document.write('hello');
  * <input type = "button/text..." value = "버튼 이름" onclick = "alert('hi')">
  * 이벤트 : onclick, onkeydown, onchange
  * 데이터 타입 : number, string, boolean
  * string의 property : length, method : toUpperCase(), indexOf('hi'), trim()
  * 변수 사용 : 가급적 var 쓰기 !
  * 리팩토링 : 동작하는 것은 똑같지만 코드를 효율적으로 하는 것 (수단 중 함수가 포함) 
  * 함수 - 수납상자
    function 함수 이름 () {
     code ...
    }
   입력 : 파라미터, 인자, 매개변수
   출력 : return
  * 객체 - 연관된 함수 & 연관된 변수를 같은 이름으로 그룹핑, 정리정돈하는 도구 (함수 기반 위에 객체가 존재)
   객체에 속한 함수 = 메소드, 변수 = 프로퍼티
   객체 (중괄호 사용, 순서 X, '.' = object access operator, ',' = 프로퍼티와 프로퍼티를 구분할 때 사용)
   var coworkers = {
     "programmer" : "egoing",
     "designer" : "leezche"
   };
   document.write("programmer" + ":" + coworkers.programmer + "<br>");
   document.write("programmer" + ":" + coworkers.programmer + "<br>");
   coworkers.bookkeeper = "duru";
   document.write("bookkeeper" + ":" + coworkers.bookkeeper + "<br>");
   
   //만약 변수명에 띄어쓰기가 있을 시 배열처럼 사용
   coworker["data scientist"] = "taeho";
   document.write("data scientist" + ":" + coworkers.["data scientist"] + "<br>");
   
   //Iterate
   for(var key in coworkers){
     document.write(key + ":" + coworkers[key] + "<br>");
   }
  ```
 
 * 부가적인 것
 ```
  * Ctrl + / : 많은 라인 주석
  * 검사 도구 -> 네트워크 -> 웹페이지 리로드 시 1.html, style.css, colors.js 파일에 접속된 것을 확인
    서버에 접속을 3번 해야 한다. 파일을 다운받아야 하니까. 웹 서버 입장에선 나쁜 일. 접속은 적을수록 좋다.   
    럼에도 불구하고 이렇게 하는 것이 훨씬 효율적이다. Why? 캐시 때문에. (저장한다는 뜻)
    저, 한 번 웹브라우저에 다운된 파일은 웹브라우저가 보통 컴퓨터에 저장을 한다. 그리고 다음에 접속시 저장된 파일을 읽어서 네트워크를 통하지 않게 한다.
    그럼 서버 입장에선 비용이 절감되고 사용자 입장에선 네트워크 트래픽 절감 및 빠르게 웹페이지를 화면에 표시할 수 있다.
    결론 : 파일 쪼개기 (=효율적 & 돈 절약 & 시간 절약)
  * 오늘 날 SW 기본 - 다른 사람이 만든 SW를 부품으로 해서 그 SW를 소비해서 내가 만든 SW의 생산자가 됨. (생산자이면서 소비자)
    알아둘 키워드 :  library & framework
    라이브러리 : 재사용하기 쉬운 부품 느낌, 내가 만드는 프로그램을 가져오는 부품, SW 만드는 내가 라이브러리 땡겨와서 쓰는 느낌
    프레임워크 : 만들고자 하는 것 중에 공통적인 것과 달라지는 것 존재, 이때 공통된 것은 프레임워크가 만들어놓은 걸 사용하고 만들고자 하는 것만 수정하거나 만든다.
                 우리가 만들고자 하는걸 처음~끝까지 만들지 않고, 프레임워크 안에 들어가 작업하는 느낌
  * UI : User Interface
  * API : Application Programming Interface
```
