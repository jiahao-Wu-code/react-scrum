import request from "./request";

export function getProject() {
    return request({
        url: `/api/projects`,
        method: 'GET',
    })
}