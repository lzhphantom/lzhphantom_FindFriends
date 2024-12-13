import request from "../plugins/request.ts";

export const getCurrentUser = async () => {
    const res = await request.get('/user/currentUser')

    return res.data

}