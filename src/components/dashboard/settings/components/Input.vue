<script setup>
import { ref } from "vue";
import QrDesignBlock from "../../UI/QrDesignBlock.vue";

const props = defineProps({
  type: {
    type: String,
    default: "default", // defualt one-line color forms
  },
  title: String,
  placeholder: String,
  dataForms: Array,
});
defineEmits(["select-form"]);
const model = defineModel();
const inputRef = ref(null);
function focusInput() {
  if (props.type !== "forms") {
    inputRef.value.focus();
  }
}
</script>
<template>
  <div
    class="input"
    :class="{ color: type === 'color', forms: type === 'forms' }"
    @click="focusInput"
  >
    <div class="title" v-if="type !== 'one-line'">{{ title }}</div>
    <input
      v-if="type !== 'forms'"
      ref="inputRef"
      v-model="model"
      type="text"
      class="text"
      :placeholder="placeholder"
    />
    <div
      class="block-color"
      v-if="type === 'color'"
      :style="{ 'background-color': model }"
    ></div>
    <div class="list" v-if="type === 'forms'">
      <QrDesignBlock
        v-for="item in dataForms"
        :id="item.id"
        :current-active="model"
        :key="item.id"
        @click="$emit('select-form', item.id)"
        ><component :is="item.component"
      /></QrDesignBlock>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;
.input {
  @include dashboard-border($border: 1px solid $stroke, $br-radius: 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 10px;
  height: 72px;
}
.title {
  grid-area: title;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #8b909d;
}
.text {
  grid-area: text;
  background-color: transparent;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.text::placeholder {
  color: #18213c; /* Цвет текста */
  font-family: "Golos Text";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.block-color {
  grid-area: color;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #18213c;
}
.input.color {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas: "title color" "text color";
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 20px;
  height: auto;
}
.forms {
  gap: 10px;
  height: auto;
  padding: 20px;
}
.list {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
