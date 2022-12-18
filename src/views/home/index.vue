<template>
  <div>
    编辑区
    <div class="edit-body">
      <div class="main-list">
        <div v-for="item in mockMain" :key="item.id" class="main-item">
          {{ item.name }}
        </div>
      </div>
      <!-- 支线1 -->
      <div class="other">
        <div class="other-arrow-box" :style="arrowBoxStyle()">
          <div
            v-for="(item, index) in mockOther"
            :key="item.id"
            class="other-arrow-item"
            :style="arrowStyle(item, index)"
          >
            <div class="other-arrow"></div>
          </div>
        </div>
        <div class="other-list">
          <div v-for="item in mockOther" :key="item.id" class="other-item">
            {{ item.name }}
          </div>
        </div>
      </div>
      <!-- 支线2 -->
      <div class="other">
        <div class="other-arrow-box" :style="arrowBoxStyle()">
          <div
            v-for="(item, index) in mockOther2"
            :key="item.id"
            class="other-arrow-item"
            :style="arrowStyle(item, index)"
          >
            <div class="other-arrow"></div>
          </div>
        </div>
        <div class="other-list">
          <div v-for="item in mockOther2" :key="item.id" class="other-item">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mockMain = ref([
  { name: "node-1", id: 1 },
  { name: "node-2", id: 2 },
  { name: "node-3", id: 3 },
  { name: "node-4", id: 4 },
  { name: "node-5", id: 5 },
  { name: "node-6", id: 6 },
  { name: "node-7", id: 7 },
  { name: "node-8", id: 8 },
  { name: "node-9", id: 9 },
  { name: "node-10", id: 10 },
  { name: "node-11", id: 11 },
  { name: "node-12", id: 12 },
]);
const mockOther = ref([
  { name: "node-1", id: 1, over: 4 },
  { name: "node-2", id: 2, over: 3 },
  { name: "node-3", id: 3, over: 5 },
  { name: "node-4", id: 4, over: 5 },
  { name: "node-5", id: 5, over: 6 },
]);
const mockOther2 = ref([
  { name: "node-1", id: 1, over: 4 },
  { name: "node-2", id: 2, over: 3 },
  { name: "node-3", id: 3, over: 5 },
  { name: "node-4", id: 4, over: 5 },
  { name: "node-5", id: 5, over: 11 },
]);
const arrowStyle = (item, index) => {
  return {
    top: 30 + 80 * index + "px",
    left: 30 * (index + 1) + "px",
    width: "100%",
    height: 30 + 80 * (item.over - index - 1) + "px",
  };
};
const arrowBoxStyle = () => {
  return {
    width: 30 + 30 * mockOther.value.length + "px",
  };
};
</script>

<style lang="scss" scoped>
.edit-body {
  width: 100%;
  height: 80vh;
  background-color: #eeeeee;
  display: flex;
  overflow: auto;

  .main-list {
    width: 200px;
    background-color: #e0dcdc;
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    // flex-wrap: nowrap;
    height: fit-content;

    .main-item {
      width: 100%;
      height: 60px;
      margin-bottom: 20px;
      background-color: #555454;
      flex-shrink: 0;
    }
  }
  .other {
	display: flex;
	position: relative;
    .other-list {
      width: 200px;
      height: 100%;
      background-color: #d8f4bc;
      box-sizing: border-box;
      // padding: 0 20px;
      display: flex;
      flex-direction: column;

      .other-item {
        width: 100%;
        height: 60px;
        margin-bottom: 20px;
        background-color: #a2c350;
      }
    }
    .other-arrow-box {
      height: 100%;
      // background-color: #ffffff;
      background-color: #d8f4bc;
      position: relative;
      overflow: hidden;
      .other-arrow-item {
        position: absolute;
        border-top: 4px solid #a2c350;
        border-left: 4px solid #a2c350;
        .other-arrow {
          // height: 10px;
          // width: 10px;
          position: absolute;
          bottom: -1px;
          left: -12px;
          border-top: 20px solid #a2c350;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
      }
    }
  }
}
</style>
