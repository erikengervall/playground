import { fastFindInFiles } from 'fast-find-in-files'

console.log(JSON.stringify(fastFindInFiles(`${process.cwd()}/fixtures`, 'find'), null, 2))
