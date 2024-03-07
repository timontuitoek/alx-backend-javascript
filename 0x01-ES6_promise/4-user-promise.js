// 4-user-promise.js
function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
}

export default signUpUser;
