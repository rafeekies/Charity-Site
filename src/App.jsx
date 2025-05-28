import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import DonorPortal from './pages/DonorPortal';
import Donate from './pages/Donate';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donor-portal" element={<DonorPortal />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
