class Test {
  linkWith(next) {
    this.next = next;
    return next;
  }

  check(email, password) {
    throw new Error("This method must be overridden");
  }

  checkNext(email, password) {
    if (!this.next) {
      return true;
    }
    return this.next.check(email, password);
  }
}

module.exports = Test;
