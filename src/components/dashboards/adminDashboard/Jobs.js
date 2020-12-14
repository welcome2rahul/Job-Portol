import React,{useEffect,useState} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Jobsadmin from '../../../container/Content/contentadmin/Jobsadmin'
import {Redirect} from 'react-router-dom'


export default function Jobs() {
    const [Token,SetToken]=useState('')
    const [role,SetRole]=useState('')
    

    useEffect(()=>{
        const token=localStorage.getItem('token')
        SetToken(token)
        const role=localStorage.getItem('role')
        SetRole(role)
        
    },[])
    return (
        Token===null && role!=='admin'?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/admin_dashboard/view_apps'},
                    {label:'Approve',icon:'table',link:'/admin_dashboard/approve_apps'},
                    {label:'Decline',icon:'table',link:'/admin_dashboard/decline_apps'},
                    {label:'Jobs',icon:'person',link:'/admin_dashboard/jobs',active:"active"},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Jobs Form"} />
                   <Jobsadmin />
                </Col>
            </Row>
            </div>
    )
}
