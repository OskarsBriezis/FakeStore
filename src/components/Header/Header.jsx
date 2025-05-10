import './Header.css';
import logo from '/fakestore-logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="FakeStore logo" className="logo" />
      <div className="text">
        <h1>FakeStore</h1>
        <p>Iepirkšanās Tev</p>
      </div>
    </header>
  );
}

export default Header;
