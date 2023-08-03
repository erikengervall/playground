import { Dockest } from 'dockest';

const file = __dirname + '/docker-compose.yml';
console.log({ file });

const dockest = new Dockest({
  composeFile: file,
});

const dockestServices = [{ serviceName: 'myRedis' }];

dockest.run(dockestServices);
