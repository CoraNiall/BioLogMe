async function createUser(mongoclient, newUser) {
  const coll = mongoclient.db('biologme').collection('users');
  await coll.insertOne({
    userId: '123456',
    userName: newUser.name,
    email: newUser.email,
    password: newUser.password,
  });

  console.log('New user added');
}

async function getUser(mongoclient, userId) {
  const coll = mongoclient.db('biologme').collection('users');
  try {
    const user = await coll.findOne({ id: userId });
    console.log(user);
    return user;
  } catch (e) {
    console.error(e);
  }
}

function updateUser() {}

function deleteUser() {}

export { createUser, getUser, updateUser, deleteUser };
