declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseListTeamUserVo_ = {
    code?: number;
    data?: TeamUserVo[];
    message?: string;
  };

  type BaseResponseListUser_ = {
    code?: number;
    data?: User[];
    message?: string;
  };

  type BaseResponseListUserVo_ = {
    code?: number;
    data?: UserVo[];
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageTeam_ = {
    code?: number;
    data?: PageTeam_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponseTeamVo_ = {
    code?: number;
    data?: TeamVo;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type deleteUserUsingGETParams = {
    /** id */
    id: number;
  };

  type getTeamByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type matchUsersUsingGETParams = {
    /** num */
    num?: number;
  };

  type PageTeam_ = {
    current?: number;
    pages?: number;
    records?: Team[];
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    current?: number;
    pages?: number;
    records?: User[];
    size?: number;
    total?: number;
  };

  type recommendUsersUsingGETParams = {
    /** pageNum */
    pageNum?: number;
    /** pageSize */
    pageSize?: number;
  };

  type searchUserUsingGETParams = {
    /** username */
    username?: string;
  };

  type Team = {
    createTime?: string;
    description?: string;
    expireTime?: string;
    id?: number;
    isDelete?: number;
    maxNum?: number;
    name?: string;
    ownerUserId?: number;
    password?: string;
    status?: number;
    updateTime?: string;
    userId?: number;
  };

  type TeamAddRequest = {
    description?: string;
    expireTime?: string;
    maxNum?: number;
    name?: string;
    password?: string;
    status?: number;
  };

  type TeamDeleteRequest = {
    id?: number;
  };

  type TeamJoinRequest = {
    id?: number;
    password?: string;
  };

  type TeamQuery = {
    description?: string;
    id?: number;
    maxNum?: number;
    name?: string;
    ownerUserId?: number;
    pageNum?: number;
    pageSize?: number;
    searchText?: string;
    status?: number;
    userId?: number;
  };

  type TeamQuitRequest = {
    id?: number;
  };

  type TeamUpdateRequest = {
    description?: string;
    expireTime?: string;
    id?: number;
    maxNum?: number;
    name?: string;
    password?: string;
    status?: number;
  };

  type TeamUserVo = {
    description?: string;
    expireTime?: string;
    id?: number;
    maxNum?: number;
    name?: string;
    ownerUserId?: number;
    status?: number;
    userId?: number;
    userList?: UserVo[];
  };

  type TeamVo = {
    description?: string;
    expireTime?: string;
    id?: number;
    maxNum?: number;
    name?: string;
    ownerUserId?: number;
    password?: string;
    status?: number;
    userId?: number;
  };

  type User = {
    avatarUrl?: string;
    createTime?: string;
    email?: string;
    gender?: number;
    id?: number;
    isDelete?: number;
    loginAccount?: string;
    password?: string;
    phone?: string;
    profile?: string;
    role?: number;
    status?: number;
    tags?: string;
    updateTime?: string;
    username?: string;
  };

  type UserLoginRequest = {
    password?: string;
    username?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    email?: string;
    gender?: number;
    phone?: string;
    profile?: string;
    userAccount?: string;
    userPassword?: string;
    username?: string;
  };

  type UserTagSearchRequest = {
    pageNum?: number;
    pageSize?: number;
    tagList?: string[];
  };

  type UserVo = {
    avatarUrl?: string;
    email?: string;
    gender?: number;
    id?: number;
    loginAccount?: string;
    phone?: string;
    status?: number;
    tags?: string;
    username?: string;
  };
}
