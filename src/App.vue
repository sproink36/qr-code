<script setup>
import Preloader from './components/Preloader.vue';
import { ref, onMounted, watch, provide } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const data = ref({
  loading: true
})
const isMob = ref(false)
const route = useRoute()
const store = useStore()

const checkWidth = () => {
  if (window.innerWidth < 1080) {
    isMob.value = true
  } else {
    isMob.value = false
  }
}

provide('isMob', isMob)
checkWidth()

window.addEventListener('resize', () => {
  checkWidth()
})

onMounted(() => {
  window.addEventListener("load", () => {
    data.value.loading = false;
  })
})

watch(
  () => route.name,
  () => {
    window.scrollTo(0, 0)
  }
)

</script>

<template>
  <div>
    <Preloader v-if="data.loading" />
    <main>
      <router-view />
    </main>
  </div>
</template>
