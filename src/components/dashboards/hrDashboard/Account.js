import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Accounthr from '../../../container/Content/contenthr/Accounthr'
import {Redirect} from 'react-router-dom'


export default function Account() {
    const [Token,SetToken]=useState('')
    const [role,SetRole]=useState('')
    useEffect(()=>{
        const token=localStorage.getItem('token')
        SetToken(token)
        const role=localStorage.getItem('role')
        SetRole(role)
        
    },[])
    return (
        Token===null &&  role!=='hr'?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/hr_dashboard'},
                    {label:'Approve/Decline',icon:'table',link:'/hr_dashboard/approvedec_app'},
                    {label:'Account',icon:'person',link:'/hr_dashboard/account',active:"active"},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Account"} />
                   <Accounthr />
                </Col>
            </Row>
            </div>
    )
}
