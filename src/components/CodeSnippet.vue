<script setup>
// eslint-disable-next-line no-unused-vars
import hljs from 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import { useGlobalStore } from '@/stores/global-store'

const highlightjs = hljsVuePlugin.component
const globalStore = useGlobalStore()
</script>

<template>
  <div class="container">
    <div class="code-snippet">
      <div class="shadow">
        <div class="shadow-background"></div>
      </div>

      <div class="highlightjs-container">
        <div class="snippet-header">
          <div v-for="i in 3" :key="i" class="circle"></div>
        </div>

        <highlightjs language="html" :code="globalStore.generatedCode" class="overflow-auto hide-scrollbar" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Stolen design from https://ray.so
.container {
  padding: 24px 16px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));
}

.code-snippet {
  position: relative;
  border-radius: 12px;
  min-width: 250px;
  width: 100%;
  font-size: clamp(1.1rem, 9vw - 2rem, 1.7rem);

  .shadow,
  .shadow-background {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    height: 100%;
    width: 100%;
  }

  .shadow:after {
    position: absolute;
    content: '';
    left: 0;
    top: 24px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateZ(-1px);
    filter: blur(30px);
    z-index: -1;
  }

  .shadow-background {
    background: linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236));
  }

  .highlightjs-container {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 12px;
    padding: 16px;
    transform-style: preserve-3d;
  }
}

.snippet-header {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 8px;
  margin-bottom: 16px;

  .circle {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: #fff3;
  }
}
</style>

<style lang="scss">
.hljs-tag {
  color: #6599ff;
  .hljs-name {
    color: #6599ff;
  }
}
.hljs-attr {
  color: #f8518d;
}
.hljs-string {
  color: #e9aefe;
}
</style>
