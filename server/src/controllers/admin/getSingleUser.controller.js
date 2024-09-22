import { asyncHandler } from "../../error/asyncHandler.error.js";
import ErrorHandler from "../../error/ErrorHandler.error.js";
import { userModels } from "../../models/user.model.js";

export const getSingleUser = asyncHandler(async (req, res , next) => {
    const user = await userModels.findById()
    if(!user) return next(new ErrorHandler("User doesn't exist !",404));

    res.status(200).json({
        success : true,
        message : "User get successfully",
        data : user
    })
})