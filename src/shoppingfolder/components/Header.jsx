import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <div className=" headerSection row">
        <div className="left col-2">
            <div className="title">
                Shopping
            </div>
        </div>
        <div className="center col-4 ">
            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>
        </div>
        <div className="search col-4">
            <input type='text' placeholder='Search'/>
        </div>
        <div className="right col-2">
            <div className="signin">
                Signin /Signup
            </div>
            <div className="cart">
                Cart
            </div>
        </div>

      </div>
    </div>
  )
}

export default Header
