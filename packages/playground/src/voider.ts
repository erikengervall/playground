const voider = async () => {
  return 'result';
};

const main = async () => {
  const a = await voider().then(undefined);
  const b = await voider().then();
  const c = await voider().then(() => void 0);
  const d = await voider().then(() => {});
  console.log(a, b, c, d);
  console.log(typeof a, typeof b, typeof c, typeof d);
};

main();

export {};
