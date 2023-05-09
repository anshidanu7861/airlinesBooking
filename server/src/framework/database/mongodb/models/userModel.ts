import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
       
    },
    phone: { 
        type: String,
     
    },
    password: { 
        type: String,
    },
    confirmPassword:{
        type:String
    },
    class: {
        type: String
    }
},{
    timestamps: true
})

const userModel =  mongoose.model('users', userSchema)
export default userModel;

