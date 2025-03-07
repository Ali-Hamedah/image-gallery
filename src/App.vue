<template>
  <app-layout>
   <Home/>
  </app-layout>
  </template>
  
  <script>
  import AppLayout from "./components/global/AppLayout.vue";
  import Home from "./views/Home.vue";
  
  export default {
   
    components: {
      AppLayout,
      Home,

    },
  
  };
  </script>
  
  <style scoped>
  
  </style>