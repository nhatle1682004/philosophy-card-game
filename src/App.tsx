import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { DeckBuilder } from './pages/DeckBuilder';
import { About } from './pages/About';
import { PhilosopherDetail } from './pages/PhilosopherDetail';
import { IntroDetail } from './pages/IntroDetail';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/card/:id" element={<PhilosopherDetail />} />
          <Route path="/deck" element={<DeckBuilder />} />
          <Route path="/about" element={<About />} />
          <Route path="/cach-hoc/:slug" element={<IntroDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}
