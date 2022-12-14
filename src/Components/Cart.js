import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import './Cart.css'
import { shopItems } from './getItems';
import './ItemDetails.css'
import { coupons } from './getCoupons';


function Cart(props) {

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [couponDisplay, setCouponDisplay] = useState('none')
  const [enterCode, setEnterCode] = useState('');
  const [couponPercent, setCouponPercent] = useState(null);
  const [btnDisabled, setBtnDisabled] = useState(false);


  const styles = {

    couponDisplayStyle: {
      display: couponDisplay,
      position: 'relative',
      width: '100%',
      color: 'green',
      fontWeight: '600'
    }

  }

  const deleteItemCart = (item) => {
    props.deleteItem(item);
  }

  const incQuantity = (e, item) => {
    let val = e.target.value;
    val = parseInt(val);

    if (val < 1) {
      return;
    }

    item.count = val;
    props.incItem(item);

    updateUICount();

  }

  const updateUICount = () => {
    let newArr = [];
    newArr = [...props.anuj];
    let price = 0;

    newArr.map((e) => {
      price += e.price * e.count;
    })

    setTotalPrice(price);
  }

  const applyCode = () => {

    if (enterCode === '' || totalPrice === 0) {
      alert('Please enter coupon or add item first ');
      return;
    }

    for (const key of Object.keys(coupons)) {
      if (key === enterCode) {
        setCouponPercent(coupons[key])
        setCouponDisplay('flex')

        discountPrice(coupons[key])

        setBtnDisabled(true)

        return;
      }
    }

    alert('The Coupon is no longer available')

  }

  const discountPrice = (num) => {

      let amount = totalPrice * (num / 100);
      setTotalPrice(amount)

  }

  useEffect(() => {

    if (props.anuj) {
      let newArr = [];
      newArr = [...props.anuj];
      setCartItems(newArr);

      updateUICount();
    }

  }, [props.anuj]);

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


          {
            cartItems.length !== 0 &&
            cartItems.map((item, idx) => (
              <div key={idx} className="cart-items">
                <div style={{ height: '98%' }}>
                  <img src={item.imageUrl} alt="" />
                </div>

                <div className='cart-details'>
                  <h4>{item.title}</h4>

                  <div style={{ display: 'flex', marginLeft: '1rem' }}>
                    <span style={{ fontWeight: '480', fontSize: '1.1rem' }}>Qty</span>
                    <input disabled = {btnDisabled ? true : false} value={item.count} onChange={(e) => incQuantity(e, item)} style={{ marginLeft: '0.5rem', width: '8%', height: '1.5rem', marginTop: '0.2rem' }} type="number" />
                  </div>

                  <p style={{ maxHeight: '20vh', overflow: 'auto', margin: '0', maxWidth: '40vw', margin: '1.5rem 1rem 0 1rem' }}>
                    {item.desc}
                  </p>

                  <div style={{ display: 'flex' }}>

                    <button onClick={() => deleteItemCart(item)} className='itemdetails-button' style={{ backgroundColor: '#f50057', margin: '1rem', display: 'flex', position: 'relative', cursor: 'pointer' }}>
                      <svg style={{ position: 'relative', left: '0.5rem' }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 30 30">
                        <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
                      </svg>
                      <span className='itemdetails-addtocart' style={{ color: 'white', fontWeight: '500' }}>DELETE</span>
                    </button>

                    <h4 style={{ color: 'black', marginTop: '1.2rem', marginLeft: '0rem' }}>??? {item.price}</h4>

                  </div>

                </div>

              </div>
            ))
          }
        </div>

        <div className="cart-summary">
          <h4 style={{ fontWeight: '500' }}>Cart Summary</h4>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h5 style={{ margin: '0' }}>Subtotal : {totalPrice} <span style={{ fontWeight: '500' }}>??? { }</span> </h5>
          </div>

          <div style={styles.couponDisplayStyle}>
            <h5 htmlFor="fname" style={{ position: 'absolute', left: '1rem', border: 'none', margin: '0', fontWeight: '500' }}>Congratulations, you got {couponPercent} off !</h5>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', marginTop: '2rem' }}>
            <label htmlFor="fname" style={{ position: 'relative', marginLeft: '1rem', border: 'none' }}>Enter Code : </label>
          </div>
          <div style={{ display: 'flex', position: 'relative', width: '100%' }}>
            <input value={enterCode} onChange={(e) => setEnterCode(e.target.value)} style={{ width: 'fit-content', height: 'fit-content', position: 'relative', marginLeft: '1rem' }} id="fname" name="fname" type="text" />
            <button disabled = {btnDisabled ? true : false} onClick={applyCode} style={{ height: '8vh', width: '5vw', marginTop: '-1.5rem', marginLeft: '1.3rem', backgroundColor: 'white', borderColor: 'lightgray', boxShadow: 'none', cursor: 'pointer' }}>
              <span>APPLY</span>
            </button>
          </div>

          <button style={{ backgroundColor: '#3f51b5', marginTop: '1rem', height: '6vh', width: '12vw', borderRadius: '8px', borderColor: 'white', cursor: 'pointer' }}>
            <span style={{ color: 'white', fontWeight: '400' }}>PROCEED TO PAY</span>
          </button>

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

const mapDispatchToProps = (dispatch) => {
  return {
    incItem: (item) => dispatch({ type: 'INC_ITEM', payload: item }),
    deleteItem: (item) => dispatch({ type: 'DELETE_ITEM', payload: item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)