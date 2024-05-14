import './Comp-styles.css'
import logo from './component-resources/logo.png'  //
import dashboard from './component-resources/Dashbaord.png'  //
import { Link } from 'react-router-dom';



function Header() {
    return (
        <nav className="navbar navbar-expand-lg py-4" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/">
                    Fitted
                    <img className="ms-3 pb-1" src={logo} alt="" />
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link ps-3 pe-5 py-1 fs-6 text-start" to="/">
                                <img src={dashboard} alt="dashboard" className='me-3' />
                                Your exercises</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

