import e from 'express';
import { viewAllHotel, createHotel, viewOneHotel } from '../../queries/hotelQuery'

class HotelController {
  static viewAll = async (req, res) => {
    try {
      const result = await viewAllHotel();

      return res.status(200).json(result);
    } catch (e) {
      console.log(e)
    }
  };

  static viewOne = async (req, res) => {
    try {
      const result = await viewOneHotel(req.params);

      if (result.name === "SequelizeDatabaseError") {
        throw(e)
      }
      
      return res.status(201).json(result)
    } catch (e) {
      return res.status(500).json({status:500,message:"Internal Server Error"})
    }
  };

  static create = async (req, res) => {
    try {
      const result = await createHotel(req.body);

      return res.status(201).json({ ...result.dataValues })
    } catch (e) {
      console.log(e)
    }
      
  };

  static edit = (req, res) => {
    res.send("<h1>Edit Hotel</h1>");
  };

  static delete = (req, res) => {
    res.send("<h1>Delete Hotel</h1>");
  };
}

export default HotelController;
