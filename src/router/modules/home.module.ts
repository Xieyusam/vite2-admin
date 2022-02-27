import BaseView from '@/layout/baseView/index.vue';

export default {
	path: 'home',
	component: BaseView,
	meta: {
		title: '首页'
	},
	children: [
		{
			path: '',
			redirect: '/home/index'
		},
		{
			path: 'index',
			component: () => import('@/views/home/index.vue'),
			meta: {
				title: '首页'
			}
		},
		{
			path: 'edit',
			component: () => import('@/views/home/edit.vue'),
			meta: {
				title: '编辑'
			}
		},
		{
			path: 'list',
			component: () => import('@/views/home/list.vue'),
			meta: {
				title: '列表'
			}
		}
	]
};
