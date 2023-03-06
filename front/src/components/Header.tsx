function Header(props: {}) {
    return (
        <nav
            className="navbar" 
            aria-label="First navbar example"
        >
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Test Application
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarsExample01"
                aria-controls="navbarsExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample01">
                <ul className="navbar-nav me-auto mb-2">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    About
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Header
