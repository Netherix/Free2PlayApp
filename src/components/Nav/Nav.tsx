import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" to="/home">Free2Play
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link 
                                className="nav-link active" aria-current="page" to="/signin">Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" to="/signup">Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Nav;
