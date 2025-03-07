<template>
  <v-app-bar>
      <v-toolbar-title>AliHamedah</v-toolbar-title>
      <v-list class="d-flex">
    <v-list-item class="d-flex">
      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>
    <v-list-item class="d-flex">
      <v-list-item-title>About</v-list-item-title>
    </v-list-item>
    <v-list-item class="d-flex">
      <v-list-item-title>Contact</v-list-item-title>
    </v-list-item>
  </v-list>
      <v-btn icon >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
</template>


<script>
export default {
  name: "AppNav"
}
</script>

<style scoped>
</style>
