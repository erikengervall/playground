const sleep = (ms: number = 2500) => new Promise(resolve => setTimeout(resolve, ms));

const handleFailure = async (error: Error) => {
  console.time('handleFailure');
  await sleep();
  console.timeEnd('handleFailure');
  console.log('handleFailure', { error });
};

const failure = async () => {
  console.time('failure');
  await sleep();
  console.timeEnd('failure');
  throw new Error('failure');
};

export const main = async () => {
  console.time('main');
  await failure().catch(async error => {
    await handleFailure(error);
  });
  console.timeEnd('main');
};

// main()

/**
➜  playground git:(master) ✗ yarn ts-node ./Promise/index.ts
yarn run v1.19.0
$ .../playground/node_modules/.bin/ts-node ./Promise/index.ts
failure: 2503.293ms
handleFailure: 2504.705ms
handleFailure { error:
   Error: failure
       at failure (.../playground/Promise/index.ts:14:9) }
main: 5021.519ms
✨  Done in 6.14s.
 */

const firstHandler = async (earlyAbort: any) => {
  await sleep();

  // Do stuff

  console.log('1');

  earlyAbort({ erro: 'hello' });

  console.log('3');
};

const main2 = async () => {
  await new Promise((_, reject) => {
    firstHandler(reject);
  }).catch(error => console.log({ error }));

  console.log('2');
};

main2();
