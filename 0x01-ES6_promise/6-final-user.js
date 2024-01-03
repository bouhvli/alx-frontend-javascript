import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const waad = [
    await signUpUser(firstName, lastName)
      .then((result) => ({ status: 'fulfilled', value: result })),
    await uploadPhoto(fileName)
      .catch((error) => ({ status: 'rejected', value: error.toString() })),
  ];
  return Promise.resolve(waad);
}
