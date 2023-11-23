import express from "express"
import Hotel from "../models/Hotel.js"
import { errorMessage } from "./errorMessage.js"


const router = express.Router()
//get 就像app.get 運用router把app.get可以分門別類 
// router.get("/",(req,res)=>{
//     res.send("這邊是hotelsApi End points連接點")
//     console.log("這邊是hotelsApi End points連接點")
// })
router.post("/",async(req,res,next)=>{ //新增next
    const newHotel = new Hotel(req.body) 
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        next(errorMessage(500,"資料上傳錯誤請確認格式",error)) //後來我們想要客製化的
    }
})

router.get("/find/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const hotel = await Hotel.findById(id)
        res.status(200).json(hotel)
    } catch (error) {
        next(errorMessage(500,"資料上傳錯誤請確認格式",error)) //後來我們想要客製化的
    }
})

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(errorMessage(500,"資料上傳錯誤請確認格式",error)) //後來我們想要客製化的
    } 
 })

 router.delete("/:id",async(req,res) => {
    const id = req.params.id;
    try {
        res.status(200).json("刪除成功")
    } catch (error) {
        next(errorMessage(500,"資料上傳錯誤請確認格式",error)) //後來我們想要客製化的
    }
    
 })



export default router;