<script setup lang="ts">
import { useKeepAlive } from '@/stores/keepAlive'
import { storeToRefs } from 'pinia'
const aliveInstance = useKeepAlive()
const { excludes } = storeToRefs(aliveInstance2)
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :exclude="excludes">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<style scoped lang="scss"></style>
