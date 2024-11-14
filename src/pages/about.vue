<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'about',
    meta: {
      title: 'About',
      navOrder: 2,
    },
  })

  useHead({
    title: 'About',
  })
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
