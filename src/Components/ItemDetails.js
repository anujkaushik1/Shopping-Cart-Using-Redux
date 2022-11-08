import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import './ItemDetails.css'

function ItemDetails() {
 const location = useLocation();
 const item = location.state;

  return (
        <div className='imagedetails-main'>
                <div className='imagedetails-img'>
                    <img src={item.imageUrl} alt="" />
                </div>  

                <div className="itemdetails-alldetails">
                    <h1 style={{fontWeight : '650', fontSize : '2.2rem'}}>{item.title}</h1>
                    <h2 style={{color:'blue'}}>M.R.P. <span style={{color : 'yellow'}}>Hello</span></h2>
                </div>
        </div>
  )
}

export default ItemDetails