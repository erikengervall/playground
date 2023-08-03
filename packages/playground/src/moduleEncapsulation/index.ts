import { sdk } from './sdk';
import { helper } from './helper';

console.log('index imported');

const main = () => {
  console.log('main');
  sdk.active = true;
  helper();

  sdk.someNumber = 1337;
  helper();
};

main();
