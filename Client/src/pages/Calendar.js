/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Calendar from 'react-calendar'
import HomeNavBar from '../components/Navbar/HomeNavBar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../components/Footer/HomeFooter';
function HomeCalendar()
{
    const [value, onChange] = useState(new Date());
    const date=new Date().toString()
    const dateTime=date.substring(4,date.length-40)
    const day=date.substring(0,4).trim()
    const [sampleEvents,setSampleEvents]=useState([
        `04 ${dateTime.substring(0,3)} Club Celebration`,
        `08 ${dateTime.substring(0,3)} Sports Day`,
        `12 ${dateTime.substring(0,3)} Cultural Day`,
    ])
    return(
        <>
        <div className="container" style={{marginTop:"8%",marginLeft:"140px"}}>
             <b className="text-center announcements" style={{marginLeft:"30%"}}>Academic Calendar</b>
            <HomeNavBar />
            <div className="row">
            <br/> <br/>
                <section className="col">
                <br/> <br/>
                    <Calendar
                        onChange={onChange}
                        value={value}
                    />
                    <br />
                    <div className="card card-body" style={{background:"#e0e0e0",marginLeft:"0"}}>
                        <b>Today : {dateTime} ({day})</b>
                    </div>
                </section>
                <section className="col">
                <br/> <br/>
                    <div className="card outercard">
                        <div className="card-title text-center " style={{marginTop:"10px"}}><b>Upcoming Events <hr /></b></div>
                        <div className="card-body">
                            <ol key='sampleEvents'>
                                {
                                    sampleEvents.map((events,index)=>{
                                        // console.log(index);
                                        return(
                                            <li className="innerlist" key={index}>{events}</li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
            <br/> <br/> <br/> <br/>
        </div>
        <br/> <br/>
        <Footer />
    </>
    )
}
export default HomeCalendar;