import "../styles/LogInPage.css";
function WelcomeWindow({ login, button }) {
  return (
    <section className="window">
      <div className="window--background"></div>
      <div className="window--block">
        {button}
        <span className="window--text">Welcome, {login}!</span>
      </div>
    </section>
  );
}

export default WelcomeWindow;
