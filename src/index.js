import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Movie from "./pages/Movie/Movie";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

axios.defaults.baseURL = "https://streaming-api-1.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "aplication/json";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
