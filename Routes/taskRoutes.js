import express from 'express' ;

const router = express.Router() ;

router.get("/add", (req, res) => {
    return res.status(200).json({message: "Working properly"})
})

export default router ;