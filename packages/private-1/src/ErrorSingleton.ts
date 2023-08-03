export class Logger {
  static correlationId: string;
  static singletonInstance: Logger;

  constructor(correlationId?: string) {
    if (!Logger.singletonInstance) {
      Logger.singletonInstance = this;
    }

    if (correlationId) {
      Logger.correlationId = correlationId;
    }

    return Logger.singletonInstance;
  }

  info = (args: any) => console.log(args, { correlationId: Logger.correlationId });
}
