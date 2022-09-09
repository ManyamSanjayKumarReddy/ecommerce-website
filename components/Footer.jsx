import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <h5>Note : Our Services are only for the Indian Users and Only CARD Payments are accepted and for the UPI transactions contact us through mail or through any social media platforms.</h5>
      <p>© 2022 Tutorials with Sanju | All rights reserved</p>
      <p className="icons">
        <AiFillInstagram  />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer