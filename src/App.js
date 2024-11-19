import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Design from './components/Design';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Developer from './components/Developer';
import Product from './components/Product';
import Compliance from './components/Compliance';
import Pricing from './components/Pricing';


function App() {
  return (
    <div className="App">

<BrowserRouter>
<Header/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/designers" element={<Design />} />
  <Route path="/developers" element={<Developer />} />
  <Route path="/product managers" element={<Product />} />
  <Route path="/compliance managers" element={<Compliance />} />
  <Route path="/pricing" element={<Pricing />} />
</Routes>


<Footer/>
</BrowserRouter>

      
      
      
      














     {/*} <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
