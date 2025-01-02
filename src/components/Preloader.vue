<script setup>
    import { Vue3Lottie } from 'vue3-lottie'
    import Loader from '../animations/loader.json'
</script>

<template>
    <div class="preloader">
        <Vue3Lottie :animationData="Loader" :height="200" :width="200" />
    </div>
</template>

<style>
    .preloader {
        position: fixed;
        z-index: 10000;
        background: #292929;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
    }

    .paws {
        position: absolute;
        bottom: calc(50% - 300px);
        left: calc(50% - 100px);
        transform: rotate(45deg);
    }
</style>