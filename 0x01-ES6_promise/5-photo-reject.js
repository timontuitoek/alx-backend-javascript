import photoReject from './5-photo-reject';

photoReject.upload('guillaume.jpg')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });
