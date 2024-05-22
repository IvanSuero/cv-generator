<template>
  <router-view />
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store'
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

const userStore = useUserStore()
const $q = useQuasar()

onMounted(() => {
  const theme = userStore.settings.theme
  $q.dark.set(theme === 'dark')
})
</script>

<style>
@import url('src/css/app.css')
</style>
