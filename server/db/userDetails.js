import { createUniqueUser } from '../src/utils.js';

async function createUser(mongoclient, newUser) {
  try {
    const { name, email, password } = newUser;
    await mongoclient
      .db('biologme')
      .collection('users')
      .insertOne({
        id: createUniqueUser(),
        userName: name,
        email: email,
        password: password,
        registrationDate: new Date(Date.now())
          .toLocaleString('en-gb')
          .split(',')[0],
      });
    console.log('New user added');
  } catch (e) {
    console.error(e);
  }
}

async function getUserById(mongoclient, userId) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('users')
      .findOne({ id: userId });
    if (user) {
      console.log(user);
      return user;
    } else {
      console.log('User not found');
    }
  } catch (e) {
    console.error(e);
  }
}

async function updateUserById(mongoclient, userId, updateValue) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('users')
      .updateOne({ id: userId }, { $set: updateValue });
    console.log(user);
    return user;
  } catch (e) {
    console.error(e);
  }
}

async function deleteUserById(mongoclient, userId) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('users')
      .deleteOne({ id: userId });
    console.log('User succesfully deleted from DB');
  } catch (e) {
    console.error(e);
  }
}

export { createUser, getUserById, updateUserById, deleteUserById };
