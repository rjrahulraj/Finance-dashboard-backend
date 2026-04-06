import express from "express";
import {
  getAllUsers,
  getSingleUser,
  updateUserController,
  deleteUserController,
} from "./user.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { allowRoles } from "../../middleware/role.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/", allowRoles("admin"), getAllUsers);
router.get("/:id", allowRoles("admin"), getSingleUser);
router.put("/:id", allowRoles("admin"), updateUserController);
router.delete("/:id", allowRoles("admin"), deleteUserController);

export default router;