import request from './request'

/**
 * 用户注册
 * @param { Object } newUserInfo 用户注册信息
 * @returns 
 */
export function addUser(newUserInfo) {
    return request({
        url: `/api/register`,
        method: 'POST',
        data: newUserInfo
    })
}

/**
 * 用户登录
 * @param {Object} userInfo 用户注册信息
 */
export function userLogin(userInfo) {
    return request({
        url: `/api/login`,
        method: 'POST',
        data: userInfo
    })
}

/**
 * 用户列表
 * 
 */
export function getUserList (){
    return request({
        url: `/api/users`,
        method: 'GET',
    })
}


/**
 * 部门列表
 * 
 */
export function getOrgList (){
    return request({
        url: `/api/organization`,
        method: 'GET',
    })
}

/**
 * 部门列表
 * 
 */
export function getTaskTypeList (){
    return request({
        url: `/api/task/type_list`,
        method: 'GET',
    })
}