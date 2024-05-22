<template>
<div class="containerPreview">
  <q-card id="print">
    <q-card-section class="personalInfo">
      <p class="name" :style="{ textTransform: userStore.settings.uppercaseName ? 'uppercase' : 'none' }">{{ userStore.personalInfo.name || 'Name' }}</p>
      <p class="title">{{ userStore.personalInfo.title || 'Title' }}</p>
      <p class="description">{{ userStore.personalInfo.description }}</p>
    </q-card-section>

    <q-card-section class="columns">
      <div class="column1">
          <q-card-section class="sectionInfo">
            <p class="sectionTitle">Contact</p>
            <div class="sectionItems">
              <p class="contactItem" v-show="userStore.contactInfo.email !== ''">
                <a :href="'mailto:' + userStore.contactInfo.email">
                  <q-icon v-show="userStore.settings.contactLogos" name="email" />
                  {{ userStore.contactInfo.email }}
                </a>
              </p>
              <p class="contactItem" v-show="userStore.contactInfo.phone !== ''">
                <q-icon v-show="userStore.settings.contactLogos" name="phone" />
                {{ userStore.contactInfo.phone }}
              </p>
            </div>
          </q-card-section>

          <q-card-section class="sectionInfo">
            <p class="sectionTitle">Skills</p>
            <div class="skillSectionItems">
                <q-badge class="skillItem" v-for="skill in userStore.skills" :key="skill.id">{{ skill.name }}</q-badge>
            </div>
          </q-card-section>

          <q-card-section class="sectionInfo">
            <p class="sectionTitle">Languages</p>
            <div class="languagesSectionItems">
              <p class="language" v-for="lang in userStore.languages" :key="lang.id"><span>{{ lang.name }}</span><span>{{ lang.level }}</span></p>
            </div>
          </q-card-section>

          <q-card-section class="sectionInfo lastSectionInfo">
            <p class="sectionTitle">Social</p>
            <div class="sectionItems">
              <p class="contactItem" v-show="userStore.socialInfo.linkedin !== ''">
                <svg class="cvIcon" v-show="userStore.settings.socialLogos">
                  <use href="src/assets/sprite.svg#linkedin-color" />
                </svg>
                {{ userStore.socialInfo.linkedin }}
              </p>
              <p class="contactItem" v-show="userStore.socialInfo.github !== ''">
                <svg class="cvIcon" v-show="userStore.settings.socialLogos">
                  <use href="src/assets/sprite.svg#github-color" />
                </svg>
                {{ userStore.socialInfo.github }}
              </p>
              <p class="contactItem" v-show="userStore.socialInfo.website !== ''">
                <svg class="cvIcon" v-show="userStore.settings.socialLogos">
                  <use href="src/assets/sprite.svg#website" />
                </svg>
                {{ userStore.socialInfo.website }}
              </p>
              <p class="contactItem" v-show="userStore.socialInfo.others !== ''">
                <q-icon class="cvIcon" name="more"  v-show="userStore.settings.socialLogos"/>
                {{ userStore.socialInfo.others }}
              </p>
            </div>
          </q-card-section>
      </div>

      <div class="column2">
        <q-card-section class="sectionInfo">
          <p class="sectionTitle">Work experience</p>
          <q-card-section
            v-for="work in userStore.workExperience"
            :key="work.id"
            class="sectionItems"
          >
            <div>
              <p class="sectionInfoTitle"><span>{{ work.title }} - {{ work.company }}</span><span>{{ work.startDate }} - {{ work.endDate }}</span></p>
              <p class="sectionInfoLocation">{{ work.location }}</p>
              <p class="sectionInfoDescription">{{ work.description }}</p>
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section class="sectionInfo">
          <p class="sectionTitle">Education</p>
          <q-card-section
            v-for="education in userStore.education"
            :key="education.key"
            class="sectionItems"
          >
            <div>
              <p class="sectionInfoTitle"><span>{{ education.title }} - {{ education.school }}</span><span>{{ education.startDate }} - {{ education.endDate }}</span></p>
              <p class="sectionInfoLocation">{{ education.location }}</p>
              <p class="sectionInfoDescription">{{ education.description }}</p>
            </div>
          </q-card-section>
        </q-card-section>
      </div>
    </q-card-section>
  </q-card>
</div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()
</script>

<style scoped>
/* General */

.containerPreview {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 20cm;
}

#print {
  width: 20cm;
  height: 20cm;
  border-radius: 2px;
  font-family: 'Arial', sans-serif;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: var(--backgroundPreview);
  color: var(--textPreview);
}

::-webkit-scrollbar {
  display: none;
}

.sectionTitle {
  font-size: 1.1rem;
  font-weight: bold;
}

p {
  font-size: 0.8rem;
  margin-bottom: 0;
}

.sectionInfo {
  padding: 1rem;
  border-bottom: 1px solid var(--separation);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lastSectionInfo {
  border-bottom: none;
}

.sectionItems {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 0.5rem;
}

.sectionInfoTitle {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cvIcon {
  width: 1rem;
  height: 1rem;
}

/* Columns */

.columns {
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0;
}

.column1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-right: 1px solid var(--separation);
  border-bottom: 1px solid var(--separation);
  padding-right: 2px;
}

.column2 {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-right: 1rem;
  padding-left: 2px;
}

/* Personal Info */

.personalInfo {
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--separation);
}

.name {
  font-size: 1.3rem;
  font-weight: bold;
}

.title {
  font-size: 1.1rem;
}

.description {
  font-size: 0.9rem;
}

/* Contact Info */

.contactItem {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
}

/* Skills */

.skillSectionItems {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.3rem;
}

.skillItem {
  background-color: var(--item);
  color: var(--textItem);
  text-transform: uppercase;
  padding: 0.3rem;
  font-size: 10px;
  width: fit-content;
  border-radius: 2px;
}

/* Languages */

.languagesSectionItems {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language {
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
}
</style>