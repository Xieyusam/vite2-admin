import { STORAGE_PREFIX } from '../constants';
const prefix = STORAGE_PREFIX;

export default {
	/**
	 * 获取一个值
	 * @param key
	 * @return {*}
	 */
	get(key: string) {
		let value = localStorage.getItem(`${prefix}_${key}`);
		if (!value) {
			return null;
		}
		return JSON.parse(value);
	},

	/**
	 * 存储一个值
	 * @param key
	 * @param value
	 */
	set(key: string, value: any) {
		localStorage.setItem(`${prefix}_${key}`, JSON.stringify(value));
	},

	/**
	 * 删除一个值
	 * @param key
	 */
	remove(key: string) {
		localStorage.removeItem(`${prefix}_${key}`);
	},

	/**
	 * 清空所有值（当前项目命名空间下的key值）
	 */
	clear() {
		let len = localStorage.length;
		let keys = [];

		for (let i = 0; i < len; i++) {
			let key = localStorage.key(i);
			if (key && key.startsWith(prefix)) {
				keys.push(key);
			}
		}

		keys.map(key => localStorage.removeItem(key));
	}
};
