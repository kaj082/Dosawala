import "./App.css";
import React from "react";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router-dom";
// import Simple from "./Simple";

import Home from "./Home";
import Ourstory from "./Ourstory";
import Ourmenu from "./Ourmenu";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      {/* <AboutPage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-page" element={<AboutPage />} />
      </Routes>

      {/* <Router>
        <Route
          path="/AboutUs"
          element={
            <>
              <AboutPage />
            </>
          }
        />
      </Router> */}

      {/* <Simple /> */}
    </div>
  );
}

export default App;
