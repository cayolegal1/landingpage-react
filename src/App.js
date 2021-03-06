import './App.scss';
import {useEffect} from 'react';
import ReactGa from 'react-ga';
import Header from './componentes/Header/Header';
import Hero from './componentes/Hero/Hero';
import About from './componentes/About/About';
import Products from './componentes/Products/Products';
import Services from './componentes/Services/Services';
import Contact from './containers/Contact/Contact';
import Footer from './componentes/Footer/Footer';


const App =() => {

  useEffect( 
    () => {
      ReactGa.initialize("G-QLR6PC1TVJ")

      ReactGa.pageview('/')
    }
  )

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
