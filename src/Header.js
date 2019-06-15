import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <h1 className='site-heading text-center text-white d-none d-lg-block'>      
                <img src='img/logo.png' />
            </h1>
            <nav className='navbar navbar-expand-lg navbar-dark py-lg-4' id='mainNav'>
            <div className='container'>
                <a className='navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none' href='#'>Asilo Melhor Idade</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav mx-auto'>
                    <li className='nav-item active px-lg-4'>
                        <Link to='/' className='nav-link text-uppercase text-expanded'>
                            Início
                        </Link>
                    </li>
                    <li className='nav-item px-lg-4'>
                        <Link to='/sobre' className='nav-link text-uppercase text-expanded' >
                            Sobre
                        </Link>
                    </li>
                    <li className='nav-item px-lg-4'>
                        <Link to='/campanhas' className='nav-link text-uppercase text-expanded' >
                            Campanhas
                        </Link>
                    </li>
                    <li className='nav-item px-lg-4'>
                        <Link to='/contato' className='nav-link text-uppercase text-expanded' >
                            Contato
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header