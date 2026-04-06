import express from "express";
import {
  summary,
  categoryBreakdown,
  monthlyTrends,
  recent,
} from "./dashboard.controller.js";
import { protect } from "../../middleware/auth.middleware.js";
import { allowRoles } from "../../middleware/role.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/summary", allowRoles("admin", "analyst", "viewer"), summary);
router.get("/categories", allowRoles("admin", "analyst"), categoryBreakdown);
router.get("/trends", allowRoles("admin", "analyst"), monthlyTrends);
router.get("/recent", allowRoles("admin", "analyst", "viewer"), recent);

export default router;