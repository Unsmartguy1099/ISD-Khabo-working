import { useEffect } from 'react';

const Detail2 = () => {

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
           <section data-bs-version="5.1" className="menu menu3 cid-tKxgPeZFhy" once="menu" id="menu3-x">
    
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

<section data-bs-version="5.1" className="features16 cid-tKxgPfohaO" id="features17-y">
    

    
    
    <div className="container-fluid">
        <div className="content-wrapper">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <div className="image-wrapper">
                        <img src="assets/images/mbr-1261x841.jpg" alt="Mobirise Website Builder"/>
                    </div>
                </div>
                <div className="col-12 col-lg">
                    <div className="text-wrapper">
                        <h6 className="card-title mbr-fonts-style display-5"><strong>Beef Steak</strong></h6>
                        <p className="mbr-text mbr-fonts-style mb-4 display-4">
                            This 20-minute recipe is done on the stovetop in one pan (no need to finish it in the oven). This is one of our favorite steak recipes and we make it year-round because it’s such a quick and convenient cooking method. That garlic butter is lip-smacking good! Read on for great tips on how to improve beef sustainability, reduce food waste and you will love our ideas for easy meal prep with leftover steak.</p>
                            <h6 className="card-title mbr-fonts-style display-5"><strong>Select the missing ingredients</strong></h6>
                                
                                <input type="checkbox" id="c1" value="c1"/> <label for="c1">  Black Pepper</label><br/>
                                <input type="checkbox" id="c2" value="c2"/> <label for="c2">  Garlic</label><br/>
                                <input type="checkbox" id="c3" value="c3"/> <label for="c3">  Onion</label><br/>
                                <input type="checkbox" id="c4" value="c4"/> <label for="c4">  Soy Sauce</label><br/>
                                <input type="checkbox" id="c5" value="c5"/> <label for="c5">  Minced Garlic</label><br/>
                            <div className="mbr-section-btn mt-3"><a className="btn btn-primary display-4" href="shop.html">
                                Search
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" className="footer3 cid-tKwAKEy8rF" once="footers" id="footer3-d">

    

    

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
                        <a href="" target="_blank">
                            <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="" target="_blank">
                            <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="" target="_blank">
                            <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="" target="_blank">
                            <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="" target="_blank">
                            <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                        </a>
                    </div><div className="soc-item">
                        <a href="" target="_blank">
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
  
  export default Detail2;