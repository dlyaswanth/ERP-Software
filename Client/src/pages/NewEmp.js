/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React,{useEffect, useState} from "react";
import { ToastContainer,toast } from 'react-toastify'
import Loader from "../components/Loader/loader";
import AdminNavbar from "../components/Navbar/AdminNavbar";
import FirstStep from "../components/NewEmployee/FirstStep";
import SecondStep from "../components/NewEmployee/SecondStep";
import ThirdStep from "../components/NewEmployee/ThirdStep";
import FourthStep from "../components/NewEmployee/FourthStep";
export default function NewEmp()
{
    const [showTabs,setShowTabs]=useState([true,false,false,false]);
	const [nextButton,setNextButton]=useState(true)
	const [prevButton,setPrevButton]=useState(false)
	const [userName,setUserName]=useState('')
	const [password,setPassword]=useState('')
	const [email,setEmail]=useState('')
	const [type,setType]=useState('')
	let temp=[]
	const [edu,setEdu]=useState([])
    const [exp,setExp]=useState([])
	// Getting staff sujects 
	const [subjects,setSubjects]=useState('');
	const [staffDeatils,setStaffDetails]=useState({
		userName:"",
		password:"",
		email:"",
		type:"",
		dob:"",
		department:"",
		dateofJoining:"",
		gender:"",
		religion:"",
		community:"",
		caste:"",
		mother_Tongue:"",
		blood_Group:"",
		address:"",
		city:"",
		state:"",
		postalCode:"",
		phoneNumber:"",
		modeofTransport:"",
		tutor:"",
		subjects:[],
		lib_books_taken:[],
		education:[],
		experience:[],
		documents:[],
	})
	// const { register,handleSubmit,setValue,formState: { errors }} = useForm();
	const [studentDetails,setStudentDetails]=useState({})
	function showTabOne()
	{
		setShowTabs([true,false,false,false])
		fixNStepIndicator(-1)
		setPrevButton(false)
		setNextButton(true)
	}
	// function for prev button in wizard stepper form for disabled
	function PrevTab()
	{
		setPrevButton(false);
		return ;
	}
	//function for next button in wizard stepper form for disabled
	function NextTab()
	{
		setNextButton(false);
		return;
	}
	// function for next button in wizard stepper form
	function nextPrev(n) 
	{
		let tab=showTabs.indexOf(true)
		if (n === 1)
		{
			setPrevButton(true);
			let values=[]
			for (let i=0;i<4;i++)
			{
				if (i === tab+1)
				values.push(true)
				else
				values.push(false);
			}
			setShowTabs(values)
			if (tab === 2 )
			NextTab()
			fixNStepIndicator(tab)
		}
		else
		{
			setNextButton(true)
			let values=[]
			for (let i=0;i<4;i++)
			{
				if (i === tab-1)
				values.push(true)
				else
				values.push(false);
			}
			setShowTabs(values)
			if (tab === 1)
			PrevTab()
			fixPStepIndicator(tab)
		}
	}
	// indicator in the wizard form top 
	function fixNStepIndicator(n) {
		var x = document.getElementsByClassName("step");
		for (let i = 0; i <= 3; i++) {
			x[i].className = x[i].className.replace(" active", " ");
		}
		if (n+1<=3)
		x[n+1].className += " active";
	}
	function fixPStepIndicator(n) {
		var x = document.getElementsByClassName("step");
		for (let i = 0; i <=n; i++) {
			x[i].className = x[i].className.replace(" active", " ");
		}
		if (n-1>=0)
		x[n-1].className += " active";
	}
	function reset()
	{
		studentReset();
		staffReset();
	}
	// Resetting the student form
	function studentReset()
	{
		setType('default')
		setUserName('')
		setPassword('')
		setEmail('')
		// document.getElementById("student-form").reset();
	}
	// Resetting the staff form
	function staffReset()
	{
		setType('default')
		setUserName('')
		setPassword('')
		setEmail('')
		setStaffDetails({
			dob:"",
			department:"",
			dateofJoining:"",
			gender:"",
			religion:"",
			community:"",
			caste:"",
			mother_Tongue:"",
			blood_Group:"",
			address:"",
			city:"",
			state:"",
			postalCode:"",
			phoneNumber:"",
			modeofTransport:"",
			tutor:"",
			subjects:[],
			lib_books_taken:[],
			education:[],
			experience:[],
			documents:[],
		})
		setEdu([])
		setExp([])
		setSubjects('')
		document.getElementById("staff-form1").reset();
	}
	// Handler for students
	function changeHandler(event)
	{
		const {name,value}=event.target;
		setStudentDetails({
				...studentDetails,
				[name]:value,
		})
	}
		// Handler for staffs
	function staffChangeHandler(value,name)
	{

			setStaffDetails({
				...staffDeatils,
				[name]:value,
			})
	}
	function Education(value)
	{
		const name='education'
		setStaffDetails({
			...staffDeatils,
			[name]:value
		})
	}
	function Experience(value)
	{
		const name='experience'
		setStaffDetails({
			...staffDeatils,
			[name]:value
		})
	}
	function docsChangeHandler(e)
	{
		const name='documents'
		const value=e.filter((item) => {
			return item.value;	
		})
		setStaffDetails({
			...staffDeatils,
			[name]:value
		})
	}
	return (
		<div id="main" className="card my-4" style={{maxWidth:"90%",marginLeft:"70px",marginRight:"5%",borderColor:"black",marginTop:"6%"}}>
            <ToastContainer />
            <AdminNavbar />
			<div style={{textAlign:"center",marginTop:"40px"}}>
				<button className="step active" data-bs-toggle="tooltip"  data-bs-html="true" title="Personal Info" >1</button>
				<button className="step" data-bs-toggle="tooltip"  data-bs-html="true" title="Address & Background Info">2</button>
				<button className="step" data-bs-toggle="tooltip"  data-bs-html="true" title="Education & Experience Info">3</button>
				<button className="step" data-bs-toggle="tooltip"  data-bs-html="true" title="Professional Info">4</button>
			</div>
			<div hidden={!showTabs[0]} style={{marginLeft:"2%",marginRight:"2%"}}>
				<br />
				<h5 className="text-center">Personal Information</h5>
				<FirstStep 
					type={type}
					staffChangeHandler={staffChangeHandler}
					setType={setType}
					userName={userName}
					setUserName={setUserName}
					email={email}
					setEmail={setEmail}
					setPassword={setPassword}
					password={password}
					staffDeatils={staffDeatils}
					nextPrev={nextPrev}
					prevButton={prevButton}
					nextButton={nextButton}
					/>
			</div>
			<div hidden={!showTabs[1]} style={{marginLeft:"2%",marginRight:"2%"}}>
				<br />
				<h5 className="text-center">Address & Background Information</h5>
				<SecondStep 
					staffChangeHandler={staffChangeHandler}
					staffDeatils={staffDeatils}
					nextPrev={nextPrev}
					prevButton={prevButton}
					nextButton={nextButton}
				/>
			</div>
			<div className="tab" hidden={!showTabs[2]} style={{marginLeft:"2%",marginRight:"2%"}}>
				<br />
				<h5 className="text-center">Education & Experience</h5>
				<ThirdStep 
					edu={edu}
					setEdu={setEdu}
					exp={exp}
					setExp={setExp}
					Education={Education}
					Experience={Experience}
					nextPrev={nextPrev}
					prevButton={prevButton}
					nextButton={nextButton}
				/>
			</div>
			<div hidden={!showTabs[3]} style={{marginLeft:"2%",marginRight:"2%"}}>
				<br />
				<h5 className="text-center">Professional Information</h5>
				<FourthStep
					staffChangeHandler={staffChangeHandler}
					staffDeatils={staffDeatils}
					subjects={subjects}
					setSubjects={setSubjects} 
					reset={reset}
					userName={userName}
					temp={temp}
					type={type}
					email={email}
					studentDetails={studentDetails}
					password={password}
					docsChangeHandler={docsChangeHandler}
					nextPrev={nextPrev}
					prevButton={prevButton}
					nextButton={nextButton}
					showTabOne={showTabOne}
				/>
			</div>
			<br /><br />
        </div>
    )
}