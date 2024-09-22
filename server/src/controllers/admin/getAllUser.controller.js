import { asyncHandler } from "../../error/asyncHandler.error.js";
import ErrorHandler from "../../error/ErrorHandler.error.js";
import { userModels } from "../../models/user.model.js";

export const getAllUser = asyncHandler(async (req , res , next) => {
    const userList = await userModels.find();
    if(!userList) return next(new ErrorHandler("No any user found !",404))
        
    res.status(200).json({
        success : true,
        message : "All users get successfully.",
        data : userList
    })
})