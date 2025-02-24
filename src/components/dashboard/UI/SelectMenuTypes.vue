<script setup>
import { Bolt, FastMail, Image, Link, TextFields } from '@/components/icons';
import DropDownMenu from './DropDownMenu.vue';
import MoreActionsItem from './MoreActionsItem.vue';
import SelectMenu from './SelectMenu.vue';
import changeStateSelectMenu from '@/module/SelectMenu';
import { ref } from 'vue';

const fullTypes = [
  { icon: Link, text: "ссылка", state: "links" },
  { icon: Image, text: "Картинка", state: "images" },
  { icon: TextFields, text: "Текст", state: "texts" },
  { icon: FastMail, text: "Электронная почта", state: "mails" },
];

const typesState = ref({
  types: false,
  links: true,
  images: false,
  texts: false,
  mails: false,
});

</script>
<template>
  <SelectMenu class="select-menu select-menu_folder">
    <template v-slot:icon><Bolt /></template>
    Все типы
    <template v-slot:drop-menu>
      <DropDownMenu>
        <template v-slot:first>
          <MoreActionsItem
            type="check-box"
            state="types"
            :selectState="typesState"
            @select-menu="changeStateSelectMenu"
          >
            <template v-slot:icon><Bolt /></template>
            Все типы
          </MoreActionsItem>
        </template>
        <MoreActionsItem
          type="check-box"
          v-for="item in fullTypes"
          :state="item.state"
          :selectState="typesState"
          @select-menu="changeStateSelectMenu"
        >
          <template v-slot:icon><component :is="item.icon" /></template>
          {{ item.text }}
        </MoreActionsItem>
      </DropDownMenu>
    </template>
  </SelectMenu>
</template>
<style lang="scss" scoped></style>
