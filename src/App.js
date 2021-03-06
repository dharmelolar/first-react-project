
import React from 'react';
// import headerimg from './assets/header-img.png';
import category from './assets/CATAGORY.png';
// import Group1 from './assets/category-img1.png';
// import Group2 from './assets/category-img2.png';
// import Group3 from './assets/category-img3.png';
// import Group4 from './assets/category-img4.png';
import women1 from './assets/women1.png';
import women2 from './assets/women2.png';
import women3 from './assets/women3.png';
import women4 from './assets/women4.png';
import men1 from './assets/men1.png';
import men2 from './assets/men2.png';
import men3 from './assets/men3.png';
import men4 from './assets/men4.png';
import avone from './assets/avone.png';
// import banner from './assets/banner.png';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
          <div className="header">
              <h1>Your Logo</h1>
              <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>LOOKBOOK</li>
                <li>FEATURES</li>
                <li>PAGES</li>
                <li>BLOG</li>
             </ul>
             <div className="icons">
               <i class="lni lni-heart"></i>
               <i class="lni lni-search-alt"></i>
               <i class="lni lni-cart"></i>
             </div>
          </div>
          <div className="bgimage" >
              {/* <div className="bg-image-text">
                  <h4>NEW TRENDS</h4>
                  <h1>COLLUSION</h1>
                  <h4>An exclusive selection of this season's trends.</h4>
                  <button>DISCOVER</button>
                  <button>SHOP NOW</button>
              </div> */}
          </div>
          <div className="category">
            <img src={category} alt="category" />
          </div>
          <div className="women-category">
              <h3>WOMEN CATEGORY</h3>
              <p className="p-text">Shop our new arrivals from established brands</p>
              <div className="women-category-img">
                  <img src={women1} alt="women-catergory" />
                  <img src={women2} alt="women-catergory" />
                  <img src={women3} alt="women-catergory" />
                  <img src={women4} alt="women-catergory" />
              </div>
          </div>
          <div className="men-category">
              <h3>MEN CATEGORY</h3>
              <p className="p-text">Shop our new arrivals from established brands</p>
              <div className="men-category-img">
                  <img src={men1} alt="women-catergory" />
                  <img src={men2} alt="women-catergory" />
                  <img src={men3} alt="women-catergory" />
                  <img src={men4} alt="women-catergory" />
              </div>
          </div>
          <div className="avone">
            <h3>AVONE STYLES</h3>
            <p className="p-text">Choose Your Favourite Color</p>
            <div className="avone-img">
              <img src={avone} alt="avone-styles" />
            </div>
          </div>
          <div className="banner">
            {/* <img src={banner} alt="banner" /> */}
          </div>
          <div className="footer">
            <div className="left">
              <h1>YOUR LOGO</h1>
              <p>We earned a reputation of being good at what we do.</p>
              <p>Let us take your online shop to new dimension in </p>
              <p>success!</p>
              <p>Comilla, Bangladesh 3500</p>
              <p className="gmail">kawsarahmed0210@gmail.com</p>
              <p>01647470457</p>
              <i class="lni lni-facebook-oval"></i>
              <i class="lni lni-instagram"></i>
              <i class="lni lni-twitter-original"></i>
              <i class="lni lni-linkedin-original"></i>
            </div>
            <div className="right">
              <h1>RECEIVE EMAIL UPDATES</h1>
               <span> <input type="text" placeholder="Your Email Address"/></span>

              <div>
                   <h4>SHOP</h4>
                   <p>Shop</p>
                   <p>Collection</p>
                   <p>Outlet</p>
                   <p>Lookbook</p>
              </div>
              <div>
                   <h4>HELP</h4>
                   <p>FAQ</p>
                   <p>Privacy Policy</p>
                   <p>Terms and Conditions</p>
                   <p>Returns and Exchanges</p>
              </div>
              <div>
                   <h4>ABOUT</h4>
                   <p>Journal</p>
                   <p>Our Story</p>
                   <p>Contact</p>
                   <p>Store Location</p>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Copyright © 2020 . Your company name  All rights reserved</p>
          </div>
      </div>
    )
  }
}

export default App;
