import './Comp-styles.css'
import logo from './component-resources/logo.png'  //
import dashboard from './component-resources/Dashbaord.png'  //



function Header() {
    return (
        <nav className="navbar navbar-expand-lg py-4" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">
                    Fitted
                    <img className="ms-3 pb-1" src={logo} alt="" />
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link ps-3 pe-5 py-1 fs-6 text-start" href="/">
                                <img src={dashboard} alt="dashboard" className='me-3' />
                                Your exercises</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;

