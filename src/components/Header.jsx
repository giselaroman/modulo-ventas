import logo from 'media/logo.png';



const Header = () => {
    return (
        <header>
            <ul className="navbar">
                <li>
                    <img src={logo} alt="imagen" className="logo" />
                </li>
                <li>
                    <button className="botonGenerico mainButton">Nuevo Post </button>
                </li>
                <li>
                    <div className="buscar">
                        <input placeholder="Buscar una raza" />
                        <i className="fas fa-search botonGenerico iconoBusqueda"></i>

                    </div>
                </li>
                <li className="botonGenerico secondaryButton">Login</li>
                <li className="botonGenerico mainButton">Registro</li>
            </ul>
        </header>
    );
}

export default Header;