<template>
  <q-page class="mainPage" id="main">
    <q-splitter v-model="splitterModel" :limits="[35, 50]" class="splitter" id="splitContainer">
      <template #before>
        <div>
          <CVSettings @download-cv="usePrint()" id="settings"/>
        </div>
      </template>
      <template #separator>
        <q-avatar :color="userStore.settings.theme === 'dark' ? 'white' : 'black'" :text-color="userStore.settings.theme === 'dark' ? 'black' : 'white'" size="40px" icon="drag_indicator" />
      </template>
      <template #after>
        <div>
          <CVPreview id="preview"/>
        </div>
      </template>
    </q-splitter>
  </q-page>
</template>

<script setup>
import CVSettings from 'src/components/CVSettings.vue'
import CVPreview from 'src/components/CVPreview.vue'
import { ref } from 'vue'
import { useUserStore } from 'src/stores/user-store'

const splitterModel = ref(40)
const userStore = useUserStore()

const usePrint = () => {
  document.getElementById('settings').style.display = 'none'
  document.getElementById('print').classList.add('no-shadow')
  document.getElementById('print').classList.add('printFormat')
  document.getElementsByClassName('containerPreview')[0].classList.add('printFormat')
  const element = document.getElementById('preview').innerHTML
  document.getElementById('main').innerHTML = element
  window.print()
  window.location.reload()
}
</script>

<style scoped>
.splitter {
  height: 99vh;
}
#settings {
  padding: 3rem 0;
  margin: 0 3rem;
}

#preview {
  padding: 0 0;
  margin: 1.5rem 3rem;
}
</style>
