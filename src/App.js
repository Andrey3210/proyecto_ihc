import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IniciarSesion from './Component/IniciarSesion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/menuPrincipal" element={<IniciarSesion />} />
        <Route path="/registro" element={<IniciarSesion />} />
      </Routes>
    </Router>
  );
}

export default App;
