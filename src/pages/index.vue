<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'home',
    // alias: ['home'],
    meta: {
      title: 'Home',
      navOrder: 1,
    },
  })

  useHead({
    title: 'Home',
  })
</script>
<template>
  <div>
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 1.5rem /* 24px */;
        padding-bottom: 1.5rem /* 24px */;
      "
    >
      <DarkModeSwitch client:load /><span style="margin-left: 0.5rem; /* 8px */"
        >A Fresh Start!</span
      >
    </div>
  </div>
</template>
<style scoped></style>
