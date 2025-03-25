<script setup>
import { Download, TrashAlt } from "@/components/icons";
import { computed, ref } from "vue";

const props = defineProps({ type: String, img: String });
const emit = defineEmits(["update:img"]); // Добавляем emit для обновления пропса
const fileName = ref("");
const fileInput = ref(null);
const accept = computed(() => {
  if (props.type === "frame") {
    return ".png, .jpg, .jpeg";
  }
});
const completed = computed(() => {
  if (props.img) {
    return true;
  }
});
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    fileName.value = file.name; // Сохраняем название файла
    const reader = new FileReader();
    reader.onload = (e) => {
      emit("update:img", e.target.result); // Обновляем пропс img
    };
    reader.readAsDataURL(file); // Читаем файл как Data URL
  }
};
const handleClear = () => {
  emit("update:img", null); 
  fileName.value = ""; 
  fileInput.value.value = null; // Сбрасываем значение input
};
</script>
<template>
  <label class="download-input" :class="{ completed: completed }">
    <input type="file" :accept="accept" @change="handleFileChange" ref="fileInput"/>
    <div class="info">
      <div class="dowload-img" v-if="img">
        <img :src="img" class="img" />
      </div>
      <div class="text" v-if="!completed">
        <slot />
      </div>
      <div class="text" v-if="completed">
        <span class="text__margin">Рамка успешно загружена</span>
        <span class="text__grey">{{ fileName }}</span>
      </div>
    </div>
    <Download class="icon" v-if="!completed" />
    <TrashAlt class="delete-icon icon" v-if="completed" @click.prevent="handleClear"/>
  </label>
</template>
<style lang="scss" scoped>
.download-input {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 72px;
  width: 100%;
  padding: 0 20px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%2320D647' stroke-width='3' stroke-dasharray='8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
  cursor: pointer;
  background-color: #20d6470d;
  border-radius: 20px;
  &.completed {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='20' ry='20' stroke='%2318213C' stroke-width='3' stroke-dasharray='8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
    background-color: #18213c0d;
  }
}
.info {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.dowload-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background-color: white;
  & .img {
    width: 23px;
    height: 23px;
  }
}
.text,
.text > span {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}
.text__margin {
  margin-right: 10px;
}
.text__grey {
  color: #8b909d;
}
input {
  visibility: hidden;
  width: 0px;
  height: 0px;
}
.icon {
  width: 24px;
  height: 24px;
  & > * {
    fill: #20d647;
  }
}
.delete-icon {
  & > * {
    fill: #ff643a;
  }
}
</style>
