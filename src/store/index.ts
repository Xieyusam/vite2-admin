import { createPinia } from 'pinia'; //全局管理
import type { App } from 'vue';

export function setupStore(app: App<Element>): void {
	const pinia = createPinia();
	app.use(pinia);
}
