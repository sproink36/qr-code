<script setup>
import ComponentName from '../../UI/ComponentName.vue';
import SelectMenuCalendar from '../../UI/SelectMenuCalendar.vue';
import SelectMenuCalendar1 from '../../UI/SelectMenuCalendar1.vue';

</script>
<template>
  <div class="statistic-inner-qr">
    <div class="header">
      <ComponentName>Статистика</ComponentName>
      <SelectMenuCalendar1 />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;

.statistic-inner-qr {
  @include blockStyle($bg-color: #f3f5f7, $br-radius: 20px, $padding: 40px);
  height: 900px;
}

.header {
  display: flex;
  // justify-content: space-between;
  align-items: center;
}
</style>
