// @ts-ignore
/* eslint-disable */
import request from "@/request.js";

/** getCurrentUser GET /api/user/currentUser */
export async function getCurrentUserUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseUser_>("/api/user/currentUser", {
    method: "GET",
    ...(options || {}),
  });
}

/** deleteUser GET /api/user/delete/${param0} */
export async function deleteUserUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserUsingGETParams,
  options?: { [key: string]: any }
) {
  const { id: param0, ...queryParams } = params;
  return request<API.BaseResponseBoolean_>(`/api/user/delete/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** doLogin POST /api/user/login */
export async function doLoginUsingPost(
  body: API.UserLoginRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUser_>("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** userLogout POST /api/user/logout */
export async function userLogoutUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseInt_>("/api/user/logout", {
    method: "POST",
    ...(options || {}),
  });
}

/** matchUsers GET /api/user/match */
export async function matchUsersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.matchUsersUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListUserVo_>("/api/user/match", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** recommendUsers GET /api/user/recommend */
export async function recommendUsersUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.recommendUsersUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUser_>("/api/user/recommend", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** userRegister POST /api/user/register */
export async function userRegisterUsingPost(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** searchUser GET /api/user/search */
export async function searchUserUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchUserUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListUser_>("/api/user/search", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchUsersByTags POST /api/user/search/tags */
export async function searchUsersByTagsUsingPost(
  body: API.UserTagSearchRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUser_>("/api/user/search/tags", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/update */
export async function updateUserUsingPost(
  body: API.User,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseInt_>("/api/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
