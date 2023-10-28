import request from "./request";

/**
 * 获取项目列表
 * @returns 
 */
export function getProject() {
    return request({
        url: `/api/projects`,
        method: 'GET',
    })
}

/**
 * 获取项目详情
 * @returns 
 */
export function getProjectById(projectId) {
    return request({
        url: `/api/project/${projectId}`,
        method: 'GET',
    })
}