<template>
  <div class="settings">
    <FormProgress />
    <div class="settingsForm">
      <FormatSettings />
    </div>

    <q-expansion-item
      :label="$t('personalInformation')"
      icon="person"
      default-open
    >
      <PersonalInfoForm />
    </q-expansion-item>
    <q-expansion-item
      :label="$t('contactInformation')"
      icon="contact_mail"
      default-open
    >
      <ContactInfoForm />
    </q-expansion-item>
    <q-expansion-item
      :label="$t('workExperience')"
      icon="business_center"
      default-open
    >
      <ExperienceForm />
    </q-expansion-item>
    <q-expansion-item
      :label="$t('education')"
      icon="school"
      default-open
    >
      <EducationForm />
    </q-expansion-item>
    <q-expansion-item
      :label="$t('skills')"
      icon="star"
      default-open
    >
      <SkillsForm />
    </q-expansion-item>
    <q-expansion-item
      :label="$t('languages')"
      icon="language"
      default-open
    >
      <LanguageForm />
    </q-expansion-item>
    <q-expansion-item
      :label="$t('social')"
      icon="web"
      default-open
    >
      <SocialInfoForm />
    </q-expansion-item>
    <div>
      <q-btn
        :label="$t('downloadCV')"
        class="q-mt-md downloadBtn"
        @click="emits('download-cv')"
      />
      <q-btn
        :label="$t('setTestData')"
        class="q-mt-md downloadBtn"
        @click="setDefaultStore()"
      />
      <q-btn
        :label="$t('clearData')"
        class="q-mt-md downloadBtn"
        @click="clearStore()"
      />
    </div>
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
import FormProgress from 'src/components/FormProgress.vue'
import { setDefaultStore, clearStore } from 'src/helpers/setDefaultStore'

const emits = defineEmits(['download-cv'])

</script>

<style scoped>
.settings {
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  overflow: scroll;
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
