<script setup>
import { ref } from "vue";
import { designColorText } from "../../settings/data/CellDesignChoice";
import Input from "../../settings/components/Input.vue";
import DownloadInput from "../../UI/DownloadInput.vue";
const selectQr = ref(1);
const color = ref("#18213C");
const text = ref("SCAN ME");
const imgFrame = ref();
</script>
<template>
  <div class="design-color-text">
    <div class="list">
      <component
        v-for="item in designColorText"
        :key="item.id"
        :is="item.component"
        @click="selectQr = item.id"
        :id="item.id"
        :currentQr="selectQr"
        :color="selectQr === item.id ? color : null"
        :text
        >{{ text }}</component
      >
    </div>
    <div class="inputs">
      <Input type="color" title="Цвет рамки" v-model="color"></Input>
      <Input title="Текст в рамке" v-model="text"></Input>
      <DownloadInput class="big" type="frame" v-model:img="imgFrame"
        >Загрузите свой вариант рамки (PNG, JPG, JPEG) 460х640
      </DownloadInput>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.design-color-text {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.list {
  display: flex;
  align-items: center;
  gap: 10px;
}
.inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    column-gap: 20px;
    row-gap: 30px;
}
.big {
    grid-column: 1 / -1;
}
</style>
