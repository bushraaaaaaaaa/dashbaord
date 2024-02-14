import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Fooddetail = () => {
  return (
    <div>fooddetail
        <div className="home-wrapper">
      <ul>
        <li>
          <Link to="/" className="home-link">
            dashboard
          </Link>
          <Link to="/chat" className="home-link">
            chat
          </Link>
          <Link to="/orderlist" className="home-link">
            order list
          </Link>
          <Link to="/customerdetail" className="home-link">
            customer details
          </Link>
          <Link to="/fooddetail" className="home-link">
            food details
          </Link>
          <Link to="/foods" className="home-link">
            foods
          </Link>
          <Link to="/orderdetails" className="home-link">
            order details
          </Link>
          <Link to="/review" className="home-link">
            review
          </Link>
          <Link to="/wallet" className="home-link">
            wallet
          </Link>

        </li>
      </ul>
    </div>
    </div>
  )
}

export default Fooddetail