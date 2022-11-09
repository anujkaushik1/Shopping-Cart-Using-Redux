import React from 'react'
import { connect } from 'react-redux';

function Cart(props) {
  console.log(props.anuj);
  return (
    <div>


    </div>
  )
} 

const mapStateToProps = (state) => {
    return {
        anuj : state.value
    }
}

export default connect(mapStateToProps)(Cart)