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
  ```
