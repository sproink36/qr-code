<template>
    <h3 >
        <slot />
    </h3>
</template>
<script setup lang='js'>
</script>
<style lang='scss' scoped>
@use "/src/assets/scss/includes/media-queries";

h3 {
    font-family: "PIXY";
    text-underline-position: from-font;
    font-weight: 400;
    width: 100%;

    @include media-queries.media-Xlarge {
        font-size: 88px;
        line-height: 88px;
        text-align: left;
        max-width: 1117px;
    }

    @include media-queries.media-large {
        font-size: 72px;
        line-height: 72px;
        text-align: left;
        max-width: 680px;
    }

    @include media-queries.media-medium {
        text-align: center;
        line-height: 56px;
        font-size: 48px;
    }

    @include media-queries.media-small {
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        overflow-wrap: break-word;
    }
}
</style>
