<template>
    <h3>Propiedades Computadas</h3>
    <input type="text" v-model="valor">
    {{ valor }}
    {{ valorCalculado }}
    <ResultadoSections :resultado="valorCalculado"></ResultadoSections>
</template>
<script setup>
    import { computed, ref } from 'vue';
    import ResultadoSections from '../components/ResultadoSections.vue';
    const valor = ref("");
    const valorCalculado =computed(()=>{
        return valor.value*3
    });
</script>
<style scoped></style>