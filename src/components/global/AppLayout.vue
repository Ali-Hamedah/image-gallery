<template>
  <div class="layout">
    <v-layout >
      <AppNav />
      <v-main class="flex-grow-1">
        <slot></slot>
      </v-main>
    </v-layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";

export default {
  components: {
    AppNav,
  }
}
</script>

