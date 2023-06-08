import React from 'react'
import { useNavigate } from 'react-router-dom';
function Header() {
    const nevigate = useNavigate();
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
              <a className="navbar-brand fs-2 fw-bold  text-danger" href='/' >E-Commmerce</a>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                  <li className="nav-item">
                    <a className="nav-link fs-4 text-dark" aria-current="page"  onClick={() => nevigate('/addproduct') }>
                       Add Item 
                      <i className='fa fa-plus'></i>
                    </a>
                  </li>
                </ul>
                <button className="btn btn-success btn-lg" type="button" onClick={() => nevigate('/cart') }>
                    <i className='fa fa-cart-shopping me-2'></i>
                    Cart
                  </button>
              </div>
            </div>
       </nav>
      </header>
    </div>
  )
}

export default Header
