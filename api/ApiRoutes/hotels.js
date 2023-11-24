import express from "express"
import { createHotel, deleteHotel, getHotel, updatedHotel } from "../RoutesController/hotel.js" 

const router = express.Router()
//創建第一筆資料
router.post("/",createHotel)
//抓取第一筆資料練習
router.get("/find/:id",getHotel)
//將第一筆資料做修改練習
router.put("/:id",updatedHotel)
//刪除資料
router.delete("/:id",deleteHotel)

export default router