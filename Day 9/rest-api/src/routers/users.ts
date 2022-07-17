import express from "express";
import controller from "../controllers/users";

const router = express.Router();

router.get("/user", controller.getAllUsers);
router.get("/user-specific", controller.getSpecificUser);
router.post("/add", controller.addNewUser);
router.put("/update", controller.updateUser);
router.delete("/delete", controller.deleteUser);

export default router;