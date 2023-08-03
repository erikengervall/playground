import { Logger } from './ErrorSingleton';
import { singletonImporter1 } from './singletonImporter1';
import { singletonImporter2 } from './singletonImporter2';

const singletonImporterMain = () => {
  singletonImporter1();
  singletonImporter2();
  const logger = new Logger();
  logger.info('singletonImporterMain');
};

singletonImporterMain();
