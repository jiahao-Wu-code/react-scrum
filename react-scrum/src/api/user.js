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