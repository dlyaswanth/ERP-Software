/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"; 
import {Link,useHistory} from 'react-router-dom'
function StudentNavbar()
{
    let history=useHistory();
    const [hide,setHide]=useState(true);
    function logout()
    {
        sessionStorage.removeItem('JWT');
        sessionStorage.removeItem('User');
        history.push('/')
    }
    function toogleButton()
    {
        if (hide === true)
        {
            setHide(false)
            openNav();
        }
        else
        {
            setHide(true);
            closeNav()
        }
    }
    function openNav() 
    {
        // document.getElementById("main").style.marginLeft = "200px";
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.display = "block";
    }
    function closeNav() 
    {
        document.getElementById("main").style.marginLeft = "70px";
        document.getElementById("mySidenav").style.width = "60px";
        document.getElementById("mySidenav").style.display = "block";
    }
    return (
        <nav className="navbar-admin" style={{width:"10px !important"}} id="main">
            <div className="sidebar sidenav" id="mySidenav">
                <div className="logo-details ">
                    <ul className="ul">
                        <li>
                            <div >
                            &nbsp;<i className='fas fa-expand-arrows-alt' onClick={()=>toogleButton()}></i>
                                <span hidden={hide === true?false:true} className="tooltip">Expand</span>
                                <span hidden={hide === true?true:false} className="links_name" >&nbsp;&nbsp;Close</span>
                            </div>
                        </li> 
                        <li>
                            <Link to="/student-home" >
                            <i className="fas fa-home"></i>
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Home</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Home</span>
                        </li>
                        <li>
                        <Link to="/" className="nav-position" onClick={()=>logout()}>
                                <i className='bx bx-log-out' id="log_out" ></i>
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Log Out</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Log out</span>
                        </li>
                        <li className="profile">
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default StudentNavbar;