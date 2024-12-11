/**
 * 用户类型
 */
export type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl: string;
    gender: string;
    email: string;
    phone: string;
    status: number;
    createTime: Date;
    tags: string[];
    role?: number;
};