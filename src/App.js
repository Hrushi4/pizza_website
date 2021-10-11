import React ,{useEffect}from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import OneSignal from 'react-onesignal';



function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "6a562109-7349-4306-bef1-eb3728d7ede5"
    });
  }, []);
  return (
  
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
