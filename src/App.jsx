import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import Home from './pages/Home/Home'
import Error404 from './pages/Error404/Error404'
import APropos from './pages/A-Propos/A-Propos'
import Accommodation from './pages/Accommodation/Accommodation'


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter 
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route
                path="/accommodation/:accommodationId"
                element={<Accommodation />}
          />
          <Route index path="/a-propos" element={<APropos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;




