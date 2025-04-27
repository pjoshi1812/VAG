import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Common/header';
import Footer from './components/Common/footer';
import RegistrationForm from './components/Pages/registration';
import LoginForm from './components/Pages/login';
import Home from './components/Pages/home';
import ArtistProfilePage from './components/Pages/ArtistProfilePage';
import Gallery from './components/Pages/gallery';
import ArtworkDetail from './components/Pages/ArtworkDetail.jsX';
import ProtectedRoute from './components/Common/ProtectedRoute';







const App = () => {
  return (
    <BrowserRouter>
      <Header />
     
      
      <Routes>
    
        <Route path="/" element={<Home />}/>
        <Route path="/gallery" element={<ProtectedRoute element={<Gallery />} />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/artistprofilepage' element={<ProtectedRoute element={<ArtistProfilePage />} allowedRole="artist" />} />
        <Route path="/artwork/:id" element={<ArtworkDetail/>}/>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
