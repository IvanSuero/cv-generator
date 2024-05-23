<template>
  <div class="formatSettings">
    <div class="pageFormat">
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
    <div class="previewFormat">
      <q-checkbox
        v-model="userStore.settings.columnSeparators"
        label="Column separators"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
      <q-checkbox
        v-model="userStore.settings.headerSeparator"
        label="Header separator"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
      <q-checkbox
        v-model="userStore.settings.sectionSeparators"
        label="Section separators"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
      <q-checkbox
        v-model="userStore.settings.pageBorder"
        label="Page border"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store'

const userStore = useUserStore()
</script>

<style scoped>
.formatSettings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.pageFormat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.previewFormat {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  column-gap: 5rem;
  row-gap: 0.8rem;
}
</style>
