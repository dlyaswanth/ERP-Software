/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"; 
import {Link,useHistory} from 'react-router-dom'
function AdminNavbar()
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
                            <div>
                            &nbsp;<i className='fas fa-expand-arrows-alt' onClick={()=>toogleButton()}></i>
                                <span hidden={hide === true?false:true} className="tooltip">Expand</span>
                                <span hidden={hide === true?true:false} className="links_name" >&nbsp;&nbsp;Close</span>
                            </div>
                        </li>
                        <li>
                            <Link to="/admin-home" >
                            &nbsp;<i className="bi bi-house"></i>
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Home</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Home</span>
                        </li>
                        <li>
                            <Link to="/department-dashboard" className="nav-position">
                            &nbsp;<i className="bi bi-clipboard-data"></i>
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Department dashboard</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Department dashboard</span>
                        </li>
                        
                        <li>
                            <Link to="/add-user" className="nav-position">
                            &nbsp;<i className="bi bi-file-earmark-plus"></i>
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Create User</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Create User</span>
                        </li>
                        <li>
                            <Link to="/employees" className="nav-position">
                            &nbsp;<i className="bi bi-person-badge"></i>
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Employees</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Employees</span>
                        </li>
                        <li>
                            <Link to="/students" className="nav-position">
                            &nbsp;<i className="bi bi-person-badge"></i>    
                                <span hidden={hide === true?true:false} className="links_name">&nbsp;&nbsp;Students</span>
                            </Link>
                            <span hidden={hide === true?false:true} className="tooltip">Students</span>
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
export default AdminNavbar;