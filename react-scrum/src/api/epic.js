import request from './request'

/**
 * 新建 EPIC
 */
export function addEpic({ projectId, epic_name }) {
    return request({
        url: `/api/epic/${projectId}`,
        method: 'POST',
        data: {
            epic_name
        }
    })
}