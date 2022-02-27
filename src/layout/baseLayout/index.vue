<script setup lang="ts">
// import BaseView from "../components/BaseView.vue";
import BaseHeader from "../components/BaseHeader.vue";
import BaseAside from "../components/BaseAside.vue";
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <BaseAside />
    </el-aside>
    <el-container>
      <el-header>
        <BaseHeader />
      </el-header>
      <el-main>
        <!-- <BaseView /> -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style></style>
