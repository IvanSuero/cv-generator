<template>
  <q-card
      >
    <q-card-section>
      <q-input
        filled
        v-model="userStore.contactInfo.email"
        label="Email"
        dense
        :dark="userStore.settings.theme === 'dark'"
        class="inputText"
        label-color="black"
        input-class="text-black"
      />
      <q-checkbox
        v-model="userStore.settings.emailLink"
        label="Add link to the email"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
      >
        <q-tooltip self="center right" max-width="250px">
          When someone clicks on the email, it will open the default email client.
        </q-tooltip>
      </q-checkbox>
      <q-input
        filled
        v-model="userStore.contactInfo.phone"
        label="Phone"
        color="white"
        dense
        class="text-white"
        :dark="userStore.settings.theme === 'dark'"
        label-color="black"
        input-class="text-black"
      />
      <q-checkbox
        v-model="userStore.settings.contactLogos"
        label="Show contact icons"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()
</script>

<style scoped>
.inputText {
  margin-bottom: 10px;
  color: red;
}
</style>
