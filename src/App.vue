<template>


  <p> {{contador}}</p>
  <br>
  <p><button @click="Incrementar">Incrementar</button></p>
  <br>
  <p><button @click="Decementar">Decementar</button></p>

</template>

<script setup>
  import {ref} from 'vue';
  const contador = ref(0);

  const Incrementar = () =>{
    contador.value++;
  }

  const Decementar = () =>{
    contador.value--;
  }
</script>


<style scoped>

p{
  color: red;
}

</style>
