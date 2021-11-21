import React,{useState} from "react";
import Footer from "../components/Footer/HomeFooter";
import {ToastContainer,toast} from 'react-toastify'
import HomeNavBar from "../components/Navbar/HomeNavBar";
function Queries()
{
    const [mail,setMail]=useState('')
    const [message,setMessage]=useState('')
    const [phone,setPhone]=useState('')
    function Submit()
    {
        if (mail.length === 0 || message.length === 0 || phone.length === 0)
        toast.error('Enter fields !',{autoClose:2500})
        else
        console.log(mail,message,phone)
    }
    return (
        <>
        <ToastContainer />
        <div style={{maxWidth:"40%",marginLeft:"30%",marginRight:"30%"}}>
            <HomeNavBar />
            <div className="container card timetable" style={{marginTop:"20%"}}>
                <div className="d-block ms-5">
                    <br />
                    <h4 className="text-center announcements">Ask your queries</h4> 
                    <hr />
                    <div style={{maxWidth:"80%",marginLeft:"5%",marginRight:"10%"}}>
                        <div className="input-group mb-3">
                            <span className="input-group-text setColor" id="basic-addon1"><i className="bi bi-envelope"></i></span>
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={(event)=>setMail(event.target.value)} value={mail} autoFocus/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text setColor" id="basic-addon1"><i className="bi bi-chat-square-text"></i></span>
                            <textarea className="form-control" placeholder="Enter your query here" id="floatingTextarea2" style={{height:"100px"}} onChange={(event)=>{setMessage(event.target.value)}}></textarea>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text setColor" id="basic-addon1"><i className="bi bi-phone"></i></span>
                            <input type="tel" className="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" onChange={(event)=>setPhone(event.target.value)} value={phone} />
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-success mt-2 mb-4 col align-self-center" onClick={()=>Submit()} style={{marginLeft:"33%"}}>Post Query</button>
                </div>
            </div>
        </div>
        <br/> <br/> <br/> <br/><br/> <br/>
        <Footer/>
        </>
    )
}
export default Queries