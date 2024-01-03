import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      const out = `${res[0].body} ${res[1].firstName} ${res[1].lastName}`;
      console.log(out);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.log('Signup system offline');
    });
}
