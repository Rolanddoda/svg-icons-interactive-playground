import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global-store', () => {
  const availableIcons = ['user', 'search', 'home']
  const selectedIcon = ref(availableIcons[0])

  const color = ref()

  const hasHoverColor = ref(false)
  const hoverColor = ref()

  const availableSizes = ['sm', 'md', 'lg', 'xl']
  const selectedSize = ref(availableSizes[3])

  const cssVarColors = reactive({
    primary: '#007bff',
    secondary: '#6c757d',
    positive: '#28a745',
    negative: '#dc3545',
    info: '#17a2b8',
    warning: '#ffc107'
  })

  return {
    availableIcons,
    selectedIcon,
    color,
    hasHoverColor,
    hoverColor,
    availableSizes,
    selectedSize,
    cssVarColors
  }
})
