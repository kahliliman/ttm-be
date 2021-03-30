import { Hotel } from "../../models";

class HotelController {
  static viewAll = (req, res) => {
    return Hotel.findAll().then((data) => res.status(200).json(data));
  };

  static viewOne = (req, res) => {
    res.send("<h1>View One Hotel</h1>");
  };

  static create = (req, res) => {
    const { name, logo_img, created_by, location } = req.body;

    return Hotel.create({
      name,
      logo_img,
      location,
      // created_by,
    })
      .then((data) => res.status(201).json({ ...data.dataValues }))
      .catch((e) => console.log(e));
  };

  static edit = (req, res) => {
    res.send("<h1>Edit Hotel</h1>");
  };

  static delete = (req, res) => {
    res.send("<h1>Delete Hotel</h1>");
  };
}

export default HotelController;
