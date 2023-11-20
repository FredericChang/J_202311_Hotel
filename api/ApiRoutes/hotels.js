import express from "express"
import Hotel from "../models/Hotel.js"


const router = express.Router()
//get 就像app.get 運用router把app.get可以分門別類 
// router.get("/",(req,res)=>{
//     res.send("這邊是hotelsApi End points連接點")
//     console.log("這邊是hotelsApi End points連接點")
// })
router.post("/",async(req,res)=>{
    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/find/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const hotel = await Hotel.findById(id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id,{$set:body},{new:true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    } 
 })

 router.delete(":/id",async(req,res) => {
    const id = req.params.id;
    try {
        const hotel = await Hotel.findByIdAndDelete(id)
        res.status(200).json("刪除成功")
    } catch (error) {
        res.status(500).json(error)
    }
    
 })



export default router;