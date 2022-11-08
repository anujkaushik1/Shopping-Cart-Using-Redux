import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to="/"  >
                    <h2>Redux Shopping</h2>
                </Link>

                <Link to='/cart' style={{textDecoration : 'none'}}>
                    <div className='cart'>
                        <h3>Cart</h3>
                        <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="jajajajaj" />
                    </div>
                </Link>
            </nav>
        </>
    )
}

export default Navbar