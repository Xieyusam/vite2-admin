import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { Path, TIME_OUT, HTTP_REQUEST_CODE, HTTP_REQUEST_STA } from '@/constants/http';
import { ElMessage } from 'element-plus';
import router from '@/router';
import { showLoading, hideLoading } from '@/components/baseFullScreenLoading';
import useUserStore from '@/store/modules/user.module';
let UserStore: any = null;

// 配置新建一个 axios 实例
const instance: AxiosInstance = axios.create({
	baseURL: Path.HTTP_URL,
	timeout: TIME_OUT
});
// 添加请求拦截器
instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		!UserStore && (UserStore = useUserStore());
		const token = UserStore.loginInfo.token;
		if (token && config.headers) {
			config.headers['token'] = `${UserStore.loginInfo.token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// 添加响应拦截器
instance.interceptors.response.use(
	(response: AxiosResponse) => {
		hideLoading();
		switch (response.status) {
			case HTTP_REQUEST_STA.LOGIN_ERROR:
				return [null];
			case HTTP_REQUEST_STA.SUCCESS:
				return handle_response(response);
			default:
				return [null];
		}
	},
	(error: AxiosError) => {
		hideLoading();
		ElMessage.error('请求异常，稍后重试！');
		return Promise.reject(error);
	}
);

export default {
	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	post(url: string, data = {}, isLoading: boolean = true) {
		if (isLoading) {
			showLoading();
		}
		return instance({
			url,
			method: 'post',
			data: qs.stringify(data),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	},
	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	postJSON(url: string, data: any, isLoading = true) {
		if (isLoading) {
			showLoading();
		}
		return instance({
			url,
			method: 'post',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	},
	/**
	 * @param {String} url 接口地址
	 * @param {Object} data 参数
	 * @param {Boolean} isLoading 是否显示loading
	 */
	get(url: string, data: object, isLoading = true) {
		if (isLoading) {
			showLoading();
		}
		return instance({
			url,
			method: 'get',
			params: data
		});
	}
};

// 处理响应回来的数据
function handle_response(response: any) {
	switch (response.data.code) {
		case HTTP_REQUEST_CODE.SUCCESS:
			return [response.data.results ? response.data.results : true, response.data.message, response.data.code];
		case HTTP_REQUEST_CODE.LOGIN_OUT:
			!UserStore && (UserStore = useUserStore());
			UserStore.logout();
			ElMessage.error(response.data.message);
			router.push('Login');
			return [null, response.data.message, response.data.code];
		default:
			ElMessage.error(response.data.message);
	}
}
