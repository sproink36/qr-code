<script setup>
defineProps({
  link: String,
});
</script>
<template>
  <RouterLink v-if="link" class="qr-code-card-btn" :to="link"
    ><p class="text"><slot /></p>
    <slot name="icon"
  /></RouterLink>
  <div v-else class="qr-code-card-btn">
    <p class="text"><slot /></p>
    <slot name="icon" />
  </div>
  <!-- <div class="overlay" v-if="isDetails">
      <MoreActions class="more-actions">
        <MoreActionsItem>
          <template v-slot:icon><Edit /></template>
          Редактировать куаркод
        </MoreActionsItem>
        <MoreActionsItem>
          <template v-slot:icon><FolderUpload /></template>
          Переместить в папку
        </MoreActionsItem>
        <MoreActionsItem>
          <template v-slot:icon><Pause /></template>
          Приостановить
        </MoreActionsItem>
        <MoreActionsItem>
          <template v-slot:icon><TrashAlt /></template>
          Удалить
        </MoreActionsItem>
      </MoreActions>
    </div> -->
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;

.qr-code-card-btn {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cfd7df;
  cursor: pointer;
  @include blockStyle($bg-color: white, $br-radius: 10px, $padding: 13px 20px);

  & .text {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  // & .overlay {
  //   display: none;
  //   position: absolute;
  //   left: calc(100% - 48px);
  //   bottom: 100%;
  //   width: max-content;
  //   padding-bottom: 24px;
  // }

  // &:hover .overlay,
  // & .overlay:hover {
  //   display: block;
  // }

  &:hover {
    border: 1px solid $primary;
    background-color: #20d6471a;
  }
}
</style>
