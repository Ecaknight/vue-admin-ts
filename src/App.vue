<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Hello')
</script>

<template>
  <div>{{ name }}App</div>
</template>

<style lang="less" scoped>
div {
  color: red;
}
</style>
