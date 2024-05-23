<template>
  <div class="progress">
    <q-linear-progress
      :value="userStore.progress"
      class="q-mt-sm" :color="userStore.progress>0.8 ? 'green' : userStore.progress>0.5 ? 'yellow' : userStore.progress>0.2 ? 'orange' : 'red'"
      :track-color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
      rounded
      size="10px"
    >
      <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
        <div class="text">
          Progress: {{ Math.round(userStore.progress * 100) }}%
        </div>
      </q-tooltip>
    </q-linear-progress>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store'

const userStore = useUserStore()
</script>

<style scoped>
.progress {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
</style>
