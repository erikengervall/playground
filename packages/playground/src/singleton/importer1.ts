import { someSingleton } from './singleton'
import { importer2 } from './importer2'

const some2 = importer2()
someSingleton.hello()

console.log(some2 === someSingleton)
