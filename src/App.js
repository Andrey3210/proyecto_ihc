import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IniciarSesion from './Component/IniciarSesion';
import MenuPrincipal from './Component/MenuPrincipal';
import Registro from './Component/Registro';
import Cines from './Component/Cines';
import Dulceria from './Component/Dulceria';
import Social from './Component/Social';
import DetallePelicula from './Component/DetallePelicula';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/menuPrincipal" element={<MenuPrincipal />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/cines" element={<Cines />} />
        <Route path="/dulceria" element={<Dulceria />} />
        <Route path="/social" element={<Social />} />
        <Route path="/menuPrincipal/detallePelicula" element={<DetallePelicula />} />
      </Routes>
    </Router>
  );
}

export default App;
