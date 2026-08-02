import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rights from './components/Rights';
import News from './components/News';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Rights />
      <News />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
