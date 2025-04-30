// Question 18
function printTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString());
  }
  
  // Print once immediately, then every second
  printTime();
  setInterval(printTime, 1000);
  