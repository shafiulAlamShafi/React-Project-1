/* const Navbar = (
  <nav>
    <img src="./images/react-logo.png" alt="react logo" width="60" />
  </nav>
); */

/* const MainContent = (
  <main>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
); */

function Header() {
  return (
    <header>
      <nav className="nav-menu">
        <img src="./images/react-logo.png" alt="logo" width="40px" />
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return <footer>@2023 ***All rights reserved**</footer>;
}

function MainComponent() {
  return (
    <main>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

ReactDOM.render(
  <div>
    <Header></Header>
    <MainComponent></MainComponent>
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
