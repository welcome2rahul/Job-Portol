const {check,validationResult} =require('express-validator')

exports.signUpRequestValidator=[
    check('fullname')
    .notEmpty()
    .withMessage('fullname is required'),
    check('username')
    .notEmpty()
    .withMessage('username is required'),
    check('dob')
    .notEmpty()
    .withMessage('dob is required'),
    check('mobile')
    .notEmpty()
    .withMessage('mobile is required'),
    check('email')
    .notEmpty()
    .withMessage('')
    .isEmail()
    .withMessage('valid email is required'),
    check('pass')
    .notEmpty()
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.signUpRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}

exports.loginRequestValidator=[
    check('email')
    .notEmpty()
    .isEmail()
    .withMessage('email is required'),

    check('pass')
    .notEmpty()
    .isLength({min:4})
    .withMessage('password must be atleast 3 character long'),
];

exports.loginRequestValidatorResult=(req,res,next)=>{
    const error=validationResult(req)
    if(error.array().length>0){
        return res.status(400).json({error:error.array()[0].msg})
    }
    next()
}