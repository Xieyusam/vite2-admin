const BaseLayout = () => import('@/layout/baseLayout/index.vue');
const Login = () => import('@/views/login/index.vue');
import home from './modules/home.module';
import other from './modules/other.module';
import { TRouteRecordRaw, TMenuRaw } from '@/types/index';

const mainRoute = [home, other];

export const baseRoute = [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/',
		component: BaseLayout,
		redirect: '/home',
		children: [...mainRoute]
	},
	{
		path: '/error/:status',
		name: 'error',
		component: () => import('@/views/error/index.vue')
	},
	/* 错误路由 */
	{
		path: '/:catchAll(.*)',
		component: () => import('@/views/error/index.vue')
	}
];

const transform_menu = (route: TRouteRecordRaw[]) => {
	return route
		.map(item => {
			let menuItem: TMenuRaw = {
				path: '/' + item.path,
				label: item.meta?.title
			};
			item.children && (menuItem.children = transform_menu(item.children));
			return menuItem;
		})
		.filter(item => item.path !== '/');
};

export const menuRoute: TMenuRaw[] = transform_menu(mainRoute);
console.log(menuRoute);
