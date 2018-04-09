class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.resolutionQueue = [];
    this.rejectionQueue = [];
    this.value;
    this.rejectionReason;
    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(value) {
    if (this.state === 'pending') {
      this.value = value;
      this.state = 'resolved';

      // run resolution handles
      this.runResolutionHandlers();
    }
  }

  reject(reason) {
    if (this.state === 'pending') {
      this.rejectionReason = reason;
      this.state = 'rejected';

      // run rejection handles
      this.runRejectionHandlers();
      // also reject every resolution handler in resolutionQueue
      while (this.resolutionQueue.length > 0) {
        const resolution = this.resolutionQueue.shift();
        resolution.promise.reject(this.rejectionReason);
      }
    }
  }

  runResolutionHandlers() {
    // Run every resolution handler in resolution queue
    while (this.resolutionQueue.length > 0) {
      const resolution = this.resolutionQueue.shift();

      let result;
      // Try running resolution handler
      try {
        result = resolution.handler(this.value);
      } catch (e) {
        // Reject if error
        resolution.promise.reject(e);
      }

      // If it return a promise, then handle that promise
      if (result && result instanceof MyPromise) {
        result.then(v =>
          resolution.promise.resolve(v)
        ).catch(e => resolution.promise.reject(e))
      } else {
        // else resolve with return value
        resolution.promise.resolve(result);
      }
    }
  }

  runRejectionHandlers() {
    // run every rejection handler in rejection queue
    while (this.rejectionQueue.length > 0) {
      const rejection = this.rejectionQueue.shift();

      let result;
      // Try running rejection handler
      try {
        result = rejection.handler(this.rejectionReason);
      } catch (e) {
        rejection.promise.reject(e);
      }

      // If rejection handler returns a promise, handle that promise
      if (result && result instanceof MyPromise) {
        result
          .then(v => rejection.promise.resolve(v))
          .catch(e => rejection.promise.reject(e));
      } else {
        // else reject promise with result (return value)
        rejection.promise.reject(result);
      }
    }
  }

  then(resolutionHandler, rejectionHandler) {
    const promise = new MyPromise(function () { });

    this.resolutionQueue.push({
      handler: resolutionHandler,
      promise: promise
    });

    if (typeof rejectionHandler === 'function') {
      this.rejectionQueue.push({
        handler: rejectionHandler,
        promise: promise
      });
    }

    if (this.state === 'resolved') {
      this.runResolutionHandlers();
    }

    if (this.state === 'rejected') {
      promise.reject(this.rejectionReason);
    }
    return promise;
  }

  catch(rejectionHandler) {
    const promise = new MyPromise(function () { });

    this.rejectionQueue.push({
      handler: rejectionHandler,
      promise: promise
    });

    if (this.state === 'rejected') {
      this.runRejectionHandlers();
    }

    return promise;
  }
}

const promise = new MyPromise((resolve) => {
  // do some async work
  setTimeout(resolve, 1000);
})


promise.then(() => console.log('Hey')).then(() => { throw Error('My error'); }).catch(e => console.log(e));