import { Link } from "react-router-dom";


function Nav () {
    return (
        <nav>
<ul>
<li>
    <Link to="/historial">Historial</Link>
    <Link to="/">Inicio</Link>
</li>

</ul>
        </nav>
    ) 
}


export default Nav;