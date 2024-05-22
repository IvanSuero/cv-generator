<template>
  <q-card>
    <q-card-section>
      <q-form
        @submit="submit"
        class="q-gutter-md skillsForm"
      >
        <q-input
          filled
          v-model="tag"
          label="New skill"
          dense
          :dark="userStore.settings.theme === 'dark'"
          label-color="black"
          input-class="text-black"
        />
        <q-btn
          icon="send"
          type="submit"
          class="submitButton"
        />
      </q-form>
    </q-card-section>
    <q-card-section>
      <q-chip
        v-for="skill in userStore.skills"
        :key="skill.id"
        removable
        @remove="userStore.deleteSkill(skill.id)"
        :dark="userStore.settings.theme === 'dark'"
        color="grey"
        text-color="white"
      >
        {{ skill.name }}
      </q-chip>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()

const tag = ref('')

const submit = () => {
  userStore.addSkill({
    id: Date.now(),
    name: tag.value
  })
  tag.value = ''
}
</script>

<style scoped>
.skillsForm {
  display: grid;
  grid-template-columns: 2fr auto;
  justify-content: space-between;
}

.submitButton {
  margin: 1rem;
  background-color: var(--buttonBackground);
  color: var(--buttonText);
}
</style>
