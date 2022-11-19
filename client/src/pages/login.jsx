import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/register.css";

export default function Login({ setToken, setLoggedInUser }) {
  const navigate = useNavigate();

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
        console.log(JSON.stringify(res.data.message) || "User not found");
        let userFound = res.data.user;
        let token = res.data.token;
        if (!userFound) {
          alert(
            "User/password incorrect. Please check your details and try again"
          );
        } else {
          setToken(JSON.stringify(token));
          setLoggedInUser(userFound);
          navigate("/home");
        }
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
            type="text"
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter password"
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
      <p className="login-link">
        Not yet registered? Click <a href="/register">here</a> to create an
        account
      </p>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setLoggedInUser: PropTypes.func.isRequired,
};
