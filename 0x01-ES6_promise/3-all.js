// 3-all.js
import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([uploadPhotoResult, createUserResult]) => {
      console.log(`body ${uploadPhotoResult.firstName} ${createUserResult.lastName}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}

export default handleProfileSignup;
