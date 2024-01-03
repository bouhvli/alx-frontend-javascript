import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const waad = [
    signUpUser(firstName, lastName)
      .then((result) => ({ status: 200, value: result }))
      .catch((error) => ({ status: 404, value: error })),
    uploadPhoto(fileName)
      .then(() => ({ status: 404, value: 'done uploading' }))
      .catch((error) => ({ status: 404, value: error })),
  ];
  return Promise.all(waad);
}
