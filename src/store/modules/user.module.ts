import { ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import storage from '@/libs/storage';


// 对外部暴露一个 use 方法，该方法会导出我们定义的 state
interface UserInfoRaw {
	createdTime: string;
	id: number | string;
	phone: string;
	userName: string;
}
interface loginInfoRaw {
	isLogin: boolean;
	token: string;
}
const useUserStore = defineStore('user', function () {
	const userInfo: UserInfoRaw | null = reactive<UserInfoRaw>(
		storage.get('userInfo') || {
			createdTime: '',
			id: '',
			phone: '',
			userName: ''
		}
	);
	const loginInfo: loginInfoRaw = reactive<loginInfoRaw>({
		isLogin: false || storage.get('isLogin'),
		token: '' || storage.get('token')
	});

	// 设置登录状态
	const setLogin = (data: loginInfoRaw) => {
		loginInfo.isLogin = data.isLogin;
		loginInfo.token = data.token;
		storage.set('isLogin', true);
		storage.set('token', data.token);
	};
	const resetLogin = () => {
		loginInfo.isLogin = false;
		loginInfo.token = '';
	};
	// 设置用户状态
	const setUserInfo = (data: UserInfoRaw) => {
		userInfo.createdTime = data.createdTime;
		userInfo.id = data.id;
		userInfo.phone = data.phone;
		userInfo.userName = data.userName;
		storage.set('userInfo', data);
	};
	// 清空用户状态
	const resetUserInfo = () => {
		userInfo.createdTime = '';
		userInfo.id = '';
		userInfo.phone = '';
		userInfo.userName = '';
	};
	const login = (user: UserInfoRaw, data: loginInfoRaw) => {
		setLogin(data);
		setUserInfo(user);
	};
	const logout = () => {
		resetLogin();
		resetUserInfo();
		storage.clear();
	};
	return {
		userInfo,
		setUserInfo,
		resetUserInfo,
		loginInfo,
		setLogin,
		resetLogin,
		login,
		logout
	};
});

export default useUserStore;
