<script setup>
defineProps({
  stronge: Boolean,
});
</script>
<template>
  <div class="title" :class="{ big: stronge }"><slot /></div>
</template>
<style lang="scss" scoped>
.title {
  font-family: "PIXY";
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
}

.big {
  font-size: 64px;
  line-height: 72px;
}
</style>
