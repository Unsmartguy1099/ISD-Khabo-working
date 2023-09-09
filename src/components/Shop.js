import { useEffect } from 'react';

const Shop = () => {

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'assets/bootstrap/js/bootstrap.bundle.min.js'; 
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'assets/smoothscroll/smooth-scroll.js'; 
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = 'assets/ytplayer/index.js'; 
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = 'assets/embla/embla.min.js'; 
    script4.async = true;
    document.body.appendChild(script4);

    const script5 = document.createElement('script');
    script5.src = 'assets/embla/script.js'; 
    script5.async = true;
    document.body.appendChild(script5);

    const script6 = document.createElement('script');
    script6.src = 'assets/theme/js/script.js'; 
    script6.async = true;
    document.body.appendChild(script6);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
    };
  }, []); 

    return (
      <div >
           <section data-bs-version="5.1" className="menu menu3 cid-tKxgPeZFhy" once="menu" id="menu3-10">
    
    <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg container-fluid">
        <div className="container-fluid">
            <div className="navbar-brand">
                
                <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-5" href="index.html">KHABO</a></span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true"><li className="nav-item"><a className="nav-link link text-black text-primary display-4" href="index.html">Home</a></li><li className="nav-item"><a className="nav-link link text-black text-primary display-4" href="description.html">Recipe</a></li>
                    <li className="nav-item"><a className="nav-link link text-black text-primary display-4" href="ingredients.html">Ingredients</a></li>
                    <li className="nav-item"><a className="nav-link link text-black text-primary display-4" href="addRecipe.html">Create</a>
                    </li></ul>
                <div className="icons-menu">
                    <a className="iconfont-wrapper" href="https://mobiri.se" target="_blank">
                        <span className="p-2 mbr-iconfont socicon-facebook socicon"></span>
                    </a>
                    <a className="iconfont-wrapper" href="https://www.youtube.com/watch?v=kY4_WdqhLQ4" target="_blank">
                        <span className="p-2 mbr-iconfont socicon-youtube socicon"></span>
                    </a>
                    
                    
                </div>
                <div className="navbar-buttons mbr-section-btn"><a className="btn btn-success display-4" href="signUp.html">
                        Sign up</a></div>
            </div>
        </div>
    </nav>
</section>

<section data-bs-version="5.1" className="features3 cid-tKxiaRXhUx" id="features3-12">
    
    
    <div className="container">
        <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Shops</strong></h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Browse The Shops Containing Your Required Ingredients</h5>
        </div>
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-4 active">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/organic-red-chili-chilli-sukna-morich-powder-gura-vorpur-bd-bangladesh-641x458.png" alt="Mobirise Website Builder"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Chili Powder : Agora</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get the reddest and hottest chili powder from Agora.</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-210059-505x366.png" alt="Mobirise Website Builder"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Olive Oil : Chaldal</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Premium quality Olive oil directly imported from Spain. Only in Chaldal.</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-205816-566x414.png" alt="Mobirise Website Builder" data-slide-to="2" data-bs-slide-to="2"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Garlic : Chaldal</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Fresh garlic now available in Chaldal in affordable price.</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div><div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-205922-583x391.png" alt="Mobirise Website Builder" data-slide-to="3" data-bs-slide-to="3"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Boneless Beef : Foodpanda</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get best quality meat from Foodpanda. Directly from firm.</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div><div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-205626-665x472.png" alt="Mobirise Website Builder" data-slide-to="4" data-bs-slide-to="4"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Whole Pepper : Chaldal</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Crispy whole pepper. Available at Chaldal.</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" className="features3 cid-tKxibvFJUM" id="features3-13">
    
    
    <div className="container">
        <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Vouchers</strong></h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Browse The Vouchers Giving Discounts to Your Required Ingredients</h5>
        </div>
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/jm-grocery-voucher-square-ad-medium-1-768x768.jpeg" alt="Mobirise Website Builder"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Chili Powder (50% off)</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get 50% off in Chili Powder at Chaldal using this voucher</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/groceries-offers-2-720x360.jpeg" alt="Mobirise Website Builder"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Olive Oil (90% off)</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get 90% off in Chili Olive Oil at Agora using this voucher</p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-210807-490x366.png" alt="Mobirise Website Builder"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Garlic (10% off)</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get 10% off in Garlic at Chaldal using this voucher<br/></p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div><div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-232903-210x144.png" alt="Mobirise Website Builder" data-slide-to="3" data-bs-slide-to="4"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Boneless Beef (20% off)</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get 20% off in Boneless Beef at Foodpanda using this voucher<br/></p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div><div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-25-232850-455x451.png" alt="Mobirise Website Builder" data-slide-to="4" data-bs-slide-to="4"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Whole Pepper (50% off)</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get 50% off in Chili Powder at Chaldal using this voucher<br/></p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div><div className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/22-23-grocery-vouchers-ig-post-815x815.png" alt="Mobirise Website Builder" data-slide-to="5" data-bs-slide-to="6"/>
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Onion (5% off)</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">Get 5% off in Onion at Agora using this voucher<br/></p>
                    </div>
                    <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn btn-primary item-btn display-7" target="_blank">Learn More
                            &gt;</a></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" className="footer3 cid-tKxgPfLjrR" once="footers" id="footer3-11">

    

    

    <div className="container">
        <div className="media-container-row align-center mbr-white">
            <div className="row row-links">
                <ul className="foot-menu">
                    
                    
                    
                    
                    
                <li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">About us</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Services</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Contact Us</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Careers</a>
                    </li><li className="foot-menu-item mbr-fonts-style display-7">
                        <a className="text-white" href="#" target="_blank">Work</a>
                    </li></ul>
            </div>
            <div className="row social-row">
                <div className="social-list align-right pb-2">
                    
                    
                    
                    
                    
                    
                <div className="soc-item">
                        <a href="https://twitter.com/mobirise" target="_blank">
                            <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.facebook.com/pages/Mobirise/1616226671953247" target="_blank">
                            <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.youtube.com/c/mobirise" target="_blank">
                            <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://instagram.com/mobirise" target="_blank">
                            <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://plus.google.com/u/0/+Mobirise" target="_blank">
                            <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="https://www.behance.net/Mobirise" target="_blank">
                            <span className="socicon-behance socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div></div>
            </div>
            <div className="row row-copirayt">
                <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                    © Copyright 2023 Team Khabo. All Rights Reserved.
                </p>
            </div>
        </div>
    </div>
    </section>
      </div>
    );
  };
  
  export default Shop;