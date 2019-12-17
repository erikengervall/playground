import { Logger } from './ErrorSingleton'

export const singletonImporter2 = () => {
  const logger = new Logger('correlationId-singletonImporter2')
  logger.info('hello singletonImporter2')
}
