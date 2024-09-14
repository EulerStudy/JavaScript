// Location
// 헌재 페이지 정보를 반환하거나 제어
// .href: 전체 URL 주소   "http://localhost:1234/abc?a=1"
// .protocol: 프로토콜    "http:"
// .hostname: 도메인 이름 "localhost"
// .pathname: 도메인 이후 경로  "/abc"
// .host: 포트 번호를 포함한 도메인 이름  "localhost:1234"
// .port: 포트 번호   "1234"
// .hash: 해시 정보(페이지의 ID)  "#hello"    id 선택자로 페이지 이동을 할 때

// .assign(주소): 해당 '주소'로 페이지 이동
// .replace(주소): 해당 '주소'로 페이지 이동, 현재 페이지의 히스토리 제거
// .reload(강력): 페이지 새로고침, `true` 인수는 '강력' 새로고침

console.log(location)   // Location {ancestorOrigins: DOMStringList, ...}