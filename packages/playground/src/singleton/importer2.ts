import { someSingleton } from './singleton'

export const importer2 = () => {
  someSingleton.hello()
  return someSingleton
}
