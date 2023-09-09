import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AddRecipe from './components/AddRecipe';
import Description2 from './components/Description2';
import Description from './components/Description';
import Detail from './components/Detail';
import Detail2 from './components/Detail2.js';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Ingredients from './components/Ingredients';
import Ingredients2 from './components/Ingredients2';
import Shop from './components/Shop';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/AddRecipe" element={<AddRecipe/>}/>
            <Route exact path="/Description" element={<Description/>}/>
            <Route exact path="/Description2" element={<Description2/>}/>
            <Route exact path="/Detail" element={<Detail/>}/>
            <Route exact path="/Detail2" element={<Detail2/>}/>
            <Route exact path="/Ingredients" element={<Ingredients/>}/>
            <Route exact path="/Ingredients2" element={<Ingredients2/>}/>
            <Route exact path="/Shop" element={<Shop/>}/>
            <Route exact path="/SignUp" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
