import { Hotel } from "../models";

const viewAllHotel = async () => {
    try {
        const result = await Hotel.findAll();

        return result;
    } catch (e) {
        return e
    }
  };

const viewOneHotel = async (params) => {
    const {id} = params
    
    try {
        const hotel = await Hotel.findOne({where: {id}});

        if (hotel) {
            return hotel
        } else {
            return {status: 404,message: "not found"}
        }
    } catch (e) {
        console.log(e)
        return {status: 404,message: "not found"}
    }
  };

const createHotel = async (params) => {
    const { name, logo_img, created_by, location } = params;

    try {
        const result = await Hotel.create({
          name,
          logo_img,
          location,
          created_by,
        })
    

        return result;
    } catch (e) {
        return e
    }
};

  export { viewAllHotel, createHotel, viewOneHotel }