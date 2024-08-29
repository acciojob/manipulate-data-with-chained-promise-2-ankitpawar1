//your JS code here. If required.
function initialPromise() {
  // This promise resolves with an array after 3 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterOdds(arr) {
  // Filters out odd numbers and returns a promise that resolves after 1 second
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arr.filter(num => num % 2 === 0));
    }, 1000);
  });
}

function multiplyEvens(arr) {
  // Multiplies even numbers by 2 and returns a promise that resolves after 2 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arr.map(num => num * 2));
    }, 2000);
  });
}

// Grab the output div
const outputDiv = document.getElementById('output');

// Start the chain of promises
initialPromise()
  .then(result => {
    outputDiv.textContent = `Even numbers: ${result.filter(num => num % 2 === 0).join(', ')}`;
    return filterOdds(result);
  })
  .then(filteredNumbers => {
    outputDiv.textContent += `. Multiplied by 2: ${filteredNumbers.map(num => num * 2).join(', ')}`;
    return multiplyEvens(filteredNumbers);
  })
  .then(finalResult => {
    outputDiv.textContent += `. Final result: ${finalResult.join(', ')}`;
  })
  .catch(error => {
    console.error('There was an error in the promise chain:', error);
  });