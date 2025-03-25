<script setup>
import ButtonTag from "@/components/ButtonTag.vue";
import {
  BitCoin,
  Facebook,
  Instagram,
  Link,
  Location,
  Mail,
  Message,
  Phone,
  Skype,
  SPB,
  Telegram,
  Text,
  VK,
  WhatsApp,
  WiFi,
  YouTube,
  Zoom,
} from "@/components/icons";
import { ref } from "vue";
import Input from "../../settings/components/Input.vue";
const data = [
  { text: "URL-адрес", icon: Link, classSvg: "defualt" },
  { text: "TikTok", icon: Message, classSvg: "defualt" },
  { text: "СБП", icon: SPB, classSvg: "last-stroke" },
  { text: "Telegram", icon: Telegram, classSvg: "defualt" },
  { text: "Текст", icon: Text, classSvg: "defualt" },
  { text: "Facebook", icon: Facebook, classSvg: "last-stroke" },
  { text: "WhatsApp", icon: WhatsApp, classSvg: "last-path" },
  { text: "YouTube", icon: YouTube, classSvg: "you-tube" },
  { text: "Instagram", icon: Instagram, classSvg: "last-path" },
  { text: "SMS", icon: Message, classSvg: "defualt" },
  { text: "Телефон", icon: Phone, classSvg: "last-path" },
  { text: "Skype", icon: Skype, classSvg: "last-path" },
  { text: "WiFi", icon: WiFi, classSvg: "last-path" },
  { text: "Локация", icon: Location, classSvg: "last-path" },
  { text: "Event", icon: Mail, classSvg: "last-path" },
  { text: "Почта", icon: Mail, classSvg: "last-path" },
  { text: "Zoom", icon: Zoom, classSvg: "zoom" },
  { text: "B-Card", icon: Message, classSvg: "last-path" },
  { text: "Криптовалюта", icon: BitCoin, classSvg: "last-path" },
  { text: "VK", icon: VK, classSvg: "last-path" },
];

const currentTag = ref("URL-адрес");
const input = ref("");
function selectTag(title) {
  currentTag.value = title;
}
</script>
<template>
  <div class="tables">
    <div class="list-btn">
      <ButtonTag
        class="btn-tag"
        v-for="item in data"
        :key="item.text"
        :title="item.text"
        @select-tag="selectTag"
        :current-tag="currentTag"
        :class="item.classSvg"
        ><component :is="item.icon"
      /></ButtonTag>
    </div>
    <div class="line"></div>
    <Input type="one-line" v-model="input" :placeholder="currentTag" />
  </div>
</template>
<style lang="css">
.tables .btn-tag .title {
  font-size: 18px;
}
.tables .list-btn .btn-tag .contain,
.tables .list-btn .btn-tag .contain_hidden {
  justify-content: center;
  gap: 10px;
}
</style>
<style lang="scss" scoped>
.tables {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.list-btn {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.btn-tag {
  width: 100%;
}
.line {
  border: 1px solid #cfd7df;
  width: 100%;
}
</style>
