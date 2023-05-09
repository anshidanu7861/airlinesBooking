import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
    fname: {
        type: String,
    },
    email: {
        type: String,
      
    },
    phone: { 
        type: String,
     
    },
    airline: { 
        type: String,
    },
    arrival_date:{
        type:String
    },
    confirmPassword:{
        type:String
    },
    arrival_time:{
        type:String
    },
    departure_airport:{
        type:String
    },
    departure_city:{
        type:String
    },
    departure_date:{
        type:String
    },
    departure_time:{
        type:String
    },
    destination_airport:{
        type:String
    },
    destination_city:{
        type:String
    },
    flight_number:{
        type:String
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref : "userModel"
    },
    date: {
        type: String
    }
},{
    timestamps: true
})

const bookingModel =  mongoose.model('bookingData', bookingSchema)
export default bookingModel;

