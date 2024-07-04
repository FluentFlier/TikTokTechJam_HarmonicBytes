import logo from './logo.svg';
import homeScreenImageOne from './images/home-screen-image-one.png';
import './App.css';

function App() {
  return (
    <div className="TiktokApp">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>TikTok</h1>
        <h1>HarmonicBytes</h1>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </header>
      <main>
        <h1>Elevate your melodies and metric with HarmonicBytes</h1>
        <img src={homeScreenImageOne} alt="Headphones unplugged playing melodious music." />
      </main>
    </div>
  );
}

export default App;
