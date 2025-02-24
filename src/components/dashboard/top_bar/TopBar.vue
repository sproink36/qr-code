<script setup>
import BackToHomepageButton from "./components/BackToHomepageButton.vue";
import MyProfileButton from "./components/MyProfileButton.vue";
import NotificationsButton from "./components/NotificationsButton.vue";
import SearchQr from "./components/SearchQr.vue";
import fakeUser from "@/assets/img/fakeUser.png";
</script>
<template>
  <div class="top-bar">
    <BackToHomepageButton class="back-to-home-page-button" />
    <SearchQr class="search-qr" />
    <NotificationsButton
      class="notifications-button"
      numberNotifications="99"
    />
    <MyProfileButton
      class="my-profile-button"
      :img="fakeUser"
      name="Василий Алексеев"
      mail="vasily@gmail.com"
    />
  </div>
</template>
<style lang="scss" scoped>
.top-bar {
  width: 100%;
  display: flex;
  gap: 20px;
  padding-bottom: 20px;

  & .search-qr {
    flex-grow: 1;
  }
}
</style>
