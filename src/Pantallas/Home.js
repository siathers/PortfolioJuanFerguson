import {Outlet, Link } from "react-router-dom";
import '../diseno.css';
import Destacados from './Destacados';
import { addToFavorites, removeFromFavorites } from './Favs';

const Home = () => {
    return (
        <div>
      <h1>Bienvenido a mi página web</h1>
      <h2>Mis creaciones destacadas</h2>
        <Destacados/>
    </div>
        )
    };
    
export default Home;