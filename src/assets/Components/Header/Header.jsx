import React from "react";
import "./header.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const getFav = () => {
    navigate("/favorites"); 
  };

  const getSign = () => {
    navigate("/sign"); 
  };
  const getAtToBasket = () =>{
    navigate('/basket')
  }
  return (
    <header>
      <div className="upHeader">
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
        <div className="socialHeader">
          <ul>
            <li onClick={getFav}>
              <a href="">My Wishlist</a>
            </li>
            <li>
              <a href="">Track Your Order</a>
            </li>
          </ul>
          <ul id="social">
            <li>
              <a>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                <FiInstagram />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a>
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a>
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainHeader">
        <a href="/">
        <img 
          src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
          alt=""
        />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">Baby Collection</a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="moreFeatures">
          <a href="#">
            <CiSearch />
          </a>
          <a href="#" className="user-link">
            <FaUserAlt />
          </a>
          <div className="registers">
            <button onClick={getSign}>Sign Up</button>
            <button>Login</button>
          </div>
          <a href="#">
            <SlBasket onClick={getAtToBasket} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
