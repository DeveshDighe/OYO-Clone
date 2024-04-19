import mongoose from "mongoose";

const notifySchema = new mongoose.Schema({
  userEmail : {
    type : String
  }
} ,{ timestamps: true })

export default mongoose.models?.notify || mongoose.model('notify', notifySchema)
