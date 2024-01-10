import image from '../assets/react.svg';

const NavBar = () => {
  const connectAccount = async () => {
    console.log('Connecting to account..');
  };

  return (
    <nav>
      <div className="nav__brand">
        <img src={image} alt="Image"></img>
        <h1>Real Estate Portal</h1>
      </div>

      <ul className="nav__links">
        <li>
          <a href="#">Search</a>
          <a href="#">Buy</a>
          <a href="#">Sell</a>
          <a href="#">Tools</a>
          <a href="#">EN</a>
          <a href="#">Globe</a>
        </li>
        <li>
          <button
            type="button"
            className="nav__conect"
            onClick={connectAccount}
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
