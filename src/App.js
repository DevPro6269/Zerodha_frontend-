import About from './components/About/About';
import Footer from './components/Footer';
import Home from './components/Home components/Home';
import Navbar from './Navbar';
import ScrollToTop from "./ScrollToTop";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from './components/Products/Product';
import Support from './components/Support/Support';

function App() {
  return (
    <Router>
      <>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
