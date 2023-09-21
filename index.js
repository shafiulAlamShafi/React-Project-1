const Navbar = (
  <nav>
    <img src="./images/react-logo.png" alt="react logo" width="60" />
  </nav>
);

const MainContent = (
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

ReactDOM.render(
  <div>
    {Navbar}
    {MainContent}
  </div>,
  document.getElementById("root")
);
