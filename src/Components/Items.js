import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { shopItems } from './getItems'
import './Items.css'

function Items() {

  const [items, setItems] = useState(null);
  const navigate = useNavigate();

  const viewItemClick = (item, idx) => {
      idx ++;
    navigate(`/product/${idx}`, {state : item});

  } 

  const addToCart = ()=> {
    navigate('/cart');
  }

  useEffect(() => {

    if (shopItems) {
      setItems(shopItems);
    }

  }, [])


  return (
    <>
      {
        items !== null &&
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '4rem' }}>
          {
            items.data.map((item, idx) => (
              <div key={idx} className="w3-hover-shadow w3-card card-items">
                <img className='items-img' src={item.imageUrl} alt="" />
                <h3 style={{margin : '1rem'}}>{item.title}</h3>
                <p className='items-desc'>{item.desc}</p>
                <h3 style={{textAlign : 'center'}}>{item.price} ₹</h3>

                <div className='items-button'>
                  <button onClick={()=>viewItemClick(item, idx)}>VIEW ITEM</button>
                  <button onClick={()=> addToCart()}>ADD TO CART</button>
                </div>

              </div>
            ))
          }
        </div>
      }

    </>
  )
}

export default Items