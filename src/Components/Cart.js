import React from 'react'
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import './Cart.css'
import { shopItems } from './getItems';
import './ItemDetails.css'


function Cart(props) {

  return (
    <div >
      <Helmet>
        <style>{'body { background-color: #eeeeee }'}</style>
      </Helmet>

      <div className='cart-screen'>

        <div className='shopping-cart'>
          <div className='cart-title'>
            <h4>Shopping Cart</h4>
            <hr />
          </div>
   
          <div className="cart-items">
            <div style={{ height: '98%' }}>
              <img src={shopItems.data[2].imageUrl} alt="" />
            </div>

            <div className='cart-details'>
              <h4>Bluetooth Speaker</h4>

              <div style={{ display: 'flex', marginLeft: '1rem' }}>
                <span style={{ fontWeight: '480', fontSize: '1.1rem' }}>Qty</span>
                <input style={{ marginLeft: '0.5rem', width: '8%', height: '1.5rem', marginTop: '0.2rem' }} type="number" />
              </div>

              <p style={{ maxHeight: '20vh', overflow: 'auto', margin: '0', maxWidth: '40vw', margin: '1.5rem 1rem 0 1rem' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque quidem eius tempore at aliquam esse explicabo obcaecati omnis sapiente sint quo ad minus libero in, illum corrupti voluptatem mollitia ipsum. Quis tempora expedita doloribus temporibus minus aliquid ipsum numquam aliquam eos voluptates omnis esse nihil accusamus quia asperiores facere architecto deserunt porro voluptatem, similique delectus fuga impedit accusantium libero? Soluta laudantium ad necessitatibus sequi nihil nisi dicta sint consequatur omnis. Magnam voluptatibus nulla hic optio dolorem delectus assumenda nihil eligendi aliquam ipsam dignissimos vel voluptates, fugit, at architecto sapiente! Recusandae neque natus harum repellendus alias porro ipsum eligendi ab fuga facere illo ducimus dolore ipsa reprehenderit saepe consectetur ut, inventore ex, deleniti distinctio dolor dicta quae accusamus error! Excepturi nesciunt hic doloribus, obcaecati maxime beatae quia laudantium qui necessitatibus id itaque quaerat natus eaque, nam nobis veniam? Repudiandae nostrum facere reiciendis aut possimus dignissimos, porro debitis aliquid unde earum.
              </p>

              <div style={{ display: 'flex'}}>

                <button className='itemdetails-button' style={{ backgroundColor: '#f50057', margin : '1rem', display : 'flex', position : 'relative'}}>
                  <svg style={{position : 'relative', left : '0.5rem' }}  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="30" height="30"
                    viewBox="0 0 30 30">
                    <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                  </svg>
                  <span className='itemdetails-addtocart' style={{ color: 'white', fontWeight: '500' }}>DELETE</span>
                </button>

                <h4 style={{color : 'black', marginTop : '1.2rem', marginLeft : '0rem'}}>₹ 999</h4>

              </div>

            </div>

          </div>

          
          

        </div>

      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anuj: state.value
  }
}

export default connect(mapStateToProps)(Cart)