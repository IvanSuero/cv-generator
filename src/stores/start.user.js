export const user = {
  progress: 0,
  progressSections: {
    name: true,
    title: true,
    description: true,
    email: true,
    phone: true,
    workExperience: false,
    education: true,
    skills: true,
    languages: true,
    social: true
  },
  personalInfo: {
    name: 'John Doe',
    title: 'Web Developer',
    description: 'Job description'
  },
  contactInfo: {
    email: 'john.doe@gmail.com',
    phone: '+1 123 456 789'
  },
  socialInfo: {
    linkedin: 'linkedin/john-doe',
    github: '',
    website: 'john-doe.com',
    others: ''
  },
  workExperience: [{
    id: 1,
    title: 'Web Developer',
    company: 'Company Name',
    location: 'City, Country',
    startDate: '2020-01-01',
    endDate: '2020-12-31',
    description: 'Job description'
  }],
  education: [{
    id: 1,
    title: 'Degree',
    school: 'School Name',
    location: 'City, Country',
    startDate: '2016-01-01',
    endDate: '2020-12-31',
    description: 'Description'
  }],
  skills: [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' }
  ],
  languages: [
    { id: 1, name: 'English', level: 'Native' },
    { id: 2, name: 'Spanish', level: 'Intermediate' }
  ],
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
}
