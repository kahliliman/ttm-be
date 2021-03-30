import { Router } from "express";

const routes = Router();
routes.get("/api", (req, res) => res.send("<h1>API page</h1>"));

export default routes;
