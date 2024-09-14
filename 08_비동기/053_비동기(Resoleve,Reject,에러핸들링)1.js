// Resolve, Reject 그리고 에러 핸들링

const delayAdd1 = (index, cb, errorCb) => {
  setTimeout(() => {
    if (index > 10) {
      errorCb(`${index}는 10보다 클 수 없습니다`)
      return
    }
    console.log(index)
    cb(index + 1)
  }, 1000)
}

delayAdd1(
  2, 
  res => console.log(res),
  err => console.error(err)
)

//

const delayAdd2 = index => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없습니다`)
        return
      }
      console.log(index)
      resolve(index + 1)
    }, 1000)
  })
}

delayAdd2(13)
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Done!'))

const wrap = async () => {
  try {
    const res = await delayAdd2(2)
    console.log(res)
  } catch(err) {
    console.error(err)
  } finally {
    console.log('Done!')
  }

}
wrap()