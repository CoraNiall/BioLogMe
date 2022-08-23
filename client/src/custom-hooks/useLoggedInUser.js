import { useState } from 'react';
export default function useLoggedInUser() {
  const [loggedInUser, setLoggedInUser] = useState(undefined);

  const saveLoggedInUser = loggedInUser => {
    setLoggedInUser(loggedInUser);
  };

  return {
    loggedInUser,
    setLoggedInUser: saveLoggedInUser,
  };
}
