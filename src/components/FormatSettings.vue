<template>
  <div class="formatSettings">
    <div class="pageFormat">
      <q-toggle
        v-model="userStore.settings.theme"
        true-value="dark"
        false-value="light"
        checked-icon="nightlight"
        unchecked-icon="lightbulb"
        icon-color="black"
        left-label
        :label="$t('colorTheme')"
        color="white"
        size="3rem"
        dense
        default-value="light"
        @update:model-value="$q.dark.set(userStore.settings.theme==='dark')"
        :dark="userStore.settings.theme==='dark'"
      />
      <q-select
        v-model="locale"
        :options="[{value:'en-US', label:$t('english')}, {value:'es-ES', label:$t('spanish')}]"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        :label-color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        dense
        map-options
        emit-value
        rounded
        options-dense
        :options-dark="userStore.settings.theme === 'dark'"
        :dark="userStore.settings.theme === 'dark'"
        borderless
        hide-bottom-space
      >
        <template #prepend>
          <q-icon name="language" :color="userStore.settings.theme === 'dark' ? 'white' : 'black'" />
        </template>
      </q-select>
    </div>
    <div class="previewFormat">
      <q-checkbox
        v-model="userStore.settings.columnSeparators"
        :label="$t('columnSeparators')"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
      <q-checkbox
        v-model="userStore.settings.headerSeparator"
        :label="$t('headerSeparators')"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
      <q-checkbox
        v-model="userStore.settings.sectionSeparators"
        :label="$t('sectionSeparators')"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
      <q-checkbox
        v-model="userStore.settings.pageBorder"
        :label="$t('pageBorder')"
        :color="userStore.settings.theme === 'dark' ? 'white' : 'black'"
        keep-color
        size="2rem"
        checked-icon="task_alt"
        unchecked-icon="radio_button_unchecked"
        style="margin-bottom: 0;"
      />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from 'src/stores/user-store'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n({ useScope: 'global' })
const userStore = useUserStore()

watch((locale), () => {
  userStore.settings.language = locale.value
})
</script>

<style scoped>
.formatSettings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.pageFormat {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.previewFormat {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: flex-start;
  column-gap: 5rem;
  row-gap: 0.5rem;
}
</style>
