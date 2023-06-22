import './App.scss';
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner"
import About from "./components/About/About"
import Skills from './components/Skills/Skills';
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
     <Header />
     <HeroBanner />
     <About />
     <Skills />
     <Footer />
    </div>
  );
}

export default App;
