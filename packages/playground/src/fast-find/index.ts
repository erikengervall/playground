import { fastFindInFiles, FastFindInFiles } from 'fast-find-in-files';
import path from 'node:path';

const results: FastFindInFiles[] = fastFindInFiles(
  path.resolve(__dirname, './fixtures'),
  '69a0d7b7-153b-497e-80e3-064cb40387b7'
);

const resultsRegExp: FastFindInFiles[] = fastFindInFiles(
  path.resolve(__dirname, './fixtures'),
  new RegExp('[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')
);

console.log('>> fastFindInFiles results');
console.log(JSON.stringify(results, null, 2));

console.log('\n\n>> fastFindInFiles resultsRegExp');
console.log(JSON.stringify(resultsRegExp, null, 2));
