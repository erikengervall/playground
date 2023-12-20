export function main(arg1: string, arg2: string) {
  const result1: Record<string, true> = {};
  const result2: Record<string, true> = {};
  const overlap: Record<string, true> = {};

  const arg1Arr = arg1.split('\n');
  const arg2Arr = arg2.split('\n');

  arg1Arr.forEach(item => {
    result1[item] = true;
  });

  arg2Arr.forEach(item => {
    result2[item] = true;
  });

  Object.keys(result1).forEach(key => {
    if (result2[key]) {
      overlap[key] = true;
    }
  });

  console.log(`Overlaps #${Object.keys(overlap).length}`);
  console.log(Object.keys(overlap).join('\n'));
}

const arg1 = ``;

const arg2 = ``;

main(arg1, arg2);
