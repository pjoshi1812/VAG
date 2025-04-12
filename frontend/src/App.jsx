import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Common/header';
import Footer from './components/Common/footer';
import RegistrationForm from './components/Pages/registration';
import LoginForm from './components/Pages/login';
import Home from './components/Pages/home';


//const Home = () => <h1 className="p-4">Welcome to Home Page</h1>;
const About = () => <h1 className="p-4">About Us</h1>;
const Contact = () => <h1 className="p-4">Contact Us</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
     
      
      <Routes>
    
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
