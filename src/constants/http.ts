/**
 * @description 路径常量
 */
export const Path = {
	HTTP_URL: import.meta.env.VITE_BASE_URL as string
};

// 超时时间(秒)
export const TIME_OUT = 1500;

// 业务响应code
export const HTTP_REQUEST_CODE = {
	SUCCESS: 1000, //成功
	ERROR: 1001, // 业务异常
	PARAM_ERROR: 1002, // 参数异常
	LOGIN_OUT: 1003 //token
};

// http响应状态
export const HTTP_REQUEST_STA = {
	SUCCESS: 200, //成功
	LOGIN_ERROR: 401, // 登录状态异常
	AUTH_ERROR: 403, // 无访问权限
	ERROR: 500 //系统异常
};

// 前端页面错误
export const PAGE_ERROR = {
	REQUEST: -100, // 前端请求异常
	PARAMS: -200 // 参数错误
};
