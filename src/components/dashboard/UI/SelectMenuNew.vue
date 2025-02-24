<script setup>
import { File, Files, Folder, TwoArrows } from "@/components/icons";
import DropDownMenu from "./DropDownMenu.vue";
import MoreActionsItem from "./MoreActionsItem.vue";
import SelectMenu from "./SelectMenu.vue";
import { ref } from "vue";
import changeStateSelectMenu from "@/module/SelectMenu";

const onlyNew = [
  { icon: File, text: "Только файлы", state: "onlyFails" },
  { icon: Folder, text: "Только папки", state: "onlyFolders" },
];

const onlyNewState = ref({
  failAndFolder: false,
  onlyFails: true,
  onlyFolders: false,
});
</script>
<template>
  <SelectMenu class="select-menu select-menu_new">
    <template v-slot:icon><TwoArrows /></template>
    Сначала новые
    <template v-slot:drop-menu>
      <DropDownMenu>
        <template v-slot:first>
          <MoreActionsItem
            type="check-box"
            state="failAndFolder"
            :selectState="onlyNewState"
            @select-menu="changeStateSelectMenu"
          >
            <template v-slot:icon><Files /></template>
            Все типы
          </MoreActionsItem>
        </template>
        <MoreActionsItem
          type="check-box"
          v-for="item in onlyNew"
          :state="item.state"
          :selectState="onlyNewState"
          @select-menu="changeStateSelectMenu"
        >
          <template v-slot:icon><component :is="item.icon" /></template>
          {{ item.text }}
        </MoreActionsItem>
      </DropDownMenu></template
    >
  </SelectMenu>
</template>
<style lang="scss" scoped></style>
