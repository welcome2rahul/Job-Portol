import React,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Viewcontenthr from '../../../container/Content/contenthr/Viewcontenthr'
import axiosInstance from '../../../helpers'
import {Redirect} from 'react-router-dom'


export default function Viewapp() {
    const [allJobs,setAllJobs]=useState([])
    const [Token,SetToken]=useState('')
    const [role,SetRole]=useState('')
 
    useEffect(()=>{
        const token=localStorage.getItem('token')
        SetToken(token)
        const role=localStorage.getItem('role')
        SetRole(role)
        getAllDetail()
    },[])

    const getAllDetail=()=>{
        const token=localStorage.getItem('token')
        const config={
            'headers':{jwt_react:token}
        }
    axiosInstance.get('/application/user/all/jobs/applied',config).then(data=>{
        return setAllJobs(data.data.data)
    }).catch(err=>{
        console.log(err)
    })
    }
    return (
        Token===null && role!=='hr'?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/hr_dashboard',active:"active"},
                    {label:'Approve/Decline',icon:'table',link:'/hr_dashboard/approvedec_app'},
                    {label:'Account',icon:'person',link:'/hr_dashboard/account'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"View Application"} />
                    <Viewcontenthr allJobs={allJobs} />
                </Col>
            </Row>
            </div>
    )
}
