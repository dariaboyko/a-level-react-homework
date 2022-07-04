import "../styles/LogInPage.css";
import Eye from "./Eye";
import { useState } from "react";
function LoginForm({onLogIn}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    onLogIn({ login, password });
  }
  return (
    <section>
      <form onSubmit={handleSubmit} className="main__form">
        <h1 className="main__form__title">Login</h1>
        <div className="main__form__input">
          <label>Login</label>
          <input
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            type="text"
          />
        </div>
        <div className="main__form__input">
          <label>Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type={passwordShown ? "text" : "password"}
          />
          {password && password.length < 7 && (
            <span className="main__form__warning">
              password must contain then 6 symbols
            </span>
          )}
          <button
            onClick={(event) => {
              event.preventDefault();
              setPasswordShown(!passwordShown);
            }}
            className="main__form__watch"
          >
            <Eye />
          </button>
        </div>
        <input
          disabled={login.length >= 1 && password.length >= 7 ? false : true}
          type="submit"
          value="login"
          className="main__form__submit"
        />
      </form>
    </section>
  );
}

export default LoginForm;
