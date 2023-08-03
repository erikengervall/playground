const numba = 123;

export const playground = (name = '@engervall/playground') => {
  console.log(name, '~ ~ ~', numba);
  return name;
};

import { importer1import } from './singleton/importer1';
import { importer2import } from './singleton/importer2';

if (importer1import === importer2import) {
  console.log('singleton importer1 === importer2');
}
