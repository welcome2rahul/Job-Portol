const express=require('express')
const router=express.Router();
const {registerController}=require('../controllers/user')
const {userLoginController}=require('../controllers/user')
const {showAllRegisteredHr}=require('../controllers/user')
const {showAllRegisteredUsers}=require('../controllers/user')
const {showOneRegisteredUsers}=require('../controllers/user')
const {updateRegisteredUsers}=require('../controllers/user')
const {deleteRegisteredUsers}=require('../controllers/user')
const {userAppliedJob}=require('../controllers/user')
const {authenticate, hrMiddleware, adminMiddleware}=require('../common-middleware')
const {userMiddleware}=require('../common-middleware')
const {userChangePassword}=require('../controllers/user')
const {signUpRequestValidator,signUpRequestValidatorResult,loginRequestValidator,loginRequestValidatorResult}=require('../validator')


router.post('/register/create',signUpRequestValidator,signUpRequestValidatorResult,registerController)
router.post('/user/login',loginRequestValidator,loginRequestValidatorResult,userLoginController)

router.put('/user/status/changePassword/:id',authenticate,userMiddleware,userChangePassword)
router.put('/hr/changePassword/status/:id',authenticate,hrMiddleware,userChangePassword)
router.get('/hr/registered/show/all',authenticate,adminMiddleware,showAllRegisteredHr)
router.get('/user/registered/show/all',authenticate,adminMiddleware,showAllRegisteredUsers)
router.get('/show/onlyone/registered/user/:id',authenticate,adminMiddleware,showOneRegisteredUsers)
router.put('/update/registered/user/:id',authenticate,updateRegisteredUsers)
router.delete('/delete/registered/user/:id',authenticate,deleteRegisteredUsers)

module.exports=router;