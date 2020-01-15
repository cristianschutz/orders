import React, { useState, useEffect } from "react";
import { PageLogin } from "./styles";
import { InputGroup, StepHeader, StepButtons } from "../../styles/global";
import { auth } from "../../services/fireabase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  async function loginAuth(user, pass) {
    auth
      .signInWithEmailAndPassword(user, pass)
      .then(function() {
        toast.success("Logado com sucesso!");
        history.push("/");
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  }

  async function loginGetUser() {
    let user = auth.currentUser;
    if (user != null) {
      user.providerData.forEach(function(profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);
      });
    }
  }

  useEffect(() => {
    loginGetUser();
  }, []);

  return (
    <PageLogin>
      <div>
        <StepHeader>
          <img src={logo} alt="Logo" />
        </StepHeader>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            loginAuth(email, password);
          }}
        >
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </InputGroup>
          <StepButtons>
            <button>ENVIAR</button>
          </StepButtons>
        </form>
      </div>
    </PageLogin>
  );
}
