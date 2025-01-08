<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Startsidan</RouterLink>
    <RouterLink to="/data">Data</RouterLink>
    <RouterLink to="/about">Om oss</RouterLink>
  </nav>
  <h1>Hejsan</h1>
  <RouterView />
</template>

<style scoped>
  h1 {
    color: brown;
  }
</style>
