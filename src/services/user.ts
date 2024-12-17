import {getCurrentUserUsingGet} from "../api/userController.ts";

export const getCurrentUser = async () => {
    const res = await getCurrentUserUsingGet()
    return res.data

}