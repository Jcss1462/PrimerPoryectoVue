<!-- eslint-disable vue/multi-word-component-names -->
<template>
    La tempratura actual es: {{weatherStore.temperatura}}°
</template>
<script setup>
    import { usewWeather } from '@/composables/useWeather';
    import { onMounted } from 'vue';
    import { useWeatheStore } from '../stores/weatherStore'  
    const weatherStore =useWeatheStore()
    onMounted(()=>{
        usewWeather();
        console.log("0")
    })
</script>
<style scoped></style>