<template>
  <div
    class="block"
    :class="{ active: currentTag === title }"
    @click="$emit('select-tag', title)"
  >
    <div class="contain contain_defualt">
      <p class="title">{{ title }}</p>
      <div class="icon"><slot></slot></div>
    </div>
    <div class="contain contain_copy">
      <p class="title">{{ title }}</p>
      <div class="icon"><slot></slot></div>
    </div>
    <div class="contain_hidden">
      <p class="title">{{ title }}</p>
      <div class="icon"><slot></slot></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentTag: String,
  title: String,
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/includes/media-queries";

.block {
  text-wrap: nowrap;
  background-color: transparent;
  border: 2px solid #18213c;
  border-radius: 100px;
  width: max-content;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #18213c1a;
  }
}

.contain,
.contain_hidden {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;

  @include media-queries.media-small {
    padding: 10px 20px;
  }
}

.contain_defualt {
  top: 0;
}

.contain_copy {
  top: 100%;
}

.contain_hidden {
  visibility: hidden;
  pointer-events: none;
}

.contain {
  position: absolute;
  left: 0;
  transition: top 0.3s ease;
}

.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #18213c;

  @include media-queries.media-small {
    font-size: 15px;
    line-height: 24px;
  }
}

.icon {
  width: 24px;
  height: 24px;

  & > * {
    width: 100%;
    height: 100%;
    fill: #18213c;
  }
}

.block.active {
  background-color: #18213c;

  .title {
    color: white;
  }

  .icon {
    & > * {
      fill: white;
    }
  }
}

.block:not(.active):hover {
  .contain_defualt {
    top: -100%;
  }

  .contain_copy {
    top: 0;
  }
}
</style>
