import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Home from '././components/sections/Home';
import OurCollection from './components/sections/OurCollection';
import TradeShows from './components/sections/TradeShows';
import AboutUs from './components/sections/AboutUs';
import ContactUs from './components/sections/ContactUs';
import Education from './components/sections/Education';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <OurCollection />
      <TradeShows />
      <Education />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
