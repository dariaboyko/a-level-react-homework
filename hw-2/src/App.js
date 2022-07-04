import './App.css';
import LoginForm from "./components/LoginForm";
import WelcomeWindow from './components/WelcomeWindow';
import { useState } from "react";

function App() {
  const [window, setWindow] = useState(false);
  const [user, setUser] = useState();
  return (
    <div className="App">
      <LoginForm
        onLogIn={({ login, password }) => {
          setWindow(!window);
          setUser(login);
        }}
      />
      {window && (
        <WelcomeWindow
          login={user}
          button={
            <button
              className="close"
              onClick={() => {
                setWindow(!window);
              }}
            ></button>
          }
        ></WelcomeWindow>
      )}
    </div>
  );
}

export default App;
