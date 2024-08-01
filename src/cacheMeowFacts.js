class CacheMeowFacts {
    constructor(maxSize = 100) {
      this.cache = [];
      this.maxSize = maxSize;
    }
  
    get() {
      return this.cache;
    }
  
    set(value) {
      if (value.length > this.maxSize) {
        this.cache = value.slice(0, this.maxSize);
      } else {
        this.cache = value;
      }
    }
  
    clear() {
      this.cache = [];
    }
  
    setMaxSize(size) {
      this.maxSize = size;
      if (this.cache.length > this.maxSize) {
        this.cache = this.cache.slice(0, this.maxSize);
      }
    }
  }
  
  module.exports = CacheMeowFacts;
  