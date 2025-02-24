<script setup>
import LatestQR from "./components/LatestQR.vue";
import News from "./components/News.vue";
import Projects from "./components/Projects.vue";
import Statistics from "./components/Statistics.vue";
</script>
<template>
  <div class="dashboard-main">
    <LatestQR class="latest-qr" />
    <News class="news" />
    <Statistics class="statistics" />
    <Projects class="projects" />
  </div>
</template>
<style lang="scss" scoped>
.dashboard-main {
  display: grid;
  grid-template-areas:
    "latest-qr latest-qr news"
    "statistics projects projects";
  grid-template-columns: auto auto auto;
  gap: 20px;
  width: 100%;
}

.latest-qr {
  grid-area: latest-qr;
}

.news {
  grid-area: news;
}

.statistics {
  grid-area: statistics;
  min-width: 1028px;
  width: 100%;
  max-height: 468px;
}

.projects {
  grid-area: projects;
}
</style>
