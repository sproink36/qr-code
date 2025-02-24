<script setup>
import { Angle, QRCode } from "@/components/icons";
import BlockIcons from "../UI/BlockIcons.vue";
import Link from "../UI/Link.vue";
import TotalScans from "./components/TotalScans.vue";
import ByMonth from "./components/ByMonth.vue";

defineProps({
  link: String,
  columnStyle: Boolean,
});
</script>
<template>
  <div class="qr-card-statistics" :class="{ column: columnStyle }">
    <div class="facts">
      <BlockIcons class="block-icons"><QRCode class="icon" /></BlockIcons>
      <div class="facts__texts">
        <Link class="link" />
        <p class="text">yumashev.stern.xyz</p>
        <div class="facts__info-folder">Без папки · Активный</div>
      </div>
      <RouterLink class="details" :to="link" v-if="link">
        <div class="text">Детали</div>
        <Angle class="icon" />
      </RouterLink>
    </div>
    <div class="statistics">
      <TotalScans />
      <ByMonth :column-style="columnStyle" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "/src/assets/scss/includes/dashboard/mixins" as *;
@use "/src/assets/scss/includes/variables" as *;

.qr-card-statistics {
  display: flex;
  justify-content: space-between;
  @include blockStyle($bg-color: white, $br-radius: 20px, $padding: 20px);
}

.facts {
  display: flex;
  gap: 20px;
}

.block-icons {
  width: 120px;
  height: 120px;
  padding: 20px;
}

.facts__texts {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.details {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  & .text {
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
  }

  & .icon {
    width: 24px;
    height: 24px;
    transform: rotateZ(90deg);
    fill: $primary;
  }
}

.link {
  width: max-content;
}

.text {
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
}

.facts__info-folder {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #18213c80;
}

.statistics {
  display: flex;
  align-items: stretch;
  gap: 20px;
}

.qr-card-statistics.column {
  flex-direction: column;
  gap: 20px;

  & .facts {
    & .facts__texts {
      margin-right: auto;
    }
  }

  & .statistics {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
