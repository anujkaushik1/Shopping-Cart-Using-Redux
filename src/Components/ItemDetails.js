import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import './ItemDetails.css'

function ItemDetails() {
 const location = useLocation();
 const item = location.state;

  return (
    <>
        <div className='itemdetails-img'>
            
            <img src={item.imageUrl} alt="" />

        </div>
    </>
  )
}

export default ItemDetails