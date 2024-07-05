import tiktokHeader from './images/tik-tok-logo.png';
import homeScreenImageOne from './images/home-screen-image-one.png';
import './App.css';

function App() {
  return (
    <div className="TiktokApp">
      <header className="App-header">
        <div className="logo-container">
          <img src={tiktokHeader} alt="tiktoklogo" className="logo"/>
          <h1>TikTok</h1>
        </div>
        <h1>HarmonicBytes</h1>
        <button className="log-in">Log In</button>
      </header>
      <main>
        <div className="main-content">
          <div className="text-container">
            <h1>Elevate your melodies and metrics with HarmonicBytes</h1>
          </div>
          <div className="image-container">
            <img src={homeScreenImageOne} alt="Headphones unplugged playing melodious music." />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

