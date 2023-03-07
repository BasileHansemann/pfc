import { NavLink, Link } from "react-router-dom";
import "./styles.scss";

function NavBar() {
    return (
        <nav className="navBar">
            <Link to="/" className="navBar-lien"> Accueil </Link>
            <Link to="/classique" className="navBar-lien"> version classique </Link>
            <Link to="/speciale" className="navBar-lien"> version speciale </Link>
        </nav>
    );
}

export default NavBar;