export default function updateProgress (userStore) {
  const completedSections = Object.values(userStore.progressSections).filter(Boolean).length
  const totalSections = Object.keys(userStore.progressSections).length
  userStore.progress = completedSections / totalSections
}
