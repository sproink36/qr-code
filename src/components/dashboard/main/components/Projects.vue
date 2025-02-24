<script setup>
import ComponentName from "@/components/dashboard/UI/ComponentName.vue";
import BlockIcons from "@/components/dashboard/UI/BlockIcons.vue";
import { Folder } from "@/components/icons";

defineProps({
  link: String,
});
</script>
<template>
  <div class="projects">
    <ComponentName class="project__title">Проекты</ComponentName>
    <div class="list">
      <RouterLink
        class="folder-card"
        v-for="_ in 3"
        to="/dashboard/InnerFolder/1"
      >
        <BlockIcons class="block-icon">
          <Folder class="icon" />
        </BlockIcons>
        <div class="folder-info">
          <div class="title">Куаркоды для ресторана</div>
          <div class="text">Папка · 5 куаркодов</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.projects {
  @include blockStyle();
}

.project__title {
  margin-bottom: 20px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.folder-card {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  @include blockStyle($bg-color: white, $br-radius: 10px, $padding: 20px);
  cursor: pointer;
}

.block-icon {
  width: 60px;
  height: 60px;

  & .icon {
    width: 24px;
    height: 24px;
  }
}

.folder-info {
  & .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: black;
  }

  & .text {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #18213c80;
  }
}
</style>
