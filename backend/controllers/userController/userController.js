const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../../models/userModel/userModel')



//@desc login User
//@route POST
const loginUser = asyncHandler(async (req, res) => {

    const {email,password} = req.body
    const salt = await bcrypt.genSalt(10);
  //  const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.findOne({email})


    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error("Please verify your email and password")
    }
})

//@desc register new user
//@route POST
const registerUser = asyncHandler(async (req, res) => {
    const { name, email,phone, password,role } = req.body;
    if (!email || !name ||!phone || !password || !role) {
        res.status(400)
        throw new Error('Please add some Data')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {     //user exists
        res.status(400)
        throw new Error('User Already Exists')
    }

    //hash the passowrd

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({    //create user
        name: name,
        email: email,
        phone:phone,
        password: hashPassword,
        role:role
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('User not Created')
    }
})


const getUsers = asyncHandler(async (req,res)=>{

    const users = await User.find();

    console.log(users)

    if(users.length == 0 ){
        res.status(400)
        throw new Error('No User created')
    }else {
        res.status(201).json({users})
    }

})


module.exports = {
    registerUser,
    loginUser,
    getUsers
}