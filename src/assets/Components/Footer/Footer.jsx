import React from "react";
import "./footer.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer>
      <div className="footerPart">
        <div className="upFooter">
          <div className="textUpFooter">
            <p>Subscribe Newsletter</p>
            <p>Subscribe newsletter to get 5% on all products.</p>
          </div>
          <div className="email">
            <input type="text" placeholder="Enter Your Email" />
            <button>
              <a href="">Subscribe</a>
            </button>
          </div>
          <div className="socialFooter">
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FiInstagram />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="downFooter">
          <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png.webp" alt="" />
          <ul>
            <span>Shop Men</span>
            <li>
              <a href="">Clothing Fashion</a>
            </li>
            <li>
              <a href="">Winter</a>
            </li>
            <li>
              <a href="">Summer</a>
            </li>
            <li>
              <a href="">Formal</a>
            </li>
            <li>
              <a href="">Casual</a>
            </li>
          </ul>
          <ul>
            <span>Shop Women</span>
            <li>
              <a href="">Clothing Fashion</a>
            </li>
            <li>
              <a href="">Winter</a>
            </li>
            <li>
              <a href="">Summer</a>
            </li>
            <li>
              <a href="">Formal</a>
            </li>
            <li>
              <a href="">Casual</a>
            </li>
          </ul>
          <ul>
            <span>Baby Collection</span>
            <li>
              <a href="">Clothing Fashion</a>
            </li>
            <li>
              <a href="">Winter</a>
            </li>
            <li>
              <a href="">Summer</a>
            </li>
            <li>
              <a href="">Formal</a>
            </li>
            <li>
              <a href="">Casual</a>
            </li>
          </ul>
          <ul>
            <span>Quick Links</span>
            <li>
              <a href="">Track Your Order</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Carrier</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
