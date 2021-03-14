function Navbar() {
    return (
        <nav id="navbar" className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">

            <div id="brand" className="navbar-brand">Liam Thaker</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    </li>
                </ul>
                <div className="navbar-text text-white">
                    Weather Dashboard | Genesys Assignment
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
