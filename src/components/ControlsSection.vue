<script setup>
import { useGlobalStore } from '@/stores/global-store'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="controls gradient-border relative-position q-pa-xl">
    <h4 class="h4 text-indigo-3 text-center">Controls</h4>

    <AppSelect label="Icon" v-model="globalStore.selectedIcon" :options="globalStore.availableIcons" />
    <AppSelect label="Size" v-model="globalStore.selectedSize" :options="globalStore.availableSizes" />
    <AppInput label="Color:" v-model="globalStore.color" hint="default value: var:primary" />

    <section class="section">
      <q-checkbox label="Enable hover color" dark dense v-model="globalStore.hasHoverColor" class="q-mb-sm" />
      <AppInput
        label="Hover color"
        v-model="globalStore.hoverColor"
        :disable="!globalStore.hasHoverColor"
        hint="default value: white"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  display: grid;
  align-items: start;
  gap: 16px;
}
</style>
