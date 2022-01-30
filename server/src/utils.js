function createUniqueUser() {
  let uniqueId = Math.random().toString();
  let shortUniqueId = uniqueId.substr(2, 7);
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
  const uuid = `${randomCharacter}${shortUniqueId}`;
  return uuid;
}

export { createUniqueUser };
