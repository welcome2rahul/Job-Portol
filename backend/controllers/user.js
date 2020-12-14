const registerModel=require('../models/user');
const appliedJobModel=require('../models/appliedJob');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const env=require('dotenv')
env.config()

exports.registerController=(req,res)=>{
    const {fullname,username,email,pass,dob,mobile,role}=req.body

    bcrypt.hash(pass, 10).then((hash)=>{
        const password=hash;
        const newRegisterModel=new registerModel({
            fullname,username,email,password,dob,mobile,role
        })
         newRegisterModel.save().then(data=>{
             res.status(201).json({data,msg:'registration successfull'})
         }).catch(err=>{
             res.status(500).json({err})
         })
    });
    
}

exports.userLoginController=(req,res)=>{
    const {email,pass}=req.body
   
    registerModel.find({email:email}).then(data=>{
      if(data){
            bcrypt.compare(pass,data[0].password,(err,result)=>{
                if(err) throw err

                if(result){
                    const {_id,fullname,email,role}=data[0]
                    const user={_id,fullname,email,role}
                    const token=jwt.sign({_id:data[0]._id,role:data[0].role},process.env.JWT_AUTH)
                     res.status(200).json({token,user,'msg':'you are logged in'})
                }else{
                    return res.status(400).json({'msg':'Wrong Password'})
                }
            })
        }
    }).catch(err=>{
        res.status(400).json({'msg':'Invalid Email'})
    })
}

exports.userAppliedJob=(req,res)=>{
 const newAppliedJobModel=new appliedJobModel(req.body)
    newAppliedJobModel.save().then(data=>{
    return res.status(200).json({data,msg:'job applied successfull'})
    }).catch(err=>{
    return res.status(400).json({err})
})
}



exports.userChangePassword=(req,res)=>{
    const myId=req.params.id;
    console.log(myId)
    console.log(req.body)
    const {pass,new_pass}=req.body
    registerModel.findById(myId).then(data=>{
        
        bcrypt.compare(pass,data.password,(err,result)=>{
            if(err) throw err

            if(result){
                console.log(result)
                bcrypt.hash(new_pass, 10).then((hash)=>{
                    const password=hash;
                     registerModel.findOneAndUpdate({_id:data._id},{password:password})
                     .then(data=>{
                         return res.status(200).json({msg:"password updated successfully"})
                     }).catch(err=>{
                        return res.status(400).json({err})
                     })
                    
                });
            }else{
                return res.status(400).json({'msg':'wrong password'})
            }
        })
               
    }).catch(err=>{
        return res.status(400).json({err})
    })
}

exports.userChangePassword=(req,res)=>{
    const myId=req.params.id;
    console.log(myId)
    console.log(req.body)
    const {pass,new_pass}=req.body
    registerModel.findById(myId).then(data=>{
        
        bcrypt.compare(pass,data.password,(err,result)=>{
            if(err) throw err

            if(result){
                console.log(result)
                bcrypt.hash(new_pass, 10).then((hash)=>{
                    const password=hash;
                     registerModel.findOneAndUpdate({_id:data._id},{password:password})
                     .then(data=>{
                         return res.status(200).json({msg:"password updated successfully"})
                     }).catch(err=>{
                        return res.status(400).json({err})
                     })
                    
                });
            }else{
                return res.status(400).json({'msg':'wrong password'})
            }
        })
               
    }).catch(err=>{
        return res.status(400).json({err})
    })
}

exports.showAllRegisteredHr=(req,res)=>{
    registerModel.find({role:'hr'}).then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({err})
    })
}

exports.showAllRegisteredUsers=(req,res)=>{
    registerModel.find({role:'user'}).then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(400).json({err})
    })
}

exports.showOneRegisteredUsers=(req,res)=>{
    const id=req.params.id
    registerModel.findById(id).then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
    })
}

exports.updateRegisteredUsers=(req,res)=>{
    const id=req.params.id
    const {fullname,username,email,mobile}=req.body
    console.log(req.body)
    registerModel.findByIdAndUpdate(id,{
        fullname:fullname,
        username:username,
        email:email,
        mobile:mobile

    }).then(data=>{
        return res.status(200).json({data,msg:"updated list"})
    }).catch(err=>{
        return res.status(400).json({err})
    })
}

exports.deleteRegisteredUsers=(req,res)=>{
    const id=req.params.id
    registerModel.findByIdAndDelete(id).then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
    })
}
