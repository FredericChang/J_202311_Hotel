import express from "express"

const router = express.Router()

router.post("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getAllUsers);
export default router