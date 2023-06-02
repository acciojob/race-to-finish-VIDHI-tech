window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
}

function createPromise(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay / 1000); // Resolving with time taken in seconds
    }, delay);
  });
}

const promises = [
  createPromise(getRandomDelay()),
  createPromise(getRandomDelay()),
  createPromise(getRandomDelay()),
  createPromise(getRandomDelay()),
  createPromise(getRandomDelay())
];

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `${result.toFixed(3)}`;
  })
  .catch(error => {
    console.log(error);
  });
