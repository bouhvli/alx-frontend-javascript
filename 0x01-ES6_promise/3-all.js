import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoRes, userRes] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    const output = `${photoRes.body} ${userRes.firstName} ${userRes.lastName}`;
    console.log(output);
  } catch (error) {
    console.error('Signup system offline');
  }
}
