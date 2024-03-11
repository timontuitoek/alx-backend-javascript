// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Your API call logic goes here
    // For example, you can use fetch or any other asynchronous operation

    // Simulating a successful API call after a delay
    setTimeout(() => {
      resolve('API response data');
    }, 1000);
  });
}

export default getResponseFromAPI;
