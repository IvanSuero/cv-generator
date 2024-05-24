<template>
  <q-card
      >
    <q-card-section>
      <q-input
        filled
        v-model="userStore.contactInfo.email"
        :label="$t('email')"
        dense
        :dark="userStore.settings.theme === 'dark'"
        class="inputText"
        label-color="black"
        input-class="text-black"
      />
      <q-checkbox
        v-model="userStore.settings.emailLink"
        :label="$t('addLinkEmail')"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
      >
        <q-tooltip self="center right" max-width="250px">
          {{ $t('emailTooltip') }}
        </q-tooltip>
      </q-checkbox>
      <q-input
        filled
        v-model="userStore.contactInfo.phone"
        :label="$t('phone')"
        color="white"
        dense
        class="text-white"
        :dark="userStore.settings.theme === 'dark'"
        label-color="black"
        input-class="text-black"
      />
      <q-checkbox
        v-model="userStore.settings.contactLogos"
        :label="$t('showContactIcons')"
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
