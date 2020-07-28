class SomeSingleton {
  date: Date

  constructor() {
    this.date = new Date()
  }

  hello() {
    console.log('hello', this.date)
  }
}

export const someSingleton = new SomeSingleton()
