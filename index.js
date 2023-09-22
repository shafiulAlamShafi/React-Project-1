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

function Button(props) {
  const { color } = props;
  return (
    <button className="btn" style={{ backgroundColor: props.color }}>
      {props.children}
    </button>
  );
}

function AboutMe() {
  return (
    <section className="about-me">
      <div>
        <img src="./images/OIP.jpg" alt="my logo" width="300px" />
      </div>
      <div className="name-section">
        <h2>Md Shafiul Alam</h2>
        <p>Frontend Developer</p>
        <p>Dhaka, Bangladesh</p>
      </div>
      <div className="contact">
        <Button color="lightblue">Email</Button>
        <Button color="aqua"> Linkedin</Button>
      </div>
    </section>
  );
}

ReactDOM.render(
  <div>
    <Header></Header>
    <MainComponent></MainComponent>
    <AboutMe></AboutMe>
    <Footer></Footer>
  </div>,
  document.getElementById("root")
);
