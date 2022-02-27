import BaseView from '@/layout/baseView/index.vue';

export default {
	path: 'other',
	component: BaseView,
	meta: {
		title: '其他'
	},
	children: [
		{
			path: '',
			redirect: '/other/index'
		},
		{
			path: 'index',
			component: () => import('@/views/other/index.vue'),
			meta: {
				title: '其他'
			}
		},
		{
			path: 'edit',
			component: () => import('@/views/other/edit.vue'),
			meta: {
				title: '编辑'
			}
		},
		{
			path: 'list',
			component: () => import('@/views/other/list.vue'),
			meta: {
				title: '列表'
			}
		}
	]
};
