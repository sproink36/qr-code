<script setup>
import { Folder } from "@/components/icons";
import SelectMenu from "./SelectMenu.vue";
</script>
<template>
  <SelectMenu class="select-menu-folders">
    <template v-slot:icon>
      <Folder />
    </template>
    Все папки
  </SelectMenu>
</template>
<style lang="scss" scoped></style>
