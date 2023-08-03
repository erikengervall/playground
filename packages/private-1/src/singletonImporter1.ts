import { Logger } from './ErrorSingleton';

export const singletonImporter1 = () => {
  const logger = new Logger('correlationId-singletonImporter1');
  logger.info('hello singletonImporter1');
};
