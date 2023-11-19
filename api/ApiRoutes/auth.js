import express from "express"

const router = express.Router()
//get 就像app.get 運用router把app.get可以分門別類 
router.get("/",(req,res)=>{
    res.send("auth End points連接點")
    console.log("這邊是hotelsApi End points連接點")
})

export default router