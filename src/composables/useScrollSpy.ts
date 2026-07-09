import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { NavItem } from '@/data/content'

const SCROLL_SPY_OFFSET = 140
const SCROLL_CLICK_RESET_MS = 800

export function useScrollSpy(navItems: NavItem[]) {
  const activeNav = ref(navItems[0]?.href ?? '')
  const isScrollingClick = ref(false)

  const handleNavClick = (href: string) => {
    isScrollingClick.value = true
    activeNav.value = href

    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      isScrollingClick.value = false
    }, SCROLL_CLICK_RESET_MS)
  }

  const handleScroll = () => {
    if (isScrollingClick.value) return
    const scrollPosition = window.scrollY + SCROLL_SPY_OFFSET

    for (const item of navItems) {
      const el = document.querySelector(item.href) as HTMLElement | null
      if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
        activeNav.value = item.href
      }
    }
  }

  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { activeNav, handleNavClick }
}
