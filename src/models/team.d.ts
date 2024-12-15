import {UserType} from "./user";

/**
 * 队伍类型
 */
export type TeamType = {
    description: string,
    expireTime?: Date,
    id: number,
    maxNum: number,
    name: string,
    ownerUserId: number,
    password?: string,
    status: number,
    userId: number,
    userList: Array<UserType>
};