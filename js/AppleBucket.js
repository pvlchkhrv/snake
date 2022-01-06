export class AppleBucket {
  constructor(count) {
    this.apples = [];
    this.count = count
  }

  fillBucket() {
    for (let i = 0; i < this.count; i++) {
      this.apples.push(new Apple())
    }
  }

  getApple() {

  }

}
