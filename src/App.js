import About from './components/About/About';
import Footer from './components/Footer';
import Home from './components/Home components/Home';
import Navbar from './Navbar';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
