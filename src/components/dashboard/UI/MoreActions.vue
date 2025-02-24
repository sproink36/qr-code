<script setup></script>
<template>
  <div class="more-actions">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;

.more-actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  @include blockStyle($bg-color: white, $br-radius: 20px, $padding: 20px);
  @include dashboard-border();
}
</style>
