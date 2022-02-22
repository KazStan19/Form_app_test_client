
import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AddComment } from "./components/Comment";
import { Header } from "./components/Header";
import { MainPage } from "./components/Main";
import { AddPost } from "./components/Post";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      
      <Header/>

      <Routes>

        <Route path="/" element={<MainPage/>}/>
        <Route path="/post" element={<AddPost/>}/>
        <Route path="/comment/:postID" element={<AddComment/>}/>

      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
