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
  function App() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Work />
        
        {/* <Testimonial /> */}
        <Gallery />
        <Timeline />
        <header className="App-header">
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
