import connectDB from "@/db";
import hotelModel from "@/models/hotel.model";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectDB();
    const facilities = await hotelModel.find({}).distinct("facilities.name");
    res.status(200).json({ msg: "Achha Lagta hai !", facilities });
  }
}