const sleep = (ms: number = 2500) => new Promise(resolve => setTimeout(resolve, ms))

const handleFailure = async (error: Error) => {
  console.time('handleFailure')
  await sleep()
  console.timeEnd('handleFailure')
  console.log('handleFailure', { error })
}

const failure = async () => {
  console.time('failure')
  await sleep()
  console.timeEnd('failure')
  throw new Error('failure')
}

export const main = async () => {
  console.time('main')
  await failure().catch(async error => {
    await handleFailure(error)
  })
  console.timeEnd('main')
}

await Promise.all(
  itemsToInsert.map(item => {
    return Item.add(
      {
        models,
        clients,
        logger,
        transaction,
      },
      item
    )
  })
)
