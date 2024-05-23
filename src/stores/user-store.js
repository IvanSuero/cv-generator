import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    progress: 0,
    progressSections: {
      name: false,
      title: false,
      description: false,
      email: false,
      phone: false,
      workExperience: false,
      education: false,
      skills: false,
      languages: false,
      social: false
    },
    personalInfo: {
      name: '',
      title: '',
      description: ''
    },
    contactInfo: {
      email: '',
      phone: ''
    },
    socialInfo: {
      linkedin: '',
      github: '',
      website: '',
      others: ''
    },
    workExperience: [],
    education: [],
    skills: [],
    languages: [],
    settings: {
      theme: 'light',
      language: 'es',
      uppercaseName: true,
      contactLogos: true,
      emailLink: true,
      socialLogos: true,
      sectionSeparators: true,
      columnSeparators: true,
      headerSeparator: true,
      pageBorder: true
    }
  }),
  getters: {
    getCVInfo () {
      return {
        personalInfo: this.personalInfo,
        contactInfo: this.contactInfo,
        socialInfo: this.socialInfo,
        workExperience: this.workExperience,
        education: this.education,
        skills: this.skills,
        languages: this.languages
      }
    }
  },
  actions: {
    addWorkExperience (work) {
      this.workExperience.push(work)
    },
    deleteWorkExperience (index) {
      const toDelete = this.workExperience.find(work => work.id === index)
      const indexToDelete = this.workExperience.indexOf(toDelete)
      this.workExperience.splice(indexToDelete, 1)
    },
    addEducation (edu) {
      this.education.push(edu)
    },
    deleteEducation (index) {
      const toDelete = this.education.find(edu => edu.id === index)
      const indexToDelete = this.education.indexOf(toDelete)
      this.education.splice(indexToDelete, 1)
    },
    addSkill (skill) {
      this.skills.push(skill)
    },
    deleteSkill (index) {
      const toDelete = this.skills.find(skill => skill.id === index)
      const indexToDelete = this.skills.indexOf(toDelete)
      this.skills.splice(indexToDelete, 1)
    },
    addLanguage (language) {
      this.languages.push(language)
    },
    addSocialInfo (info) {
      this.socialInfo = info
    },
    deleteLanguage (index) {
      const toDelete = this.languages.find(language => language.id === index)
      const indexToDelete = this.languages.indexOf(toDelete)
      this.languages.splice(indexToDelete, 1)
    },
    updateProgress () {
      this.progressSections.name = this.personalInfo.name !== ''
      this.progressSections.title = this.personalInfo.title !== ''
      this.progressSections.description = this.personalInfo.description !== ''
      this.progressSections.email = this.contactInfo.email !== ''
      this.progressSections.phone = this.contactInfo.phone !== ''
      this.progressSections.workExperience = this.workExperience.length > 0
      this.progressSections.education = this.education.length > 0
      this.progressSections.skills = this.skills.length > 0
      this.progressSections.languages = this.languages.length > 0
      this.progressSections.social = this.socialInfo.linkedin !== '' || this.socialInfo.github !== '' || this.socialInfo.website !== '' || this.socialInfo.others !== ''
      this.progress = Object.values(this.progressSections).filter(section => section).length
    }
  },
  persist: true
})
