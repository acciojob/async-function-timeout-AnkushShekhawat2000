//your JS code here. If required.
// script.js

async function displayMessage() {
  const textInput = document.getElementById('text').value;
  const delayInput = parseInt(document.getElementById('delay').value, 10);

  try {
    await wait(delayInput);
    document.getElementById('output').innerText = textInput;
  } catch (error) {
    console.error('Error:', error);
  }
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('btn').addEventListener('click', displayMessage);
