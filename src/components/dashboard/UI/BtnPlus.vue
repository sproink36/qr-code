<script setup>
import { PlusCircle } from "@/components/icons";
</script>
<template>
  <div class="btn-plus"><PlusCircle class="icon" /></div>
</template>
<style lang="scss" scoped>
.btn-plus {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 72px;
  border: 1px solid #cfd7df;
  border-radius: 20px;
  cursor: pointer;
}
.icon {
  width: 24px;
  height: 24px;
}
</style>
