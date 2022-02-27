<script setup lang="ts">
import useUserStore from '@/store/modules/user.module';
import { ElMessage } from 'element-plus';
const UserStore = useUserStore();
const router = useRouter();
const state = reactive({
	circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
});
const userName = computed(() => UserStore.userInfo.userName);
const clickHandler_logout = () => {
	UserStore.logout();
	ElMessage.success('退出登录成功');
	router.push('/Login');
};

const { circleUrl } = toRefs(state);
</script>

<template>
	<div class="baseHeader">
		<div class="baseHeader_right">
			<el-dropdown>
				<div class="baseHeader-memu">
					<el-avatar :size="40" :src="circleUrl"></el-avatar>
					<div class="baseHeader-name">{{ userName || '运营人员' }}</div>
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="clickHandler_logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<style lang="scss">
.baseHeader {
	height: 100%;
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #f1f1f1;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	&_right {
		height: 100%;
		float: right;

		.baseHeader-memu {
			height: 60px;
			display: flex;
			justify-content: center;
			align-items: center;
			.baseHeader-name {
				padding: 0 10px;
			}
		}
	}
}
</style>
