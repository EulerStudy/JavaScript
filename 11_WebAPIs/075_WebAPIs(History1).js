/*
<body>
  <a href="#hello1">Hello 1</a> /
  <a href="#hello2">Hello 2</a> /
  <a href="#hello3">Hello 3</a>
</body>
*/

// History
// 브라우저 히스토리(세션 기록) 정보를 반환하거나 제어
// .length: 등록된 히스토리 개수
// .scrollRestoration: 히스토리 탐색시 스크롤 위치 복원 여부 확인 및 지정
// .state: 현재 히스토리에 등록된 데이터(상태)

// .back(): 뒤로 가기
// .forward(): 앞으로 가기
// .go(위치): 현재 페이지 기준 특정 히스토리 '위치'로 이동

// .pushState(상태, 제목, 주소): 현재 히스토리의 상태 및 주소를 추가, 페이지 새로고침 되지 않음
// .replaceState(상태, 제목, 주소): 현재 히스토리의 상태 및 주소를 교체
// > 모드 브라우저(Safari 제외)는 '제목' 옵션을 무시한다.

console.log(history)  // History {length: 2, scrollRestoration: 'auto', state: null}

history.pushState({a: 1}, '', '/#hello4')
history.pushState({b: 2}, '', '/#hello5')