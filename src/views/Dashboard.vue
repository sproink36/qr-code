<script setup>
import SideBar from "@/components/dashboard/side_bar/SideBar.vue";
import TopBar from "@/components/dashboard/top_bar/TopBar.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <div class="dashboard">
    <div class="container dashboard__container">
      <TopBar class="top-bar" />
      <div class="content">
        <SideBar class="side-bar" />
        <div class="rest">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.dashboard {
  width: 100%;
}

.dashboard__container {
  padding: 30px;
}

.content {
  display: flex;
  gap: 20px;
}

.side-bar {
  flex-shrink: 0;
  min-width: 270px;
}

.rest {
  width: 100%;
}

@include media-queries.media-large {
  .dashboard__container {
    max-width: none;
  }
}
</style>
