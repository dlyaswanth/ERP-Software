import React from "react";
function Footer()
{
    return (
        <div className="container-fluid1 pb-0 mb-0 justify-content-center text-light ">
         <div className="row my-5 justify-content-center py-5">
             <div className="col-11">
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 className="text-muted mb-md-0 mb-5 bold-text text-center">Enterprise Resource Planning (ERP)</h3>
                     </div>
                 </div>
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                         <p className="social text-muted mb-0 pb-0 bold-text"> 
                         <span className="mx-2">
                             <i className="fab fa-facebook-square" aria-hidden="true"></i>
                        </span> 
                        <span className="mx-2">
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                        </span> 
                        <span className="mx-2">
                            <i className="fab fa-twitter-square" aria-hidden="true"></i>
                        </span> 
                        <span className="mx-2">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </span> 
                        </p>
                        <small className="rights">
                            <span>&#174;</span> <b>ERP All Rights Reserved.</b>
                        </small>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                         <h6 className="mt-55 mt-2 text-muted bold-text"><b>Yaswanth</b></h6><small> <span><i className="fa fa-envelope" aria-hidden="true"></i></span> dlyaswanth@gmail.com</small>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
}
export default Footer