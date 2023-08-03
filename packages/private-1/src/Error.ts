class Error1 extends Error {
  payload: any;

  constructor(message: any, payload: any) {
    super(message);
    this.payload = payload;
  }
}

class Error2 extends Error {
  constructor() {
    super();
  }
}

const helper = async () => {
  throw new Error2();
  throw new Error1('EinMessage', { meta: 'details' });
};

const main = async () => {
  await helper().catch(error => {
    console.log('error name', error.constructor.name);
    console.log('error instanceof Error', error instanceof Error);
    if (error instanceof Error1) {
      console.log('Error1', error.message, error.payload);
    }
  });
};

main();
