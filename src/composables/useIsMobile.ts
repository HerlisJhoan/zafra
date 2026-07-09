import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useIsMobile(breakpoint = 960) {
  const isMobile = ref(false)

  const check = () => {
    isMobile.value = window.innerWidth < breakpoint
  }

  onMounted(() => {
    check()
    window.addEventListener('resize', check)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', check)
  })

  return { isMobile }
}
