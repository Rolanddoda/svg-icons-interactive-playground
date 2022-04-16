<script setup>
import { useGlobalStore } from '@/stores/global-store'
// Components
import ControlsSection from '@/components/ControlsSection.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import ResultSection from '@/components/ResultSection.vue'
import VariablesSection from '@/components/VariablesSection.vue'

const globalStore = useGlobalStore()
</script>

<template>
  <header>
    <div class="gradient-font q-my-sm">Unified way of using SVG Icons</div>
  </header>

  <main class="main" :class="`screen-${$q.screen.name}`">
    <ResultSection class="result-section" style="grid-area: result" />
    <CodeSnippet class="code-snippet" style="grid-area: code" />
    <ControlsSection class="controls-section" style="grid-area: controls" />
    <VariablesSection class="variables-section" style="grid-area: variables" />
  </main>
</template>

<style lang="scss">
@import 'css/base';

.main {
  --q-primary: v-bind('globalStore.cssVarColors.primary');
  --q-secondary: v-bind('globalStore.cssVarColors.secondary');
  --q-positive: v-bind('globalStore.cssVarColors.positive');
  --q-negative: v-bind('globalStore.cssVarColors.negative');
  --q-info: v-bind('globalStore.cssVarColors.info');
  --q-warning: v-bind('globalStore.cssVarColors.warning');

  width: 100%;
  display: grid;
  grid-template-areas:
    'code'
    'result'
    'controls'
    'variables';
  gap: 12px;

  &.screen-xs,
  &.screen-sm {
    .code-snippet {
      padding: 0 4px;
    }
  }

  &.screen-md {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas:
      'result code'
      'controls variables';
  }

  &.screen-lg,
  &.screen-xl {
    display: grid;
    grid-template-columns: 1fr minmax(500px, 1fr) 1fr;
    grid-template-areas:
      'controls code variables'
      'controls result variables';
  }
}
</style>
