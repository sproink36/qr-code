<script setup>
import { CheckBox } from "@/components/icons";

const props = defineProps({
  type: {
    type: String,
    default: "link",
  },
  state: String,
  selectState: Object,
});

const emit = defineEmits(["selectMenu"]);

function clickEvent() {
  if (props.type === "link") {
    return;
  }

  if (props.type === "check-box") {
    emit("selectMenu", props.state, props.selectState);
    return;
  }
}
</script>
<template>
  <div class="more-actions-item" @click="clickEvent">
    <div class="icon">
      <slot name="icon" />
    </div>
    <p class="text">
      <slot />
    </p>
    <CheckBox class="check-box" v-if="type === 'check-box' && selectState[state] === true" />
  </div>
</template>
<style lang="scss" scoped>
.more-actions-item {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.icon {
  width: 24px;
  height: 24px;

  & > * {
    width: 100%;
    height: 100%;
  }
}

.text {
  flex-grow: 1;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.check-box {
  width: 24px;
  height: 24px;
  pointer-events: none;
}
</style>
