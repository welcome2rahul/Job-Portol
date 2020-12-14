import React from 'react'
import './App.css';
import Forget from './components/forget_pass/Forget';
import {Switch,Route} from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Corporate from './components/corporate/Corporate';
import userDasboard from './components/dashboards/userDashboard/JobApp';
import ViewApp from './components/dashboards/userDashboard/ViewApp';
import Status from './components/dashboards/userDashboard/Status';
import hrDashboard from './components/dashboards/hrDashboard/Viewapp';
import Approve from './components/dashboards/hrDashboard/Approve';
import Account from './components/dashboards/hrDashboard/Account';
import Approveuser from './container/Content/contenthr/approve/Approveuser';
import adminDashboard from './components/dashboards/adminDashboard/Viewadmin';
import Approvedecline from './components/dashboards/adminDashboard/Approvedecline';
import Jobs from './components/dashboards/adminDashboard/Jobs';
import Decline from './components/dashboards/adminDashboard/Decline';
import Editadmin from './container/Content/contentadmin/editadmin/Editadmin';
import EditUser from './container/Content/contentadmin/editadmin/Editadmin';


function App() {
 
return (
    <div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/forget_pass" component={Forget} />
        <Route path="/corporate_login" component={Corporate} />
        <Route path="/user_dashboard/job_application/:id" exact component={userDasboard} />
        <Route path="/user_dashboard/view_application"  exact component={ViewApp} />
        <Route path="/user_dashboard/status"  exact component={Status} />
        <Route path="/hr_dashboard" exact component={hrDashboard} />
        <Route path="/hr_dashboard/approvedec_app" exact component={Approve} />
        <Route path="/hr_dashboard/account" exact component={Account} />
        <Route path="/contenthr/approve" exact component={Approveuser} />
        <Route path="/admin_dashboard/view_apps" exact component={adminDashboard} />
        <Route path="/admin_dashboard/approve_apps" exact component={Approvedecline} />
        <Route path="/admin_dashboard/decline_apps" exact component={Decline} />
        <Route path="/admin_dashboard/jobs" exact component={Jobs} />
        <Route path="/contentadmin/editadmin/:id" exact component={Editadmin} />
        <Route path="/admin/edituser/:id" exact component={EditUser} />
      </Switch>
    </div>
)
}

export default App ;

