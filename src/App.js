import logo from './logo.svg';
import './diseno.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pantallas/Layout";
import Home from "./Pantallas/Home";
import Favoritos from "./Pantallas/Favoritos";
import Contacto from "./Pantallas/Contacto";
import MisCreaciones from "./Pantallas/MisCreaciones"
import InfoPersonal from "./Pantallas/InfoPersonal";
import NoPage from "./Pantallas/NoPage";
import { FavoritosProvider } from './Pantallas/FavoritosContext';

export default function App() {
  return (
    <FavoritosProvider>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/MisCreaciones" element={<MisCreaciones/>}/>
          <Route path="/Contacto" element={<Contacto/>} />
          <Route path="/Favoritos" element={<Favoritos/>}/>
          <Route path="/InfoPersonal" element={<InfoPersonal/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </FavoritosProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

