import express from "express";
import isAuthenticated from "../Middlewares/isAuthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../Controllers/company.controller.js";
import { singleUpload } from "../Middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById);
router.route("/update/:id").put(isAuthenticated,singleUpload, updateCompany);
//router.route("/update/:id").put(isAuthenticated, updateCompany);

export default router;
