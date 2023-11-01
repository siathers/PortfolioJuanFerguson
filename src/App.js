import logo from './logo.svg';
import './diseno.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pantallas/Layout";
import Home from "./Pantallas/Home";
import Favs from "./Pantallas/Favs";
import NoPage from "./Pantallas/PaginaNoEncontrada";
import Contacto from "./Pantallas/Contacto";
import MisCreaciones from "./Pantallas/MisCreaciones"
import InfoPersonal from "./Pantallas/InfoPersonal";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/MisCreaciones" element={<MisCreaciones/>}/>
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Favs" element={<Favs/>}/>
          <Route path="/InfoPersonal" element={<InfoPersonal/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

