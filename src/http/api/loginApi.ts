
import request from '../request'
const prefix = '/question-Server'
const login = {
	// 登录接口
	login: (params: any) => {
		return request.postJSON(`${prefix}/user/login`, params)
	},
}


export default {
	...login
}