import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
            price={499.95}
            image="https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC27F398FWNXZA Samsung C27F398 27 Inch Curved LED Monitor"
            price={174.79}
            image="https://images-na.ssl-images-amazon.com/images/I/91SZVWfPjdL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            price={98.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81FH2j7EnJL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
            price={836.18}
            image="https://images-na.ssl-images-amazon.com/images/I/81B0xCF%2BPWL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
