<script setup>
import Button from "@/components/Button.vue";
import { PlusCircle } from "@/components/icons";
</script>
<template>
  <Button class="btn-create-qr" btnType="green">
    <div>
      <PlusCircle />
      <p>Создать куаркод</p>
    </div>
  </Button>
</template>
<style lang="scss" scoped>
.btn-create-qr {
  min-width: 234px;
  border-radius: 20px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
  }

  & p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
