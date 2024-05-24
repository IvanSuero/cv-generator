import { user } from 'src/stores/start.user'
import { useUserStore } from 'src/stores/user-store'

const userStore = useUserStore()
// This function sets the default values of the user store

export function setDefaultStore () {
  console.log(user.progress)
  userStore.progress = user.progress
  userStore.progressSections = user.progressSections
  userStore.personalInfo = user.personalInfo
  userStore.contactInfo = user.contactInfo
  userStore.socialInfo = user.socialInfo
  userStore.workExperience = user.workExperience
  userStore.education = user.education
  userStore.skills = user.skills
  userStore.languages = user.languages
  userStore.settings = user.settings
}

export function clearStore () {
  userStore.progress = 0
  userStore.progressSections = {
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
  }
  userStore.personalInfo = {
    name: '',
    title: '',
    description: ''
  }
  userStore.contactInfo = {
    email: '',
    phone: ''
  }
  userStore.socialInfo = {
    linkedin: '',
    github: '',
    website: '',
    others: ''
  }
  userStore.workExperience = []
  userStore.education = []
  userStore.skills = []
  userStore.languages = []
  userStore.settings = {
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
}
