<script setup>
import { Calendar, CheckMark } from "@/components/icons";
import SelectMenu from "./SelectMenu.vue";
import MoreActions from "./MoreActions.vue";
import { ref } from "vue";

const items = ["За все время", "Сегодня", "Прошлая неделя", "Прошлый месяц"];
const currentItem = ref("За все время");

const range = ref({
  start: new Date(2020, 0, 6),
  end: new Date(2020, 0, 10),
});
</script>
<template>
  <SelectMenu class="select-menu-calendar">
    <template v-slot:icon>
      <Calendar class="icon calendar-icon" />
    </template>
    {{ currentItem }}
    <template v-slot:drop-menu>
      <MoreActions class="more-actions">
        <div class="list">
          <div class="item" v-for="item in items" @click="currentItem = item">
            <div class="text">{{ item }}</div>
            <CheckMark class="icon" v-if="currentItem === item" />
          </div>
        </div>
        <div class="line"></div>
        <VDatePicker v-model.range="range"  />
      </MoreActions>
    </template>
  </SelectMenu>
</template>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/variables" as *;
.select-menu-calendar {
  width: 250px;
  & .calendar-icon {
    fill: $black;
  }
}
.more-actions {
  width: 315px;
  border-radius: 20px;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  & .text {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  & .icon {
    width: 24px;
    height: 24px;
  }
}
.line {
  height: 1px;
  background-color: $stroke;
}
.calendar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .data {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  & .angles {
    display: flex;
    gap: 8px;
    & .icon {
      width: 24px;
      height: 24px;
      fill: $primary;
      cursor: pointer;
    }
    & .prev {
      transform: rotateZ(-90deg);
    }
    & .next {
      transform: rotateZ(90deg);
    }
  }
}
.week-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  & .week-day {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
  }
}
.full-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  // grid-template-rows: ;
  row-gap: 10px;
  & .day {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    z-index: 1;
  }
  & .inner-day {
    color: #8b909d;
  }
  & .selected-day {
    color: $black;
  }
  & .selected-day::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: $primary;
    transform: translate(-50%);
    z-index: -1;
  }
  & .selected-day::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #20d6471a;
    z-index: -1;
  }
  & .start-date:not(.right-day)::before {
    left: 50%;
    right: 0;
  }
  & .end-date:not(.left-day)::before {
    left: 0;
    right: 50%;
  }
  & .in-range::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #20d6471a;
    z-index: -1;
  }
  & .in-range.right-day:not(.selected-day)::after {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  & .in-range.left-day:not(.selected-day)::after {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  & .start-date.end-date::before {
    display: none;
  }
}
</style>
