import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { baseRoute } from './route';
import useUserStore from '@/store/modules/user.module';

const routerHistory = createWebHashHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由


const router = createRouter({
	history: routerHistory,
	routes: baseRoute
});

// // 删除/重置路由
// export function resetRoute(): void {
//   router.getRoutes().forEach((route) => {
//     const { name } = route
//     if (name) {
//       router.hasRoute(name) && router.removeRoute(name)
//     }
//   })
// }
let UserStore:any = null

router.beforeEach((to, form, next) => {
	!UserStore&&(UserStore = useUserStore())
	if (to.name == 'login') {
		// 如果已登录则不会跳转到登录页
		if (UserStore.loginInfo.isLogin) {
			if (to.name == 'login') next('/');
			else next();
		} else {
			next();
		}
	} else {
		// 未登录无法打开除登录页以外的页面
		if (UserStore.loginInfo.isLogin) {
			next();
		} else {
			next('/login');
		}
	}
});

export function setupRouter(app: App<Element>): void {
	app.use(router);
}
export default router;
