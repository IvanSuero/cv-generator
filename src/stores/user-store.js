import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    sections: [
      { id: 'contactInfo', name: 'Contact Info' },
      { id: 'skillsInfo', name: 'Skills' },
      { id: 'languagesInfo', name: 'Languages' },
      { id: 'socialInfo', name: 'Social Info' }
    ],
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
      theme: '',
      language: '',
      uppercaseName: true,
      contactLogos: true,
      emailLink: false,
      socialLogos: true
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
    setPersonalInfo (info) {
      this.personalInfo = info
    },
    setContactInfo (info) {
      this.contactInfo = info
    },
    setSocialInfo (info) {
      this.socialInfo = info
    },
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
    setColumns () {
      this.settings.columns = !this.settings.columns
    },
    clearStore () {
      this.personalInfo = {
        name: '',
        title: '',
        description: ''
      }
      this.contactInfo = {
        email: '',
        phone: ''
      }
      this.socialInfo = {
        linkedin: '',
        github: '',
        website: '',
        others: ''
      }
      this.workExperience = []
      this.education = []
      this.skills = []
      this.languages = []
      this.settings = {}
    }
  },
  persist: true
})
