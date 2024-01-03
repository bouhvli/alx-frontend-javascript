import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [resPhoto, resUser] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      resPhoto,
      resUser,
    };
  } catch (error) {
    return {
      resPhoto: null,
      resUser: null,
    };
  }
}
