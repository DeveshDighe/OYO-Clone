import connectDB from "@/db";
import hotelModel from "@/models/hotel.model";


export default async function handler(req, res){
  if (req.method === "GET") {
    connectDB();
    try {

    if (req.query.id) {
      const hotel =await hotelModel.findById(req.query.id)
      res.status(200).json({msg : "Good", hotel})
    }

  } catch (error) {
      console.log(error.message);
        return res.status(400).json({ msg: error.message });
  }
    // const singleHotel = await hotelModel.
  }
}