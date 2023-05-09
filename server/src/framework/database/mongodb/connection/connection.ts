import mongoose from 'mongoose'
import  dbOptions  from '../../../../types/connectionInterface'

const dbOpt: dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
export default function database(){
    mongoose.connect("mongodb://127.0.0.1/airlines", dbOpt).then(()=>{ 
        console.log('DB connection success');
    }).catch((err)=>{
        console.log(err);
    })
} 