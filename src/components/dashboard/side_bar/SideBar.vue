<script setup>
import Button from "@/components/Button.vue";
import NavigationCard from "./components/NavigationCard.vue";
import TariffAndInfo from "./components/TariffAndInfo.vue";
</script>
<template>
  <div class="side-bar">
    <NavigationCard class="navigation-card" />
    <TariffAndInfo class="tariff-adn-info" />
    <Button btnType="green" class="btn">Создать куаркод</Button>
  </div>
</template>
<style lang="scss" scoped>
.side-bar {
  display: flex;
  flex-direction: column;

  & > * {
    width: 100%;
  }

  & .btn {
    padding: 28px 0;
    border-radius: 15px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}

.navigation-card {
  margin-bottom: 365px;
}

.tariff-adn-info {
  margin-bottom: 20px;
}
</style>
