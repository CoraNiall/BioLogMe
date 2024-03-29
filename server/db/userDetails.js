import { createUniqueUser } from '../src/utils.js';

async function registerUser(mongoclient, newUser) {
  const { name, email, password } = newUser;
  try {
    await mongoclient
      .db('biologme')
      .collection('users')
      .insertOne({
        _id: createUniqueUser(),
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
  } finally {
    await mongoclient.close();
  }
}

async function getUser(mongoclient, user) {
  const { email, password } = user;
  try {
    const userObj = await mongoclient
      .db('biologme')
      .collection('users')
      .findOne({ email: email, password: password });

    if (!userObj) {
      console.log('User not found');
    } else {
      return userObj;
    }
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

async function updateUserById(mongoclient, userId, updateValue) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('users')
      .updateOne({ _id: userId }, { $set: updateValue });
    console.log(user);
    return user;
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

async function deleteUserById(mongoclient, userId) {
  try {
    const user = await mongoclient
      .db('biologme')
      .collection('users')
      .deleteOne({ _id: userId });
    console.log('User succesfully deleted from DB');
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

async function checkUserExists(mongoclient, email) {
  try {
    const userObj = await mongoclient
      .db('biologme')
      .collection('users')
      .findOne({ email: email });

    if (!userObj) {
      console.log('User not found');
    } else {
      return userObj;
    }
  } catch (e) {
    console.error(e);
  } finally {
    await mongoclient.close();
  }
}

export {
  registerUser,
  getUser,
  updateUserById,
  deleteUserById,
  checkUserExists,
};
