<script setup lang="ts">
  import { isDark, toggleDark } from '@/composables/dark'
</script>
<template>
  <div style="margin-left: 0.75rem; margin-right: 0.75rem">
    <Button
      style="border-radius: 0.5rem; min-width: 46px; min-height: 38px"
      aria-label="Toggle theme"
      outlined
      @click="toggleDark()"
    >
      <transition name="slide" mode="out-in">
        <BaseIcon
          v-if="isDark"
          name="i-material-symbols-dark-mode-outline"
          style="font-size: 1.5rem; line-height: 2rem"
        />
        <BaseIcon
          v-else
          name="i-material-symbols-light-mode-outline"
          style="font-size: 1.5rem; line-height: 2rem"
        />
      </transition>
    </Button>
  </div>
</template>
<style lang="postcss">
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.15s ease;
  }

  .slide-enter-from {
    transform: translateY(-100%);
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
  }

  .slide-leave-to {
    transform: translateY(100%);
  }
</style>
