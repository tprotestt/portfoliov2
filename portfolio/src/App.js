import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Work from './components/work'
import Services from './components/services'
import Testimonial from './components/testimonial'
import Gallery from './components/gallery'
import Timeline from './components/timeline'
import { Chrono } from "react-chrono";
import data from './data';
  function App() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Work />
        {/* <div style={{ width: "100%", height: "500px" }}>
          <h3 className="title-a">
              Timeline
          </h3>
          <p className="subtitle-a">
            The Story So Far 
          <Chrono theme={{
            primary: 'black',
            secondary: 'grey',
            cardBgColor: 'white',
            cardForeColor: 'white',
            titleColor: 'black',
            titleColorActive: 'black',
          }}items={data} mode="VERTICAL_ALTERNATING" disableNavOnKey disableClickOnCircle hideControls />
          </p>
          <br></br><br></br>
        </div> */}
        <div><br></br><br></br><br></br></div>
        {/* <Testimonial /> */}
        <Gallery />
        {/*<Timeline />*/}
        <div><br></br><br></br><br></br></div>
        
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This site was built using React.js
            </p>
            {/* <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </div>
    );
  }


export default App;
