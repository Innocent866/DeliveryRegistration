import React from 'react'
import '../style/Landing-page.css'
import Burger from '../assets/Burger image.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const LandingPage = () => {
  return (
    <div className='landing-page d-flex justify-content-evenly align-items-center bg-dark text-white'>
       <div className='landing-page-text'>
            <h1 className='text-center'>Delicious Deliveries, Delivered to your Doorstep!</h1>
            <p>Our mission is to bring the diverse flavors of your city to your table with the ease of a click. We partner with renowned local restaurants to ensure you experience the best the culinary world has to offer.</p>
           <div className='text-center '>
           <DropdownButton id="dropdown-item-button" title="SignUp/SignIn" variant=' w-50 bg-success'>
           <Dropdown.Item href="/Register" >Admin</Dropdown.Item>
            <Dropdown.Item href='#'>SuperAdmin</Dropdown.Item>
            </DropdownButton>
           </div>
        </div>
      <img src={Burger} alt=""/>
    </div>
  )
}

export default LandingPage