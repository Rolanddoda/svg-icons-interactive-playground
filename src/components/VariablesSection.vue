<script setup>
import { useGlobalStore } from '@/stores/global-store'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="css-vars-area gradient-border relative-position q-pa-xl">
    <h4 class="h4 text-indigo-3 text-center q-mb-md">CSS Variables</h4>

    <q-input
      v-for="(colorValue, colorKey) in globalStore.cssVarColors"
      v-model="globalStore.cssVarColors[colorKey]"
      :key="colorKey"
      filled
      dark
      dense
      class="my-input q-mb-sm"
    >
      <template #prepend>
        <q-icon name="circle" :color="colorKey"></q-icon>
        <small> {{ colorKey }}:</small>
      </template>
      <template #append>
        <q-icon name="colorize" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-color dark v-model="globalStore.cssVarColors[colorKey]" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
