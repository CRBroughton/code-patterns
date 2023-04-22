<script setup lang="ts">
import { onMounted , ref} from 'vue'

const data = ref()

onMounted(async() => {
  let response = await fetch('/')
  response = await response.json()

  data.value = response
})
</script>

<template>
  {{ data }}
</template>