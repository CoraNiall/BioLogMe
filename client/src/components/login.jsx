import React, { useState } from "react";
import axios from "axios";

import "../styles/log.css";

export default function Login() {
  const getCookie = () => {
    let cookie = document.cookie;
    return cookie;
  };

  const setCookie = user => {
    let cookie = getCookie();
    if (cookie) {
      return cookie;
    } else {
      cookie = `userCookie=${user.userName}; path=/`;
      return cookie;
    }
  };
  const [authenticated, setAuthenticated] = useState(getCookie() || false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async e => {
    e.preventDefault();

    await axios
      .post("http://localhost:8080/login", {
        user,
      })
      .then(res => {
        console.log(res.data || "User not found");
        let loggedInUser = res.data.user;
        setCookie(loggedInUser);
        setAuthenticated(true);
      })
      .catch(e => {
        console.log("User not found", e);
      });
  };

  return (
    <div className="container-sm col-md-8">
      <h2>Please log in to access BioLogMe</h2>
      <form action="/login" method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
            required
          />
          <br />
          <div>
            <input
              className="btn btn-primary user-details-btn"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
