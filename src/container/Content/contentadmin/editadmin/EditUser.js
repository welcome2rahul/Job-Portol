import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import axiosInstance from '../../../../helpers';
import Input from '../../../Input';



export default function EditUser(props) {
    const [email,setEmail]=useState('hello');
    const [username,setUsername]=useState('');
    const [fullname,setName]=useState('');
    const [password,setPassword]=useState('');
    const [dob,setDob]=useState('');
    const [mobile,setMobile]=useState('');
    const [error,setError]=useState('');
    const [userId,setUserId]=useState('')
    const [user,setUser]=useState('')

    useEffect(()=>{
        const myId=props.match.params.id;
        setUserId(myId)
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        axiosInstance.get('/api/show/onlyone/registered/user/'+myId,config).then(data=>{
            const {fullname,password,username,dob,mobile,email}=data.data.data
            console.log(data.data.data)
            setName(fullname);
            setUsername(username);
            setEmail(email);
            setDob(dob);
            setMobile(mobile);
        }).catch(err=>{
            console.log(err)
        })
    },[])
    
    

    const submitHandler=(e)=>{
        e.preventDefault();
        const token=localStorage.getItem('token')

        const config={
            'headers':{'jwt_react':token}
        }
        const formData={fullname,username,email,mobile}
        axiosInstance.put('/api/update/registered/user/'+userId,formData,config).then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
        
        }
    
    return (
        <div>
        <Container>
            <Row>
              <div className="card card1">
                <div className="row justify-content-center my-5">
                    <div className="col-md-12 col-10 my-8">
                        <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className="mb-5 text-center heading">Edit Profile</h3>
                        <h6 className="msg-info">Update Fields</h6>
                            
                    <form onSubmit={submitHandler}>
                    <Row>
                        <Col md={6}> <Input type="text" placeholder="Enter Name" label="Full Name" value={fullname} onChange={(e)=>setName(e.target.value)} /></Col>
                        <Col md={6}> <Input type="text" placeholder="Enter Username" label="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /></Col>
                        <Col md={6}> <Input type="number" placeholder="Enter Mobile Number" label="Mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} /></Col>
                        <Col md={6}> <Input type="email" placeholder="Enter Email" label="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} /></Col>

                    </Row>
                    
                    
                    <Row>    
                            <Col md={6}>   <button className="btn-block btn-color">Update</button></Col>
                            <Col md={6}>  <button className="btn-block btn-color">Cancel</button></Col> 
                     </Row>  

                              

              
                    
                    </form>
                    </div>
                    </div>
                    </div>
      
            
  </Row>
 
</Container>
           
        </div>
    )
}
