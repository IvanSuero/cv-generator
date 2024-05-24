<template>
  <q-card>
    <q-card-section>
      <q-expansion-item
        default-open
        v-for="work in userStore.workExperience"
        :key="work.id"
      >
        <template #header>
          <q-btn icon="delete" flat @click="userStore.deleteWorkExperience(work.id)" />
          <p>{{ work.title }} at {{ work.company }}</p>
        </template>
        <q-input filled dense v-model="work.title" :label="$t('title')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="work.company" :label="$t('company')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="work.location" :label="$t('location')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="work.startDate" :label="$t('startDate')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="work.endDate" :label="$t('endDate')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="work.description" :label="$t('description')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
      </q-expansion-item>
    </q-card-section>
    <q-card-section class="buttons">
      <q-btn @click="addWork()" class="addButton" icon="add" :label="$t('addWorkExperience')"/>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()

const addWork = () => {
  userStore.addWorkExperience({
    id: Date.now(),
    title: 'Job title',
    company: 'Company name',
    location: 'Location',
    startDate: 'Start Date',
    endDate: 'End Date',
    description: 'Job description'
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
