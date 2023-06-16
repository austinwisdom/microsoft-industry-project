import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import UserPage from "./pages/UserPage/UserPage";
import ProfilesPage from "./pages/ProfilesPage/ProfilesPage";
import JorgePage from "./pages/JorgePage/JorgePage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/"  />
          <Route path="/user" element={<UserPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/profiles/jorge" element={<JorgePage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
