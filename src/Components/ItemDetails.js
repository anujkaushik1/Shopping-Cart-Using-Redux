import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import './ItemDetails.css'
import cart from '../images/basket-cart-icon-27.png';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function ItemDetails({ addCart }) {
    const location = useLocation();
    const item = location.state;
    const navigate = useNavigate();

    const addToCart = () => {
        addCart(item);
        navigate('/cart');
    }

    return (
        <div className='imagedetails-main'>
            <div className='imagedetails-img'>
                <img src={item.imageUrl} alt="" />
            </div>

            <div className="itemdetails-alldetails">
                <h1 style={{ fontWeight: '650', fontSize: '2.2rem' }}>{item.title}</h1>
                <h5 style={{ color: 'grey', marginTop: '2rem' }}>M.R.P. &nbsp; <span style={{ color: 'rgb(214, 48, 49)' }}>₹ {item.price}</span></h5>
                <h5 style={{ marginTop: '1.5rem', fontWeight: '500' }}>Description</h5>
                <p style={{ marginTop: '1rem', maxWidth: '40vw', lineHeight: '1.7rem' }}>{item.desc}</p>
                <button onClick={addToCart} className='itemdetails-button'>
                    <img id='itemdetails-cart-img' src={cart} alt="" />
                    <span className='itemdetails-addtocart'>ADD TO CART</span>
                </button>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCart: (item) => dispatch({ type: 'ADD_ITEMS', payload: item })
    }
}

export default connect(null, mapDispatchToProps)(ItemDetails);