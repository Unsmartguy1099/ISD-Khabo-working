import { useEffect } from 'react';

const Ingredients = () => {

  let count=2;
  function addMoreCode1() {
      console.log("Add_fields"+count.toString());
      document.getElementById("Add_fields"+count.toString()).insertAdjacentHTML("afterend","<div className=\"col-lg-12 col-md col-sm-12 form-group mb-3\" data-for=\"email\">"+
      "<input type=\"name\" name=\"email\" placeholder=\"Ingredient 2\" data-form-field=\"email\" className=\"form-control\" value=\"\" id=\"email-form3-s\">"+
      "</div>");
      console.log("Ingredient "+count.toString());
      document.getElementById("Add_fields"+count.toString()).nextSibling.setAttribute("id","Add_fields"+(count+1).toString());
      document.getElementById("Add_fields"+count.toString()).nextSibling.firstChild.setAttribute("placeholder","Ingredient "+(count+1).toString());
      count++;

  }  


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
           <section data-bs-version="5.1" className="menu menu3 cid-tKx2w0V0SK" once="menu" id="menu3-r">
    
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
                    <a className="iconfont-wrapper" href="" target="_blank">
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

<section data-bs-version="5.1" className="form3 cid-tKx2w1qbEW" id="form3-s">

    

    

    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
                <div className="image-wrapper">
                    <img className="w-100" src="assets/images/mbr-1631x1087.jpg" alt="Mobirise Website Builder" />
                </div>
            </div>
            <div className="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
                <form action="https://mobirise.eu/" method="POST" className="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="PFVSIHeDFQo7iVAOZfRpvLhDDwOcRoLdQ7s8CF7ai6V4aPF5FuwxeriHNy6k7cnW3e3pLioyJanzAIbfaOC0DfEBLbpotc928s0NDnshXcLFtWfTCIMrelLuSRmfthIs" />
                    <div className="row">
                        <div hidden="hidden" data-form-alert="" className="alert alert-success col-12">Thanks for filling out the form!</div>
                        <div hidden="hidden" data-form-alert-danger="" className="alert alert-danger col-12">
                            Oops...! some problem!
                        </div>
                    </div>
                    <div className="dragArea row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="mbr-section-title mb-4 display-2"><strong>Give Ingredients:</strong></h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <p className="mbr-text mbr-fonts-style mb-4 display-7">Add the ingredients for which you want your recipe based on</p>
                        </div>
                        <div data-for="name" className="col-lg-12 col-md col-sm-12 form-group mb-3" >
                            <input type="text" name="name" placeholder="Ingredient 1" data-form-field="name" className="form-control" value="" id="name-form3-s" />
                        </div>
                        <div className="col-lg-12 col-md col-sm-12 form-group mb-3" data-for="email" id="Add_fields2">
                            <input type="email" name="email" placeholder="Ingredient 2" data-form-field="email" className="form-control" value="" id="email-form3-s" />
                        </div>
                        <div className="col-md-auto col-12 mbr-section-btn"><button type="button" id="Add_fields" className="btn btn-success display-4" onClick={addMoreCode1}>Add Ingredient Fields</button></div>
                        <div className="col-md-auto col-12 mbr-section-btn"><a  className="btn btn-success display-4" href="ingredients-2.html#gallery3-u">Search</a></div>
                    </div>
                </form>
            </div>
            <div className="offset-lg-1"></div>
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
  
  export default Ingredients;