<template>
  <q-page class="mainPage">
    <q-scroll-area :dark="userStore.settings.theme==='dark'">
      <CVSettings @download-cv="downloadPdf()" id="settings"/>
    </q-scroll-area>
    <CVPreview id="preview"/>
  </q-page>
</template>

<script setup>
import CVSettings from 'src/components/CVSettings.vue'
import CVPreview from 'src/components/CVPreview.vue'
import html2pdf from 'html2pdf.js'
import { useUserStore } from 'src/stores/user-store.js'

const userStore = useUserStore()

const downloadPdf = async () => {
  document.getElementById('print').style.height = '29.7cm'
  await html2pdf(document.getElementById('print'), {
    margin: 0,
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  })
  document.getElementById('print').style.height = '20cm'
}
</script>

<style scoped>
.mainPage {
  display: grid;
  grid-template-columns: 2fr 4fr;
  gap: 1rem;
  padding: 2rem 1rem 0 1rem;
}

#settings {
  padding-bottom: 3rem;
}
</style>
