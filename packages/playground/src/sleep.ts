const counters = {
  resolve: 0,
  reject: 0,
}
let lastDate = new Date()

export const sleep = ({
  ms = 2500,
  shouldReject = false,
}: { ms?: number; shouldReject?: boolean } = {}) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const d = new Date()
      const timestamp = `(${d.getMinutes()}:${d.getSeconds()}:${d
        .getMilliseconds()
        .toPrecision(3)})`
      console.log(`Δ ${d.getTime() - lastDate.getTime()}`)
      lastDate = d

      if (shouldReject) {
        counters.reject += 1
        return reject(`${timestamp} reject 🔥 #${counters.reject}`)
      }

      counters.resolve += 1
      resolve(`${timestamp} resolve 🎉 #${counters.resolve}`)
    }, ms)
  )
