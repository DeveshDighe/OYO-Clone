import connectDB from "@/db";
import hotelModel from "@/models/hotel.model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const hotels = await hotelModel.find({ price: { $lte: req.query.price } });
    res.status(200).json({ msg: "Range Filter.", hotels });
  }
}