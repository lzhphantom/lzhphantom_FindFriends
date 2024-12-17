// @ts-ignore
/* eslint-disable */
import request from "@/request.js";

/** addTag POST /api/tag/add */
export async function addTagUsingPost(
  body: API.TagAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/api/tag/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listTag GET /api/tag/list */
export async function listTagUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTagUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListTagVo_>("/api/tag/list", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** deleteTag POST /api/tag/remove */
export async function deleteTagUsingPost(
  body: API.BaseDeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponse>("/api/tag/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listTagTree GET /api/tag/tree */
export async function listTagTreeUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listTagTreeUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListTagTreeVo_>("/api/tag/tree", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** updateTag POST /api/tag/update */
export async function updateTagUsingPost(
  body: API.TagUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponse>("/api/tag/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
