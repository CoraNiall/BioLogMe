async function createUser(mongoclient, newUser) {
  const { name, email, password } = newUser;
  const user = await mongoclient.db('biologme').collection('users').insertOne({
    userId: '123456',
    userName: name,
    email: email,
    password: password,
  });

  console.log('New user added');
}

async function getUserById(mongoclient, userId) {
  const user = await mongoclient
    .db('biologme')
    .collection('users')
    .findOne({ id: userId });
  console.log(user);
  return user;
}

async function updateUserById(mongoclient, userId, updateValue) {
  const user = await mongoclient
    .db('biologme')
    .collection('users')
    .updateOne({ id: userId }, { $set: updateValue });
  console.log(user);
  return user;
}

async function deleteUserById(mongoclient, userId) {
  const user = await mongoclient
    .db('biologme')
    .collection('users')
    .deleteOne({ id: userId });
  console.log('User succesfully deleted from DB');
}

export { createUser, getUserById, updateUserById, deleteUserById };
