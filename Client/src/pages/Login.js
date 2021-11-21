/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react'
import HomeNavBar from '../components/Navbar/HomeNavBar';
import {useHistory} from 'react-router-dom'
import validator from 'validator'
import {ToastContainer,toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import loginImage from '../assets/images/login_Image.png'
import Footer from '../components/Footer/HomeFooter';
function Admin()
{
    let history=useHistory();
    const [email,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    function login()
    {
        // console.log(handleSubmit)
        if (email.trim().length === 0 || password.trim().length === 0)
        {
            toast.error('Enter the fields !',{autoClose:2500})
            return ;
        }
        else if (! (validator.isEmail(email)))
        {
            toast.error('Invalid Email !',{autoClose:2500})
            return ;
        }
        // console.log(email,password,type)
        toast.info('Please Wait !',{autoClose:2500})
        fetch('/login',{
            method: 'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                email,
                password,
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.error)
            toast.error(data.error,{autoClose:2500})
            else
            {
                sessionStorage.setItem("JWT",data.token)
                sessionStorage.setItem("User",JSON.stringify(data.user))
                toast.success(data.message,{autoClose:2500})
                if (data.user.role === 'Admin')
                history.push('/admin-home')
                else if (data.user.role === 'Student')
                history.push('/student-home')
                else if (data.user.role === 'Professor')
                history.push('/professor-home')
            }
            
        })
    }
    return (
        <div>
        <ToastContainer />
            <HomeNavBar />
            
            <br /><br />
            <div className="container row g-3" style={{marginTop:"120px",marginLeft:"70px"}}>
                <div className="col-6"  style={{marginTop:"40px"}}>
                    <img src={loginImage} alt="ERP Pic"width="90%"/>
                </div>
                <div className="col-6">
                    <div className="card" >
                    <div className="innercard">
                        <div className="title" style={{textAlign:"center"}}>
                            <br />
                            <h2><b><em><i>Log in</i></em></b></h2>
                            <br />
                        </div>
                        <div className="card-body">
                        
                            <div className="input-group mb-3">
                                <span className="input-group-text setColor" id="basic-addon1"><i className="bi bi-envelope"></i></span>
                                <input  type="text" className="form-control " placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={(event)=>setUserName(event.target.value)} value={email} autoFocus name="email"  />
                            </div>
                           
                            <div className="input-group mb-3 has-validation">
                                <span className="input-group-text setColor" id="basic-addon1"><i className="bi bi-check-square"></i></span>
                                <input  type="password" className="form-control  password" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" type={values.showPassword ? "text" : "password"}
                                onChange={(event)=>setPassword(event.target.value)}
                                value={password} name="password" />
                                <span className="input-group-text showpassword setColor" onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}>
                                {values.showPassword ? <i className="bi bi-eye"></i>: <i className="bi bi-eye-slash"></i>}</span>
                            </div>
                            
                           
                            
                            <br />
                            <div className="middle">
                                <button type="submit" className="btn btn-success" onClick={()=>login()}>Sign In</button>
                            </div>
                           
                        </div>
                            </div>
                    </div>
                </div>
            </div>
            <br/> <br/><br/> <br/><br/> <br/>
            <Footer/>
        </div>
    )
}
export default Admin;