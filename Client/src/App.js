import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Announcements from './pages/Announcements'
import HomeCalendar from './pages/Calendar'
import TimeTable from './pages/TimeTable'
import Queries from './pages/Queries'
import AdminHome from './pages/AdminHome'
import Employees from './pages/Employee'
import EmployeeId from './pages/EmployeeId'
import NewUser from './pages/NewUsers'
import DepDashboard from './pages/DepartmentDashboard'
import StudentHome from './pages/StudentHome'
import NewEmp from './pages/NewEmp'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/announcements"><Announcements /></Route>
        <Route path="/calendar"><HomeCalendar /></Route>
        <Route path="/timetable"><TimeTable /></Route>
        <Route path="/queries"><Queries/></Route>
        <Route path="/admin-home"><AdminHome /></Route>
        <Route path="/student-home"><StudentHome /></Route>
        <Route path="/employees"><Employees /></Route>
        <Route path="/employee/:id"><EmployeeId /></Route>
        <Route path="/add-user"><NewUser /></Route>
        <Route path="/new"><NewEmp /></Route>
        <Route path="/department-dashboard"><DepDashboard /></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;