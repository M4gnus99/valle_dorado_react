import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
function Sidebar() {
    return (
        <>
            <ul className="navbar-nav fondo-dash sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-25" src={logo} alt="Valle Dorado"></img>
                    </div>
                </a>

                <hr className="sidebar-divider my-0"></hr>

                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home - Valle Dorado</span></Link>
                </li>

                <hr className="sidebar-divider"></hr>

                <div className="sidebar-heading">Actions</div>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/products">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Usuarios</span></Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"></hr>
            </ul>
        </>
    )
}
export default Sidebar