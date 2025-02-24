<script setup>
import { Calendar, CheckMark } from "@/components/icons";
import SelectMenu from "./SelectMenu.vue";
import MoreActions from "./MoreActions.vue";
import { computed, ref } from "vue";
import Angle from "@/components/icons/Angle.vue";

const items = ["За все время", "Сегодня", "Прошлая неделя", "Прошлый месяц"];
const currentItem = ref("За все время");

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const year = ref(new Date().getFullYear());
const currentMounth = ref(new Date().getMonth());
const monthList = computed(() => {
  return listDaysCalendar(currentMounth.value, year.value);
});

const selectedStartDate = ref(null); // Начальная дата
const selectedEndDate = ref(null); // Конечная дата

function listDaysCalendar(newMonth, year) {
  const firstDay = new Date(year, newMonth).getDay();
  const daysInMonth = new Date(year, newMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, newMonth, 0).getDate();
  const slicePreviousMonth = firstDay === 0 ? 6 : firstDay - 1;

  const daysList = [];
  let index = 0;
  for (
    let i = daysInPrevMonth - slicePreviousMonth + 1;
    i <= daysInPrevMonth;
    i++
  ) {
    daysList.push({
      number: i,
      month: newMonth === 0 ? 11 : newMonth - 1,
      isNotCurrentMounth: true,
      index: index % 7,
    });
    index++;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    daysList.push({
      number: i,
      month: newMonth,
      isNotCurrentMounth: false,
      index: index % 7,
    });
    index++;
  }

  // Рассчитываем, сколько дней из следующего месяца нужно добавить
  const totalDays = daysList.length; // Общее количество дней в daysList
  const remainingDays = 7 - (totalDays % 7); // Сколько дней нужно добавить, чтобы общее количество было кратно 7

  // Добавляем дни из следующего месяца
  for (let i = 1; i <= remainingDays; i++) {
    daysList.push({
      number: i,
      month: newMonth === 11 ? 0 : newMonth + 1,
      isNotCurrentMounth: true,
      index: index % 7,
    });
    index++;
  }

  return daysList;
}

function selectDate(day) {
  const selectedDate = new Date(year.value, day.month, day.number);

  // Если обе даты уже выбраны, сбросить выбор
  if (selectedStartDate.value && selectedEndDate.value) {
    selectedStartDate.value = selectedDate;
    selectedEndDate.value = null;
    return;
  }

  // Если начальная дата не выбрана, установить её
  if (!selectedStartDate.value) {
    selectedStartDate.value = selectedDate;
  }
  // Если начальная дата выбрана, но конечная ещё нет
  else if (!selectedEndDate.value) {
    // Если выбранная дата раньше начальной, поменять их местами
    if (selectedDate < selectedStartDate.value) {
      selectedEndDate.value = selectedStartDate.value;
      selectedStartDate.value = selectedDate;
    } else {
      selectedEndDate.value = selectedDate;
    }
  }
}

function isDateInRange(day) {
  if (!selectedStartDate.value || !selectedEndDate.value) return false;

  const currentDate = new Date(year.value, day.month, day.number);
  return (
    currentDate > selectedStartDate.value && currentDate < selectedEndDate.value
  );
}

function isSelectedDate(day) {
  const currentDate = new Date(year.value, day.month, day.number);
  return (
    (selectedStartDate.value &&
      currentDate.getTime() === selectedStartDate.value.getTime()) ||
    (selectedEndDate.value &&
      currentDate.getTime() === selectedEndDate.value.getTime())
  );
}

function isLeftEdge(index) {
  return index === 0; // Первая колонка (понедельник)
}

function isRightEdge(index) {
  return index === 6; // Последняя колонка (воскресенье)
}

function isRightAfterOrBeforeSelected(day) {
  if (!selectedStartDate.value || !selectedEndDate.value) return false;

  
}

function nextMonth() {
  if (currentMounth.value === 11) {
    currentMounth.value = 0;
    year.value++;
  } else {
    currentMounth.value++;
  }
  // console.log(monthList.value);
}

function prevMonth() {
  if (currentMounth.value === 0) {
    currentMounth.value = 11;
    year.value--;
  } else {
    currentMounth.value--;
  }
  // console.log(monthList.value);
}
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
        <div class="calendar">
          <div class="header">
            <div class="data">{{ months[currentMounth] }} {{ year }}</div>
            <div class="angles">
              <Angle class="icon prev" @click="prevMonth" />
              <Angle class="icon next" @click="nextMonth" />
            </div>
          </div>
          <ul class="week-days">
            <li class="week-day" v-for="week in weekDays">{{ week }}</li>
          </ul>
          <ul class="full-days">
            <li
              class="day"
              v-for="day in monthList"
              :class="{
                'inner-day': day.isNotCurrentMounth,
                'left-day': isLeftEdge(day.index),
                'right-day': isRightEdge(day.index),
                'selected-day': isSelectedDate(day),
                'in-range': isDateInRange(day),
              }"
              @click="selectDate(day)"
            >
              {{ day.number }}
            </li>
          </ul>
        </div>
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
  & .in-range {
    color: green;
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
  & .in-range + .right-day {
    color: red;
  }
  //   & .right-day {
  //     color: red;
  //   }
  //   & .left-day {
  //     color: green;
  //   }
}
</style>
