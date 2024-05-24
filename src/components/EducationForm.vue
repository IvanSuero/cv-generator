<template>
  <q-card>
    <q-card-section>
      <q-expansion-item
        icon="school"
        default-open
        v-for="education in userStore.education"
        :key="education.id"
      >
      <template #header>
        <q-btn icon="delete" flat @click="userStore.deleteEducation(education.id)" />
        <p>{{ education.title }} {{ $t('at') }} {{ education.school }}</p>
      </template>
        <q-input filled dense v-model="education.title" :label="$t('title')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="education.school" :label="$t('school')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="education.location" :label="$t('location')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="education.startDate" :label="$t('startDate')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="education.endDate" :label="$t('endDate')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
        <q-input filled dense v-model="education.description" :label="$t('description')" :dark="userStore.settings.theme === 'dark'" label-color="black"
        input-class="text-black"/>
      </q-expansion-item>
    </q-card-section>
    <q-card-section class="buttons">
      <q-btn @click="addEducation()" class="addButton" icon="add" :label="$t('addEducation')"/>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()

const addEducation = () => {
  userStore.addEducation({
    id: Date.now(),
    title: 'Degree',
    school: 'School',
    location: 'Location',
    startDate: 'Start Date',
    endDate: 'End Date',
    description: 'Description'
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
