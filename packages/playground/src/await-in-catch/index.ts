import { sleep } from '../sleep'

// Cherry pick test: This file & commit should be ignored

export const awaitInCatch = async () => {
  await sleep({ shouldReject: true }).catch(async reject1 => {
    console.log(reject1)
    await sleep({ shouldReject: true }).catch(async reject2 => {
      console.log(reject2)
      await sleep().then(async resolve1 => {
        console.log(resolve1)
        await sleep().then(async resolve2 => {
          console.log(resolve2)
        })
      })
    })
  })
}

awaitInCatch()
