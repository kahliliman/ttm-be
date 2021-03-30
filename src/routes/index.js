import { Router } from "express";
import HotelController from "../controllers/HotelController";

const routes = Router();

// CRUD Hotel
routes.get("/", (req, res) => res.send("<h1>API Page</h1>"));
routes.get("/hotel", HotelController.viewAll);
routes.get("/hotel/:id", HotelController.viewOne);
routes.post("/hotel/create", HotelController.create);
routes.patch("/hotel/edit/:id", HotelController.edit);
routes.delete("/hotel/delete/:id", HotelController.delete);

export default routes;
