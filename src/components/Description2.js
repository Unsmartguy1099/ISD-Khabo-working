import { useEffect } from 'react';

const Description2 = () => {
 
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
      <div>
          <section data-bs-version="5.1" className="menu menu3 cid-tKwAKDXI0l" once="menu" id="menu3-b">
    
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

<section data-bs-version="5.1" className="form4 cid-tKwAKEhL1Y mbr-fullscreen" id="form4-c">

    

    

    <div className="container-fluid">
        <div className="row content-wrapper justify-content-center">
            <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
                <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="mXNqtBuLFydpKtvfsOG+rj5e6CnopzrNv1jpSiXFnl339IbyNqBiJcRQSfviUJWzTMndB8TcBUvrlBHio7FqRRXpPLi7dkc+7hREqTM2/idPZJGo3wA3bGYZ79yMoo4O" />
                    <div className="row">
                        <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div className="dragArea row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="mbr-section-title mb-4 display-2"><strong>Recipe Description:</strong></h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">Give a relevant name for the food you want to search for. And give a brief description of the recipe and ingredients.</p>
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="name">
                            <input type="text" name="name" placeholder="Name" data-form-field="name" className="form-control" value="" id="name-form4-c" />
                        </div>
                        <div className="col-lg-12 col-md col-12 form-group mb-3" data-for="email">
                            <textarea id="txtid" className="form-control" name="txtname" rows="4" cols="50" maxlength="200" placeholder="Give The Recipe Description"></textarea>
                        </div>
                        <div className="col-12 col-md-auto mbr-section-btn"><a className="btn btn-secondary display-4" href="description-2.html#gallery3-e">Search!</a></div>
                    </div>
                </form>
            </div>
            <div className="col-lg-7 offset-lg-1 col-12">
                <div className="image-wrapper">
                    <img className="w-100" src="assets/images/mbr-3.jpg" alt="Mobirise Website Builder" />
                </div>
            </div>
        </div>
    </div>
</section>

<section data-bs-version="5.1" className="gallery3 cid-tKx3oXA3bg" id="gallery3-u">
    
    
    <div className="container-fluid">
        <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Found Recipes</strong></h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">Here is all the recipes we have found with your description:</h5>
        </div>
        <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-20-233401-630x594.png" alt="Mobirise Website Builder" />
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7">
                            <strong>Chicken Provencal</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">
                            Chicken Provencal is a regional French recipe that can take on many forms. There is no one absolute recipe for Chicken Provencal. <a href="details-2.html" className="text-primary">Read more..</a></p>
                    </div>
                    
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/simply-recipes-fried-green-tomato-lead-4b-7ba7280edfaa462a9ac76863112a973f-1.webp" alt="Mobirise Website Builder" />
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Fried Tomatoes</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">
                            Curious as usual, we found some big green tomatoes at the farmers market last weekend and just had to try these fried green tomatoes.&nbsp;<a href="details-2.html" className="text-primary">Read more..</a></p>
                    </div>
                    
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-20-233411-628x523.png" alt="Mobirise Website Builder" />
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Meat Balls</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">
                            To keep the meatballs as moist as possible, I start with a mixture of baking soda and lemon juice.&nbsp;<a href="details-2.html" className="text-primary">Read more..</a></p>
                    </div>
                    
                </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-20-233421-629x510.png" alt="Mobirise Website Builder" title="" />
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Veggie Tacos</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">
                            The key to the overall taste is the addition at the end of cotija cheese, a Mexican cheese that is salty and crumbly, much like Greek feta. <a href="details-2.html" className="text-primary">Read more..</a></p>
                    </div>
                    
                </div>
            </div><div className="item features-image сol-12 col-md-6 col-lg-3">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src="assets/images/screenshot-2023-07-20-233337-633x575.png" alt="Mobirise Website Builder" title="" data-slide-to="4" data-bs-slide-to="5" />
                    </div>
                    <div className="item-content">
                        <h5 className="item-title mbr-fonts-style display-7"><strong>Smashburger</strong></h5>
                        
                        <p className="mbr-text mbr-fonts-style mt-3 display-7">
                            The Smashburger is cooked over high heat with a lot of pressure, which helps the beef develop a deep, rich crust.  <a href="details-2.html" className="text-primary">Read more..</a></p>
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
  
  export default Description2;