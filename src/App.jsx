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
      <BrowserRouter /*</React.StrictMode>basename="/Kasa">*/>
        <Header />
        <Routes>
          {/* This is a route definition. It tells the router to match the URL `/` and render the `<Home />` component */}
          <Route index path="/" element={<Home />} />
          {/* It tells the router to match the URL `/accommodation/:accommodationId` and render the component `<Accommodation />` */}
          <Route
                path="/accommodation/:accommodationId"
                element={<Accommodation />}
          />
          {/* Tells the router to match the `/a-propos` URL and render the `<APropos />` component */}
          <Route index path="/a-propos" element={<APropos />} />
          {/* Tells the router to match any URL and return the `<Error404 />` component. */}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;




