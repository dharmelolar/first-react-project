
import React from 'react';
// import headerimg from './assets/header-img.png';
import Group1 from './assets/category-img1.png';
import Group2 from './assets/category-img2.png';
import Group3 from './assets/category-img3.png';
import Group4 from './assets/category-img4.png';
import women1 from './assets/women1.png';
import women2 from './assets/women2.png';
import women3 from './assets/women3.png';
import women4 from './assets/women4.png';
import men1 from './assets/men1.png';
import men2 from './assets/men2.png';
import men3 from './assets/men3.png';
import men4 from './assets/men4.png';
// import avone from './assets/avone.png';
import banner from './assets/banner.png';
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
              {/* <img src={headerimg} alt="header" /> */}
             <h1>geeeeeeeeeeeeeeelkjbgh</h1>
          </div>
          <div className="category">
             <div>
                <img src={Group3} alt="category"className="group3" />
                <img src={Group4} alt="category" className="group4" />
                <img src={Group2} alt="category" className="group2" />
             </div>
              <img src={Group1} alt="category" className="group" />
          </div>
          <div className="women-category">
              <h3>WOMEN CATEGORY</h3>
              <p>Shop our new arrivals from established brands</p>
              <div className="women-category-img">
                  <img src={women1} alt="women-catergory" />
                  <img src={women2} alt="women-catergory" />
                  <img src={women3} alt="women-catergory" />
                  <img src={women4} alt="women-catergory" />
              </div>
          </div>
          <div className="men-category">
              <h3>MEN CATEGORY</h3>
              <p>Shop our new arrivals from established brands</p>
              <div className="men-category-img">
                  <img src={men1} alt="women-catergory" />
                  <img src={men2} alt="women-catergory" />
                  <img src={men3} alt="women-catergory" />
                  <img src={men4} alt="women-catergory" />
              </div>
          </div>
          <div>
            <h3>AVONE STYLES</h3>
            <p>Choose Your Favourite Color</p>
            {/* <img src={avone} alt="avone-styles" /> */}
          </div>
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
          <div className="footer">
            <div className="left">
              <h1>YOUR LOGO</h1>
              <p>We earned a reputation of being good at what we do.</p>
              <p>Let us take your online shop to new dimension in </p>
              <p>success!</p>
              <p>Comilla, Bangladesh 3500</p>
              <p>kawsarahmed0210@gmail.com</p>
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
                   <p>SHOP</p>
                   <p>Shop</p>
                   <p>Collection</p>
                   <p>Outlet</p>
                   <p>Lookbook</p>
              </div>
              <div>
                   <p>HELP</p>
                   <p>FAQ</p>
                   <p>Privacy Policy</p>
                   <p>Terms and Conditions</p>
                   <p>Returns and Exchannges</p>
              </div>
              <div>
                   <p>ABOUT</p>
                   <p>Journal</p>
                   <p>Our Story</p>
                   <p>Contact</p>
                   <p>Store Location</p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
