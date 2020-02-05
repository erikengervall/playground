const main = async (shouldResolve: boolean) => {
  console.time('main')
  const a = await new Promise(resolve => {
    if (shouldResolve) {
      return resolve()
    }
  })
  console.log({ a })
  console.timeEnd('main')
}
//
main(false)
