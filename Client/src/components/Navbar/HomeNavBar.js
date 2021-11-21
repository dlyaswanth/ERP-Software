import React from "react";
import { Link } from "react-router-dom";
function HomeNavBar()
{
    return (
        <nav className="fixed-top navbar navbar-expand-lg signin ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.techhive.com%2Fimages%2Farticle%2F2016%2F04%2Ferp-ts-100653791-large.jpg&f=1&nofb=1" alt="Logo image"aria-hidden width="50" height="50" style={{borderRadius:"50%"}}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse right navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link black" to="/login" aria-expanded="false">
                        <i className="bi bi-box-arrow-in-right"></i>{' '}Login</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle black" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-award"></i>
                        {' '}Academics
                        </Link>
                        <ul className="dropdown-menu black" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item black" to="/announcements"><i className="bi bi-megaphone"></i>{' '}Announcements</Link></li>
                            <li><Link className="dropdown-item black" to="/calendar"><i className="bi bi-calendar-check"></i>{' '}Academic Calender</Link></li>
                            <li><Link className="dropdown-item black" to="/timetable"><i className="bi bi-calendar2-x"></i>{' '}Time Table</Link></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link black" aria-current="page" to="/library"><i className="bi bi-book"></i>{' '}Library   </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link black" aria-current="page" to="/hostel-mess"><i className="bi bi-building"></i>{' '}Hostel & Mess</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link black" aria-current="page" to="/gpa-calculator"><i className="bi bi-calculator"></i>{' '}
                                GPA Caculator
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link black" aria-current="page" to="/transportation"><i className="bi bi-truck"></i>{' '}Transportation</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link black" to="/queries"><i className="bi bi-question-octagon"></i>{' '}Queries</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default HomeNavBar;