<template>
  <div>
    <div>
      <q-toggle
        v-model="userStore.settings.theme"
        true-value="dark"
        false-value="light"
        checked-icon="nightlight"
        unchecked-icon="lightbulb"
        icon-color="black"
        left-label
        label="Color theme"
        color="white"
        size="3rem"
        dense
        default-value="light"
        @update:model-value="$q.dark.set(userStore.settings.theme==='dark')"
        :dark="userStore.settings.theme==='dark'"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store'

const userStore = useUserStore()
</script>

<style scoped>
</style>
