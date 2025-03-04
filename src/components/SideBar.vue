<template>

    <div class="sidebar">

        <h2>Barra Lateral</h2>
        <ul>
            <li><router-link to ="/mi-contador">Mi Contador</router-link></li>
            <li><router-link to ="/lista-de-tareas">Lista De Tareas</router-link></li>
            <li><router-link to ="/registro">Registro</router-link></li>
        </ul>
     
    </div>

</template>

<script setUp>
</script>

<style>
    .sidebar{
        width: 200px;
        background-color: white;
        padding: 20px;
    } 
</style>