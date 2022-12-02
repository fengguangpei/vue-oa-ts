<script setup lang="ts">
import useRefresh from '@/hooks/useRefresh'
const refresh = useRefresh()
</script>

<template>
  <t-tooltip content="刷新当前页面">
    <t-button @click="refresh" shape="square" theme="default" variant="text">
      <t-icon name="refresh" />
    </t-button>
  </t-tooltip>
</template>

<style scoped lang="scss">
.t-button {
  margin-left: auto;

  &:hover {
    background-color: #e7e7e7;
  }
}
</style>
