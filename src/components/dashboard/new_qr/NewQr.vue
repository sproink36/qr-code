<script setup>
import ComponentName from "../UI/ComponentName.vue";
import DesignColorCells from "./components/DesignColorCells.vue";
import DesignColorSquare from "./components/DesignColorSquare.vue";
import DesignColorText from "./components/DesignColorText.vue";
import Painting from "./components/Painting.vue";
import Table from "./components/Table.vue";
import Tables from "./components/Tables.vue";

const dataTables = [
  { text: "Выберите тип и введите данные", component: Tables },
  { text: "Дизайн и цвет ячеек", component: DesignColorCells },
  { text: "Дизайн, цвет и текст рамки", component: DesignColorText },
  { text: "Дизайн и цвет квадрата", component: DesignColorSquare },
  { text: "Покраска", component: Painting },
  { text: "Шрифт", component: null },
  { text: "Логотип", component: null },
  { text: "Фон", component: null },
  { text: "Анимация", component: null },
];
</script>
<template>
  <div class="new-qr">
    <div class="main-block">
      <ComponentName class="new-qr__title">Новый куаркод</ComponentName>
      <div class="new-qr__tables">
        <Table
          v-for="(table, index) in dataTables"
          :title="table.text"
          :index="String(index + 1)"
        >
          <component :is="table.component" />
        </Table>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.new-qr {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.main-block {
  width: 100%;
}
.new-qr__title {
  margin-bottom: 20px;
}
.new-qr__tables {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
}
</style>
