#!/usr/bin/node
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an API call here
    setTimeout(() => {
      resolve('Response from API'); // Resolve with the desired response
    }, 1000); // Simulating a delay of 1 second
  });
}
