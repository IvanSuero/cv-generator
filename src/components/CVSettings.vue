<template>
  <div class="settings">
    <div class="settingsForm">
      <FormatSettings />
    </div>

    <q-expansion-item
      label="Personal information"
      icon="person"
      default-open
    >
      <PersonalInfoForm />
    </q-expansion-item>
    <q-expansion-item
      label="Contact information"
      icon="contact_mail"
      default-open
    >
      <ContactInfoForm />
    </q-expansion-item>
    <q-expansion-item
      label="Work experience"
      icon="business_center"
      default-open
    >
      <ExperienceForm />
    </q-expansion-item>
    <q-expansion-item
      label="Education"
      icon="school"
      default-open
    >
      <EducationForm />
    </q-expansion-item>
    <q-expansion-item
      label="Skills"
      icon="star"
      default-open
    >
      <SkillsForm />
    </q-expansion-item>
    <q-expansion-item
      label="Languages"
      icon="language"
      default-open
    >
      <LanguageForm />
    </q-expansion-item>
    <q-expansion-item
      label="Social"
      icon="web"
      default-open
    >
      <SocialInfoForm />
    </q-expansion-item>
    <q-btn
      label="Download CV"
      class="q-mt-md downloadBtn"
      @click="emits('download-cv')"
    />
  </div>
</template>

<script setup>
import PersonalInfoForm from 'src/components/PersonalInfoForm.vue'
import ContactInfoForm from 'src/components/ContactInfoForm.vue'
import ExperienceForm from 'src/components/ExperienceForm.vue'
import EducationForm from 'src/components/EducationForm.vue'
import SkillsForm from 'src/components/SkillsForm.vue'
import LanguageForm from 'src/components/LanguageForm.vue'
import FormatSettings from 'src/components/FormatSettings.vue'
import SocialInfoForm from 'src/components/SocialInfoForm.vue'

const emits = defineEmits(['download-cv'])
</script>

<style scoped>
.settings {
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: scroll;
}

.settingsForm {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.downloadBtn {
  width: 100%;
  background-color: var(--buttonBackground);
  color: var(--buttonText);
}

.downloadBtn:hover {
  cursor: pointer;
  background-color: var(--buttonHover);
}

.q-expansion-item {
  background-color: var(--expansionItem);
  border-radius: 5px;
}
</style>
