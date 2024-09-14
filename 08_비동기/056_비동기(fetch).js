// fetch(주소,옵션)
// 네트워크를 통해 리소스의 요청(Request) 및 응답(Response)를 처리할 수 있다.
// Promise 인스턴스를 반환

console.log(fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers'))   // Promise {<pnding>}

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  // Response {type: 'Cors', ... , status: 200, ok: true, json: f fson()}
  .then(res => console.log(res))

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  .then(res => console.log(res.json()))   // Promise {<pnding>}


fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  .then(res => res.json())
  .then(json => console.log(json))    // {Search: Array(10), totlaResults: '144', Response: 'True'}

//

const wrap = async () => {
  const res = await fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers')
  const json = await res.json()
  console.log(json)
}
wrap()

///

fetch('https://www.omdbapi.com/?apikey=7035c60c&s=avengers', {
  method: GET,  // GET은 기본값, POST, PUT, DELETE
  headers: {    // 서버로 전송하는 요청에 대한 정보를 담고 있다.
    'Cpntent-Type': 'application/json'
  },    
  body: JSON.stringify({    // 요청에 대한 데이터, 항상 문자화를 시켜야 한다.       
      name: 'HEROPUY',
      age: 85,
      email: 'thesecon@gmail.com'
    }      
  )
})