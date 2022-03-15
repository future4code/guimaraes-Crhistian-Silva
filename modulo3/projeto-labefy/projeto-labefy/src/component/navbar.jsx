import React from 'react'


const Navbar = () => {
    return (
        <>
        <a className="navbar-brand mx-auto fw-bold" href="/">Labefy</a>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Playlists</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Ciar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contato</a>
                            </li>
                        </ul><>
                        </>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
