import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import './corporate.css'
import axiosInstance from '../../helpers'

export default function Corporate() {
	const [role,setRole]= useState('')
	const [email,setEmail]= useState('')
	const [pass,setPass]= useState('')
	const history=useHistory()

	const submitHandler=(e)=>{
		e.preventDefault()
		const FormDate={email,pass,role}
		
		axiosInstance.post('/api/user/login',FormDate).then(data=>{
			if(data.status===200){
				console.log(data.data.user)
				const {email,fullname,_id}=data.data.user
				localStorage.setItem('token',data.data.token)
				localStorage.setItem('fullname',fullname)
				localStorage.setItem('email',email)
				localStorage.setItem('id',_id)
				localStorage.setItem('role',role)
				if(role==='admin'){
					return history.push('/admin_dashboard/view_apps')
				}else{
					return history.push('hr_dashboard')
				}
			}
		}).catch(err=>{
			console.log(err)
		})
	}
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={submitHandler}>
                <span className="login100-form-title p-b-43">
						Login to continue
					</span>
						<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<span className="label-input100">choose your role</span>
						<select className="input100" type="text"  onChange={(e)=>setRole(e.target.value)}>
							<option value="hr">as hr</option>
							<option value="admin">as admin</option>
						</select>
						<span className="focus-input100"></span>
						
					</div>
					<span className="label-input100">Email</span>
						<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" onChange={(e)=>setEmail(e.target.value)}/>
						<span className="focus-input100"></span>
						
					</div>
					<div className="wrap-input100 validate-input" data-validate="Password is required">
					<span className="label-input100">Password</span>
						<input className="input100" type="password" onChange={(e)=>setPass(e.target.value)} />
						<span className="focus-input100"></span>
						
					</div>
<div className="container-login100-form-btn">
						<button type="submit" className="login100-form-btn">
							Login
						</button>
					</div>
					
					
					
				</form>

				</div>
			</div>
		</div>
	
    )
}
