<script setup>
import { useGlobalStore } from '@/stores/global-store'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="result-area">
    <div class="icon-container">
      <div class="bg"></div>
      <SvgIcon
        :name="globalStore.selectedIcon"
        :color="globalStore.color"
        :hover-color="globalStore.hasHoverColor ? globalStore.hoverColor : false"
        :size="globalStore.selectedSize"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.result-area {
  display: grid;
  gap: 16px;
  flex: 1;

  .icon-container {
    position: relative;
    display: grid;
    place-items: center;
    place-content: center;
    border-radius: 12px;
    padding: 32px;
    box-shadow: 0 0 15px black;

    .bg {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(135deg, rgba(66, 211, 146) 25%, #647eff);
      filter: brightness(0.5);
      opacity: 0.6;
      z-index: -1;
    }
  }
}
</style>
