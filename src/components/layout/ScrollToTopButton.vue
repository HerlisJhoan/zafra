<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  if (window.scrollY > 300) {
    isVisible.value = true
  } else {
    isVisible.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      class="scroll-to-top-btn"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <v-icon color="#666666" size="24">mdi-chevron-up</v-icon>
    </button>
  </transition>
</template>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 96px; /* Ubicado por encima del botón de WhatsApp en móviles/escritorio */
  right: 24px;
  width: 50px;
  height: 50px;
  background-color: #f0f7fc;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  z-index: 1400;
  cursor: pointer;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-to-top-btn:hover {
  transform: translateY(-4px);
  background-color: #ffffff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}

/* Transición suave de entrada/salida */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}

@media (max-width: 959px) {
  .scroll-to-top-btn {
    bottom: 150px; /* Ajuste para librar el botón de WhatsApp en móvil que sube a 80px */
    right: 16px;
    width: 44px;
    height: 44px;
  }
}
</style>
