class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback){
      
        printTimeCallback();
      }
      this.currentTime += 1; 
      
      
    }, 10);

    
  }

  getMinutes() {
    const min = Math.floor(this.currentTime / 6000);
    return min
  
  }

  getSeconds() {
    const sec = Math.floor((this.currentTime  / 100) % 60);
    return sec
  }

  getCentiseconds() {
    const centiSec = this.currentTime % 100;
    return centiSec
   
  }

  computeTwoDigitNumber(value) {
    const valueString = value.toString();
    if (valueString.length < 2){
      return `0${value}`;
    } else {
      return value.toString()
    }
  }

  stop()  {
   
    clearInterval(this.intervalId);
  }

  reset()  {
    return this.currentTime = 0;
  }

  split() {
    return`${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
