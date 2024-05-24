<template>
  <q-card>
    <q-card-section>
      <q-input
        filled
        v-model="userStore.socialInfo.linkedin"
        :label="$t('linkedin')"
        label-color="black"
        input-class="text-black"
        dense
      />
      <q-input
        filled
        v-model="userStore.socialInfo.github"
        :label="$t('github')"
        dense
        label-color="black"
        input-class="text-black"
      />
      <q-input
        filled
        v-model="userStore.socialInfo.website"
        :label="$t('website')"
        dense
        label-color="black"
        input-class="text-black"
      />
      <q-input
        filled
        v-model="userStore.socialInfo.others"
        :label="$t('others')"
        label-color="black"
        input-class="text-black"
        dense
      />
      <q-checkbox
        v-model="userStore.settings.socialLogos"
        :label="$t('showSocialIcons')"
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
