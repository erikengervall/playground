const sleep = (ms: number = 2500) => new Promise(resolve => setTimeout(resolve, ms))

const shouldDoSomething = async (should: boolean) => {
  await sleep()

  return should
}

const main = async (should: boolean) => {
  console.time('async-if')
  if (await shouldDoSomething(should)) {
    console.log('TRUUUUUUE! 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉')
  }
  console.timeEnd('async-if')
}

const _ = async () => {
  await main(true)
  await main(false)
}

_()
