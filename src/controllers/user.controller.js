import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    console.log("in registerUser");
    
    res.status(200).json({
        message: "ok"
    })
})

export { registerUser, } 