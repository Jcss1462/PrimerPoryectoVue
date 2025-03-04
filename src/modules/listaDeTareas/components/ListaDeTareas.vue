<template>
    <div>
        <h2>Lista de tareas</h2>
        <h3>Nombre: {{ nombre }}</h3>
        <h3>Email: {{ email }}</h3>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">{{tarea}}  <button @click="borrarTarea(index)">Borrar</button></li>
           
        </ul>
    </div>

</template>
  
<script setup>
    import { useRegistrarStore } from '@/modules/registro/stores/registrarStores';
    import {ref} from 'vue';

    const registrarStore = useRegistrarStore();
    const nombre =registrarStore.nombre;
    const email =registrarStore.email;
    const tareas = ref([]);
    const nuevaTarea = ref("");

    const addTarea = () =>{
        tareas.value.push(nuevaTarea.value);
        nuevaTarea.value="";
    }

    const borrarTarea = (index) =>{
        tareas.value.splice(index,1);
    }

    // // Escuchar cambios en la store y actualizar los valores locales
    // watch(() => registrarStore.nombre, (newValue) => {
    //     nombre.value = newValue;
    // });

    // watch(() => registrarStore.email, (newValue) => {
    //     email.value = newValue;
    // });


</script>


<style scoped>


</style>
