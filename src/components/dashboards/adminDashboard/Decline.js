import React ,{useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Sidebar from '../../../container/Sidebar/Sidebar'
import Navbar from '../../../container/Content/Navbar'
import Declineadmin from '../../../container/Content/contentadmin/Declineadmin'
import axiosInstance from '../../../helpers'
import {Redirect} from 'react-router-dom'

export default function Decline() {
    const [record,setRecord]=useState([])
    const [Token,SetToken]=useState('')
    const [role,SetRole]=useState('')

    useEffect(() => {
        const token=localStorage.getItem('token')
        SetToken(token)
        const role=localStorage.getItem('role')
        SetRole(role)
        axiosInstance.get('/application/job/declined/show').then(data=>{
            setRecord([data.data.data])
        }).catch(err=>{
            console.log(err)
        })
     }, [])
    return (
        Token===null && role!=='admin'?<Redirect to="/login" />:
        <div>
        <Row>
            <Col md={3}>
            <Sidebar list ={
                [
                    {label:'View Application',icon:'dashboard',link:'/admin_dashboard/view_apps'},
                    {label:'Approve',icon:'table',link:'/admin_dashboard/approve_apps'},
                    {label:'Decline',icon:'table',link:'/admin_dashboard/decline_apps',active:"active"},
                    {label:'Jobs',icon:'person',link:'/admin_dashboard/jobs'},
                ]
            } 

            />
            </Col>
                <Col md={9}>
                    <Navbar label={"Approve/Decline List"} />
                   <Declineadmin record={record}/>
                </Col>
            </Row>
            </div>
    )
}
