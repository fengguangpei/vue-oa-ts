<script setup lang="ts">
import { ref } from 'vue'
const name = ref('CarLog')
</script>

<script lang="ts">
export default {
  name: 'CarLog'
}
</script>

<template>
  <h1>{{ name }}</h1>
</template>

<style scoped lang="scss"></style>
