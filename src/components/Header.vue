<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="header">
        {{ mensajeRecibido }} <Weather></Weather>
    </div>
</template>
<script setup>
    import Weather from './Weather.vue';
    import { defineProps, ref, watch } from 'vue';

    const props = defineProps(["mensaje"]);
    const mensajeRecibido =ref("");
    
    //escucho los cambios de la propiedad y seteo la variable reactiva
    watch(()=>props.mensaje,(newValue)=>{
        mensajeRecibido.value=newValue
    })

</script>
<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background: #333;
        color: white;
    }
    h3{
        margin: 0;
    }
</style>