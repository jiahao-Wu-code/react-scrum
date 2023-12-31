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

/**
 * 更新看板
 */
export function updateKanban(projectId, kanbanData) {
    return request({
        url: `/api/projects/${projectId}/kanban`,
        method: 'PUT',
        data: kanbanData
    })
}

/**
 * 查询列表
 * @param {Object} data 查询query
 * @returns 
 */
export function getProjectByQuery(data) {
    return request({
        url: `/api/projects/search`,
        method: 'POST',
        data
    })
}