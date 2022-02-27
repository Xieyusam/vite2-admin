<script setup lang="ts"></script>

<template>
	<div class="baseView">
		<router-view v-slot="{ Component, route }">
			<transition name="fade-transform" mode="out-in">
				<component :is="Component" :key="route.fullPath" />
			</transition>
		</router-view>
	</div>
</template>

<style>
</style>
