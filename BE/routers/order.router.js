import express from "express"
import { veryFileToken } from "../middlewares/checkAuthorization.js";
import orderController from "../modules/order/controller/index.js";

const router = express.Router()

router.use(veryFileToken)

router.post("/add", orderController.addOrder)
router.post("/update", orderController.updateOrder)
router.delete("/delete/:id", orderController.deleteOrder)
router.get("/filter-data-status", orderController.filterDataOrder)
router.get("/", orderController.getAllOrder)
export default router