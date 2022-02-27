<script setup lang="ts">
import { menuRoute } from '@/router/route';
const router = useRouter();
const route = useRoute();
const menuList = reactive(menuRoute);
const activeMenu = computed(() => {
	const { path } = route;
	return path;
});

const clickHandler_menu = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
	router.push({ path: key });
};
</script>

<template>
	<el-menu active-text-color="#ffd04b" :default-active="activeMenu" background-color="#545c64" text-color="#fff" @select="clickHandler_menu" class="el-menu-vertical-demo">
		<el-sub-menu v-for="menu in menuList" :key="menu.path" :index="menu.path">
			<template #title>
				<span>{{ menu.label }}</span>
			</template>
			<el-menu-item v-for="item in menu.children" :key="item.path" :index="menu.path + item.path">{{ item.label }}</el-menu-item>
		</el-sub-menu>
	</el-menu>
</template>

<style>
.el-menu-vertical-demo {
	border-right: 0;
	/* width: 100%; */
}
</style>
