<template>
  <q-card>
    <q-card-section>
      <q-expansion-item
        default-open
        v-for="lang in userStore.languages"
        :key="lang.id"
      >
      <template #header>
        <q-btn icon="delete" flat @click="userStore.deleteLanguage(lang.id)" />
        <p>{{ lang.name }}</p>
      </template>
        <q-input filled dense v-model="lang.name" :label="$t('language')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black" />
        <q-select
          filled
          dense
          v-model="lang.level"
          :label="$t('level')"
          :options="levelOptions"
          :dark="userStore.settings.theme === 'dark'"
          label-color="black"
          input-class="text-black"
          color="black"
        />
      </q-expansion-item>
    </q-card-section>
    <q-card-section class="buttons">
      <q-btn dense @click="addLanguage()" class="addButton" icon="add" :label="$t('addLanguage')"/>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()

const levelOptions = [
  'Begginer',
  'Intermediate',
  'Advanced',
  'Professional',
  'Native'
]

const addLanguage = () => {
  userStore.addLanguage({
    id: Date.now(),
    name: 'Language name',
    level: 'Language level'
  })
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 1rem;
  font-weight: bold;
}
</style>
