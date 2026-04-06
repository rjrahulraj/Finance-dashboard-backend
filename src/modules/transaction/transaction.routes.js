import express from "express";
import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "./transaction.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { allowRoles } from "../../middleware/role.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", allowRoles("admin", "analyst"), create);
router.get("/", allowRoles("admin", "analyst", "viewer"), getAll);
router.get("/:id", allowRoles("admin", "analyst", "viewer"), getOne);
router.put("/:id", allowRoles("admin", "analyst"), update);
router.delete("/:id", allowRoles("admin"), remove);

export default router;