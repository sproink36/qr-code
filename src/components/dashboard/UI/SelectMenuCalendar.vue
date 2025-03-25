<script setup>
import { Calendar, CheckMark } from "@/components/icons";
import SelectMenu from "./SelectMenu.vue";
import MoreActions from "./MoreActions.vue";
import { computed, ref, watch } from "vue";
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

const abbreviatedMonthsNames = [
  "янв",
  "февр",
  "март",
  "апр",
  "май",
  "июнь",
  "июль",
  "авг",
  "сент",
  "окт",
  "нояб",
  "дек",
];

const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const selectedStartDate = ref(null); // Начальная дата
const selectedEndDate = ref(null); // Конечная дата
const year = ref(new Date().getFullYear());
const currentMounth = ref(new Date().getMonth());
const monthList = computed(() => {
  return listDaysCalendar(currentMounth.value, year.value);
});

// Emit событие для отправки данных родителю
const emit = defineEmits(["update-dates"]);

// Следим за изменениями selectedStartDate и selectedEndDate
watch([selectedStartDate, selectedEndDate], () => {
  const datesArray = getDatesArray();
  emit("update-dates", datesArray); // Отправляем массив дат родителю
});

const daysWithClasses = computed(() => {
  return monthList.value.map((day) => {
    const isMarkedStart =
      selectedStartDate.value &&
      day.day.getTime() === selectedStartDate.value.getTime() &&
      selectedEndDate.value;
    const isMarkedEnd =
      selectedEndDate.value &&
      day.day.getTime() === selectedEndDate.value.getTime() &&
      selectedStartDate.value;

    return {
      ...day,
      classes: {
        "inner-day": day.isNotCurrentMounth,
        "left-day": isLeftEdge(day.index),
        "right-day": isRightEdge(day.index),
        "selected-day": isSelectedDate(day.day),
        "start-date": isMarkedStart,
        "end-date": isMarkedEnd,
        "in-range": isDateInRange(day.day),
      },
    };
  });
});

function listDaysCalendar(currentMounth, currentYear) {
  const firstDay = new Date(currentYear, currentMounth).getDay();
  const daysInCurrentMonth = new Date(
    currentYear,
    currentMounth + 1,
    0
  ).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMounth, 0).getDate();
  const slicePreviousMonth = firstDay === 0 ? 6 : firstDay - 1;

  const daysList = [];
  let index = 0;
  for (
    let i = daysInPrevMonth - slicePreviousMonth + 1;
    i <= daysInPrevMonth;
    i++
  ) {
    let newMonth = currentMounth;
    let newYear = currentYear;
    if (currentMounth === 0) {
      newMonth = 11;
      newYear = currentYear - 1;
    } else {
      newMonth = currentMounth - 1;
    }

    daysList.push({
      day: new Date(newYear, newMonth, i),
      isNotCurrentMounth: true,
      index: index % 7,
    });

    index++;
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    daysList.push({
      day: new Date(currentYear, currentMounth, i),
      isNotCurrentMounth: false,
      index: index % 7,
    });
    index++;
  }

  // // Рассчитываем, сколько дней из следующего месяца нужно добавить
  const totalDays = daysList.length; // Общее количество дней в daysList
  const remainingDays = 7 - (totalDays % 7); // Сколько дней нужно добавить, чтобы общее количество было кратно 7

  // Добавляем дни из следующего месяца
  for (let i = 1; i <= remainingDays; i++) {
    let newMonth = currentMounth;
    let newYear = currentYear;
    if (currentMounth === 11) {
      newMonth = 0;
      newYear = currentYear + 1;
    } else {
      newMonth = currentMounth + 1;
    }
    daysList.push({
      day: new Date(newYear, newMonth, i),
      isNotCurrentMounth: true,
      index: index % 7,
    });
    index++;
  }

  return daysList;
}

function selectDate(day) {
  if (selectedStartDate.value && selectedEndDate.value) {
    selectedStartDate.value = day;
    selectedEndDate.value = null;
    return;
  }

  if (!selectedStartDate.value) {
    selectedStartDate.value = day;
  } else if (!selectedEndDate.value) {
    if (selectedStartDate.value.getTime() > day.getTime()) {
      selectedEndDate.value = selectedStartDate.value;
      selectedStartDate.value = day;
    } else {
      selectedEndDate.value = day;
    }
  }
}

function isDateInRange(day) {
  if (!selectedStartDate.value || !selectedEndDate.value) return false;
  return day > selectedStartDate.value && day < selectedEndDate.value;
}

function isSelectedDate(day) {
  return (
    (selectedStartDate.value &&
      day.getTime() === selectedStartDate.value.getTime()) ||
    (selectedEndDate.value && day.getTime() === selectedEndDate.value.getTime())
  );
}

function isLeftEdge(index) {
  return index === 0; // Первая колонка (понедельник)
}

function isRightEdge(index) {
  return index === 6; // Последняя колонка (воскресенье)
}

function nextMonth() {
  if (currentMounth.value === 11) {
    currentMounth.value = 0;
    year.value++;
  } else {
    currentMounth.value++;
  }
}

function prevMonth() {
  if (currentMounth.value === 0) {
    currentMounth.value = 11;
    year.value--;
  } else {
    currentMounth.value--;
  }
}

// Функция для получения массива дат
function getDatesArray() {
  if (!selectedStartDate.value || !selectedEndDate.value) return [];

  // Если начальная и конечная даты одинаковы, возвращаем массив с одним объектом
  if (selectedStartDate.value.getTime() === selectedEndDate.value.getTime()) {
    const date = selectedStartDate.value;
    return [
      {
        month: abbreviatedMonthsNames[date.getMonth()],
        day: date.getDate(),
        data: Math.floor(Math.random() * 999) + 1,
      },
    ];
  }

  const dates = [];
  let currentDate = new Date(selectedStartDate.value);

  // Добавляем начальную дату
  dates.push({
    month: abbreviatedMonthsNames[currentDate.getMonth()],
    day: currentDate.getDate(),
    data: Math.floor(Math.random() * 999) + 1,
  });

  // Добавляем все дни в диапазоне
  if (selectedStartDate.value) {
    while (currentDate < selectedEndDate.value) {
      currentDate.setDate(currentDate.getDate() + 1);
      dates.push({
        month: abbreviatedMonthsNames[currentDate.getMonth()],
        day: currentDate.getDate(),
        data: Math.floor(Math.random() * 999) + 1,
      });
    }
  }

  // Добавляем конечную дату
 

  return dates;
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
              v-for="day in daysWithClasses"
              :class="day.classes"
              @click="selectDate(day.day)"
            >
              {{ day.day.getDate() }}
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
