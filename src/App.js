
import './App.css';
import logo from './assets/logo.svg'
import mark from './assets/check-mark.svg'
import playbutton from './assets/playbutton.svg'
import robustscaling from './assets/robustScaling.svg'
import bestselection from './assets/best-selection.svg'
import higherprofits from './assets/higherprofits.svg'
import linkarrow from './assets/link-arrow.svg'
import customproducts from './assets/custom-products.webp'
import fullfillment from './assets/fullfillment.webp'
import yourproduct from './assets/your-products.webp'
import robertVoltaire from './assets/robert-voltaire.webp'
import quintenBarney from './assets/quinten-barney.png'
import spencerBrett from './assets/spencer-brett.png'
import nikki from './assets/nikki.png'
import star from './assets/star.svg'
import facebookicon from './assets/icons/facebook-icon.svg'
import instagramicon from './assets/icons/instagram-icon.svg'
import linkdinicon from './assets/icons/linkedin-icon.svg'
import redditicon from './assets/icons/reddit-icon.svg'
import tiktokicon from './assets/icons/Tiktok-1.svg'
import xlogoicon from './assets/icons/X-Logo-Green.svg'
import youtubeicon from './assets/icons/youtube-icon.svg'
import downarrow from './assets/down-arrow.png'
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">




  <div className='header flex items-center justify-between p-4'>
    <img className='logo w-28' src={logo} alt="Logo" />

    {/* Menu Button (Hamburger Icon) */}
    <button className='menu-btn lg:hidden' onClick={toggleMenu}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    {/* Navigation Menu */}
    <ul className={`ul-list lg:flex gap-7 items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
      <li>Catalog</li>

      {/* How it Works Dropdown */}
      <div className='relative image-container'>
        <li className="flex items-center gap-1 cursor-pointer">
          How it works 
          <img className='icon-image w-4 h-4' src={downarrow} alt="" />
        </li>
        <div className="hover-card absolute top-full left-0 mt-2 p-3 bg-white shadow-lg hidden group-hover:block">
          <span>How Printify Works</span>
          <span>Print On Demand</span>
          <span>Printify Quality Promise</span>
          <span>What To Sell</span>
        </div>
      </div>

      <li>Pricing</li>
      <li>Blog</li>

      {/* Services Dropdown */}
      <div className='relative image-container'>
        <li className="flex items-center gap-1 cursor-pointer">
          Services 
          <img className='icon-image w-4 h-4' src={downarrow} alt="" />
        </li>
        <div className="hover-card absolute top-full left-0 mt-2 p-3 bg-white shadow-lg hidden group-hover:block">
          <span>Printify Studio</span>
          <span>Printify Express Delivery</span>
          <span>Transfer Product</span>
          <span>Order In Bulk</span>
          <span>Experts Program</span>
        </div>
      </div>

      {/* Use Cases Dropdown */}
      <div className='relative image-container'>
        <li className="flex items-center gap-1 cursor-pointer">
          Use-cases 
          <img className='icon-image w-4 h-4' src={downarrow} alt="" />
        </li>
        <div className="hover-card absolute top-full left-0 mt-2 p-3 bg-white shadow-lg hidden group-hover:block">
          <span>Merch For Fans</span>
          <span>Merch For eCommerce</span>
          <span>Merch For Enterprise</span>
          <span>Grow For Store</span>
        </div>
      </div>

      {/* Need Help Dropdown */}
      <div className='relative image-container'>
        <li className="flex items-center gap-1 cursor-pointer">
          Need help? 
          <img className='icon-image w-4 h-4' src={downarrow} alt="" />
        </li>
        <div className="hover-card absolute top-full left-0 mt-2 p-3 bg-white shadow-lg hidden group-hover:block">
          <span>Help Center</span>
          <span>Contact</span>
          <span>My Request</span>
        </div>
      </div>
    </ul>

    {/* Header Buttons */}
    <div className='header-btn flex gap-4'>
      <button className='login-btn text-lg'>Log in</button>
      <button className='signup-btn text-lg px-10'>Sign up</button>
    </div>
  </div>


      

      <div className=' main-banner'>
        <div className='main-banner-wrapper'>
        <h1 className='title'>Create and sell custom products</h1>
        <div className='check-mark py-3'>
          <div className='mark'> 
            <img className='markimg w-4 h-4 ' src={mark} alt="" />
             <span>100% Free to use</span>
             </div>
          <div className='mark'>
             <img className='markimg w-4 h-4 ' src={mark} alt="" />
              <span> 900+ High-Quality Products </span>
              </div>
          <div className='mark'> 
            <img className='markimg w-4 h-4 ' src={mark} alt="" />
             <span>Largest globle print network </span>
              </div>
        </div>
        <div className='main-banner-btn'>
          <button class='startbtn '>Start for free</button>
          <div className='playbtn  '><img className='w-4 h-4' src={playbutton} alt="" />How it work?</div>
        </div>
        <div style={{ color: "#39b75d", fontWeight: "bold" }} className='pt-5'>Trused by over 8m sellers around the world </div>
        </div>
       
      
      </div>
      <div className='features-wrapper flex justify-center flex flex-wrap gap-4  '>
        <div className='features' >
          <img className='w-32 h-32' src={higherprofits} alt="" />
          <span style={{ fontWeight: "bold" }}>Higher profit</span>
          <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business</p>
        </div>
        <div className='features'>
          <img className='w-32 h-32' src={robustscaling} alt="" />
          <span style={{ fontWeight: "bold" }}>Robust Scaling </span>
          <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality. </p>
        </div>
        <div className='features'>
          <img className='w-32 h-32' src={bestselection} alt="" />
          <span style={{ fontWeight: "bold" }}>Best Selection</span>
          <p>With 900+ products and top quality brands, you can choose the best products for your business. </p>
        </div>
      </div>
      <div className='how-its-work'>
        <h1 className='text-2xl font-semibold'>Easily add your design to a wide range of products</h1>
        <p> With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products. </p>
        <div className='flex items-center gap-3'>
          <a style={{ color: "#39b75d", fontWeight: "bold" }}>All products</a>
          <img className='w-4 h-4' src={linkarrow} alt="" />
        </div>
      </div>
      <div className='clothes  flex flex-wrap gap-4 '>
        <div className='clothe'>
          <img className='w-32 h-32' src={customproducts} alt="" />
          <div>
            <p style={{ color: "#39b75d", fontWeight: "bold" }}>CREATE</p>
            <p style={{ color: "#17262b", fontWeight: "bold" }}>custom product</p>
          </div>
          <p> Easily add your designs to a wide range of products using our free tools </p>
        </div>
        <div className='clothe'>
          <img className='w-32 h-32' src={yourproduct} alt="" />
          <div>
            <p style={{ color: "#39b75d", fontWeight: "bold" }}>SELL</p>
            <p style={{ color: "#17262b", fontWeight: "bold" }}>on your term</p>
          </div>
          <p>You choose the products, sale price, and where to sell</p>
        </div>
        <div className='clothe'>
          <img className='w-32 h-32 ' src={fullfillment} alt="" />
          <div>
            <p style={{ color: "#39b75d", fontWeight: "bold" }}>WE HANDLE</p>
            <p style={{ color: "#17262b", fontWeight: "bold" }}>fullfillment</p>
          </div>
          <p> Once an order is placed, we automatically handle all the printing and delivery logistics </p>
        </div>

      </div>
      <div className='talk-to-sales'>
        <h4 className='talktosales-text text-xl'>Are you a large business looking for custom solutions?</h4>
        <button className='talktosale-btn'>Talk to sales</button>
      </div>
      <div class='social-proof '>
      <div className='social-proof-wrapper  '>

        <div className='social-proof-heading  flex flex-wrap gap-4 '>
          <h1 className='social-proof-heading-h1 text-black-800 font-semibold' style={{ fontSize: "40px" }}>Trusted by over 8M sellers around the world</h1>
          </div>
          <div className='social-proof-heading'>
            <p> Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience. </p>
          </div>
        

      </div>
        <div class="slider flex flex-col gap-5 h-screen">
          <div class="slider-wrapper flex flex-wrap gap-4  ">

            <div class="card ">
              <div className='img-name-rating'>
                <img src={robertVoltaire} class='profile-img' alt="" />
                <div className='card-section'>
                  <div className='card-name'>
                    <h3 className='text-sm'>Robert A. Voltaire</h3>
                    <h3 className='text-sm'>Store link</h3>
                  </div>
                  <div class='rating'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>

                </div>
              </div>


              <p className="card-para"> Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!</p>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="card">
              <div className='img-name-rating'>
                <img src={quintenBarney} class='profile-img' alt="Image 2" />
                <div className='card-section'>
                  <div className='card-name'>
                    <h3 className='text-sm'>Quinten Barney</h3>
                    <h3 className='text-sm'>Etsy Merchant</h3>
                  </div>
                  <div class='rating'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>

                </div>
              </div>
              <p className="card-para"> We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.</p>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="card">
              <div className='img-name-rating'>
                <img src={spencerBrett} class='profile-img' alt="Image 3" />
                <div className='card-section'>
                  <div className='card-name'>
                    <h3 className='text-sm'>Nikki</h3>
                    <h3 className='text-sm'>store link</h3>
                  </div>
                  <div class='rating'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>

                </div>
              </div>

              <p className="card-para"> Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze</p>
            </div>

            {/* <!-- Card 4 --> */}
            <div class="card">
              <div className='img-name-rating'>
                <img src={nikki} class='profile-img' alt="Image 4" />
                <div className='card-section'>
                  <div className='card-name'>
                    <h3 className='text-sm'>Spencer, Brett, and Kyle</h3>
                    <h3 className='text-sm'>Store link</h3>
                  </div>
                  <div class='rating'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                  </div>
                </div>
              </div>
              <p className="card-para"> Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.</p>
            </div>
          </div>
      </div>
      </div>
      <div className='finacials'>
        <div className='finacials-wapper'>
          <div className='financials-title'>
            <h1 className='text-4xl font-semibold'>Make Money, Free-Risk</h1>
            <p>You pay for fulfillment only when you make a sale</p>
        </div>
        <div className='financials_explantion-table'>
          <div className='financials_explantion-table-row'>
            <span>You sell a t-shirt</span>
            <span>$ 30</span>
          </div>
          <div className='financials_explantion-table-row'>
            <span>You sell a t-shirt</span>
            <span>$ 12</span>
          </div>
          <div style={{borderTop:"1px solid #757c7e"}}></div>
          <div className='financials_explantion-your-profit'>
            <span>Your profit</span>
            <span>$ 18</span>
          </div>

          
        </div>
        <div className='start-selling'>
          <button className='start-selling-btn'>Start selling</button>
          <p style={{color:"#c4c7c8"}}>100% Free to use · 900+ Products · Largest print network</p>
        </div>
   
      </div>
    </div>
    <div className='footer-class'>
      <div className='footer-class-icon'>
      <div className='printfylogo'>
        <img className='logo' src={logo} alt="" />
      </div>
      <div className='icons'>
         <img className='footer-icon' src={facebookicon} alt="" />
         <img className='footer-icon' src={instagramicon} alt="" />
         <img className='footer-icon' src={linkdinicon} alt="" />
         <img className='footer-icon' src={xlogoicon} alt="" />
         <img className='footer-icon' src={youtubeicon} alt="" />
         <img className='footer-icon' src={tiktokicon} alt="" />
         <img className='footer-icon' src={redditicon} alt="" />

      </div>
      </div>
      
      <div className='footer-content  col--6 col--sm-1 col--lg-2'>
        <div className='footer-integration '>
          <div>
          <span className='font-semibold text-xl'>Integrations</span>
          </div>
        <div> <ul className='footer-lists'>
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>Presta Shop</li>
            <li>BigCommerce</li>
            <li>Wix</li>
            <li>WooCommerce</li>
            <li>Squarespace</li>
            <li>Printify API</li>
            <li>Printify Pop-Up Store</li>
            <li>Shutterstock</li>
          </ul></div>
       
        </div>
        <div className='footer-integration'>
          <div>
        <span className='font-semibold text-xl'>Discover</span>
          </div>
          <div>
        <ul className='footer-lists'>
            <li> Blog </li>
            <li> Guides </li>
            <li> Products </li>
            <li> Etsy print-on-demand </li>
            <li> Shopify print-on-demand </li>
            <li> Woocommerce print-on-demand </li>
            <li> Squarespace print-on-demand </li>
            <li> Brands </li>
            <li> Pricing </li>
            <li> Shipping Rates </li>
            <li> Mockup Generator</li>
            {/* <li>Printify Pop-Up Store</li>
            <li>Shutterstock</li> */}
          </ul>
          </div>
        </div>
        <div className='footer-integration'>
          <div>
        <span className='font-semibold text-xl'>Start selling</span> 
          </div> 
          <div>
        <ul className='footer-lists'>
            <li> Start selling </li>
            <li> Custom T-shirts </li>
            <li> Custom Hoodies </li>
            <li> Custom Mugs </li>
            <li> Custom Socks </li>
            <li> Custom Backpacks </li>
            <li> Custom Branding </li>
            <li> Sell on Etsy </li>
            <li> Sell on Social Media </li>
            <li>Free T-shirt Designs</li>
            <li>Free T-shirt Designs</li>
            <li> Custom All-Over-Print Hoodies </li>
            <li> Start a Clothing Line </li>
            <li> Start POD Business </li>
            <li> Bulk Orders </li>
            <li> Transfering To Printify </li>
          </ul>
          </div>
        </div>
        <div className='footer-integration'>
          <div><span className='font-semibold text-xl'>Printify</span></div>
          <div>
          <ul className='footer-lists'>
            <li> Print on Demand </li>
            <li> Print Providers </li>
            <li> Experts Program</li>
            <li> Printify Express Delivery </li>
            <li>Become a Partner </li>
            <li> About </li>
            <li> Printify Quality Promise </li>
            <li> Jobs </li>
            <li> Webinars </li>
            <li> Printing Profits Podcast </li>
            <li> Contact Us</li>
            <li> Affiliate </li>
            <li> Contact Sales </li>
            <li> POD Glossary </li>
            <li> Network Fulfillment Status</li>
            <li> Security </li>
             <li> Sitemap  </li>
        
          </ul>
          </div>
          
        </div>
       
      </div>

      <div className='footer-copyright'>
        <div className='copyrights'>
          <span>Intellectual Property Policy </span>
          <span>Terms of Service </span>
          <span>Privacy Policy </span>
          <span>Security</span>
        </div>
        <p> © 2024 Printify, Inc. All rights reserved. </p>
      </div>
      
     </div>
    </div>

 )
}
export default App;
