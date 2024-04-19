import connectDB from "@/db";
import hotelModel from "@/models/hotel.model";


export default async function handler (req, res){
    connectDB()
    if (req.method === 'POST') {
      try {
     
      const newHotel = new hotelModel(req.body)

      const result = await newHotel.save();
      res.status(201).json({msg: 'Hotel added !', result})
         
    } catch (error) {
     console.log(error , 'error');   
    }
    }



    if (req.method === 'GET') {
      try {
        let hotels;
        if (req.query.city === 'All' || req.query.city === '') {
           hotels = await hotelModel.find({})
        }
        else{
           hotels = await hotelModel.find({ location: req.query.city });
        }
    
        if (hotels.length > 0) {
          return res.status(200).json({ msg: 'Hotels fetched', hotels });
        } else {
          throw new Error('Hotels not available');
        }
      } catch (error) {
        console.log(error.message);
        return res.status(400).json({ msg: error.message });
      }
    }
    
}