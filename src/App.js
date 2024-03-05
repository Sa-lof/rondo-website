import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Nosotros from "./routes/Nosotros";
import Servicios from "./routes/Servicios";
import Cine from "./routes/Cine";
import Teatro from "./routes/Teatro";
import Ficha from "./routes/FichaTecnica";
import Contacto from "./routes/Contacto";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cine" element={<Cine />} />
          <Route path="/teatro" element={<Teatro />} />
          <Route path="/ficha/:id" element={<Ficha />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
