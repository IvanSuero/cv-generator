<template>
  <q-card
      >
    <q-card-section>
      <q-input
        filled
        v-model="userStore.personalInfo.name"
        :label="$t('name')"
        dense
        :dark="userStore.settings.theme === 'dark'"
        label-color="black"
        input-class="text-black"
      />
      <q-checkbox
        v-model="userStore.settings.uppercaseName"
        :label="$t('uppercaseName')"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
      />
      <q-input
        filled
        v-model="userStore.personalInfo.title"
        :label="$t('title')"
        dense
        :dark="userStore.settings.theme === 'dark'"
        label-color="black"
        input-class="text-black"
      />
      <q-input
        filled
        v-model="userStore.personalInfo.description"
        :label="$t('description')"
        dense
        :dark="userStore.settings.theme === 'dark'"
        label-color="black"
        input-class="text-black"
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()
</script>
