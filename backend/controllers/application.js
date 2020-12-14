const jobModel=require('../models/job');
const approvedJobs=require('../models/approvedJobs')
const declinedJobModel=require('../models/declinedJobs')
const appliedJobModel=require('../models/appliedJob')

exports.jobCreate=(req,res)=>{
    const newJobModel=new jobModel(req.body)
    newJobModel.save().then(data=>{
        res.status(200).json({data,msg:"job created successfully"})
    }).catch(err=>{
        console.log(err)
        res.status(500).json({err})
    })
}

exports.jobShow=(req,res)=>{
    jobModel.find().then(data=>{
        res.status(200).json({data})
    }).catch(err=>{
        res.status(500).json({err})
    })
}

exports.approvedJobs=(req,res)=>{
    const {userId}=req.body;
    console.log(userId)
    appliedJobModel.findOneAndRemove({userId:userId}).then(data=>{
        console.log(data)
        if(data){
            const newApprovedJobs=new approvedJobs(req.body)
            newApprovedJobs.save().then(data=>{
                //need to send email to the user
                res.status(200).json({data,msg:'candidate approved'})
                
            }).catch(err=>{
                res.status(400).json({err})
            })
        }
    }).catch(err=>{
        console.log(err)
    })
   
}

exports.showApprovedJobs=(req,res)=>{
    approvedJobs.find().populate('userId').populate('jobId').then(data=>{
       return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
    })
}

exports.declinedJobs=(req,res)=>{
    const newDeclinedJobModel=new declinedJobModel(req.body)
    newDeclinedJobModel.save().then(data=>{
        return res.status(200).json({data})
        //send email to user that u r not selected
    }).catch(err=>{
        res.status(400).json({err})
    })
   
}
exports.showDeclinedJobs=(req,res)=>{
   declinedJobModel.find().populate('userId').then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
    })
   
}
exports.singleJobDetail=(req,res)=>{
    const jobId=req.params.id
    jobModel.findById(jobId).then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
     })
}
exports.userAppliedJobShow=(req,res)=>{
    const myId=req.params.id
    appliedJobModel.find({userId:myId}).then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
     })
}
exports.userAppliedJobShowAll=(req,res)=>{
    appliedJobModel.find().populate('userId').then(data=>{
        return res.status(200).json({data})
    }).catch(err=>{
        return res.status(400).json({err})
     })
}
