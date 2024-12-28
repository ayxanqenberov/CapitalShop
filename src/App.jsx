import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Home/Home';
import FavoritePage from './assets/Pages/FavPage/FavoritePage';
import Sign from './assets/Pages/RegiterPages/SignUp/Sign';
import Detail from './assets/Pages/Details/Detail';
import Basket from './assets/Pages/Basket/Basket';
import './index.css'

const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={'/favorites'} element={<FavoritePage />} />
        <Route path={'/sign'} element={<Sign />} /> 
        <Route path={`/detail`} element={<Detail/>}/>
        <Route path={'/basket'} element={<Basket/>}/>
      </Routes>
    </Router>
  );
};

export default App;
