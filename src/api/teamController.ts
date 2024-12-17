// @ts-ignore
/* eslint-disable */
import request from "@/request.js";

/** addTeam POST /api/team/addTeam */
export async function addTeamUsingPost(
  body: API.TeamAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/team/addTeam", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteTeam POST /api/team/delete */
export async function deleteTeamUsingPost(
  body: API.TeamDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/team/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getTeamById GET /api/team/get */
export async function getTeamByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getTeamByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseTeamVo_>("/api/team/get", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** joinTeam POST /api/team/join */
export async function joinTeamUsingPost(
  body: API.TeamJoinRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/team/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listTeams POST /api/team/list */
export async function listTeamsUsingPost(
  body: API.TeamQuery,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListTeamUserVo_>("/api/team/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyCreateTeam GET /api/team/list/my/create */
export async function listMyCreateTeamUsingGet(options?: {
  [key: string]: any;
}) {
  return request<API.BaseResponseListTeamUserVo_>("/api/team/list/my/create", {
    method: "GET",
    ...(options || {}),
  });
}

/** listMyJoinTeam GET /api/team/list/my/join */
export async function listMyJoinTeamUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListTeamUserVo_>("/api/team/list/my/join", {
    method: "GET",
    ...(options || {}),
  });
}

/** listTeamPage POST /api/team/list/Page */
export async function listTeamPageUsingPost(
  body: API.TeamQuery,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageTeam_>("/api/team/list/Page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** quitTeam POST /api/team/quit */
export async function quitTeamUsingPost(
  body: API.TeamQuitRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/team/quit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateTeam POST /api/team/update */
export async function updateTeamUsingPost(
  body: API.TeamUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/api/team/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
