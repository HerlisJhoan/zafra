import { onBeforeUnmount, onMounted } from 'vue'

const REVEAL_THRESHOLD = 0.15

export function useScrollReveal(selector = '.reveal') {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: REVEAL_THRESHOLD },
    )
    document.querySelectorAll(selector).forEach((el) => observer?.observe(el))
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
