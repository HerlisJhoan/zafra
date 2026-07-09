<script setup lang="ts">
defineProps<{
  activeNav: string
}>()

const emit = defineEmits<{
  (e: 'nav-click', href: string): void
}>()

const items = [
  { text: 'Inicio', href: '#inicio', icon: 'mdi-home-outline', iconActive: 'mdi-home' },
  { text: 'Beneficios', href: '#beneficios', icon: 'mdi-heart-pulse', iconActive: 'mdi-heart-pulse' },
  { text: 'Proceso', href: '#proceso', icon: 'mdi-sync', iconActive: 'mdi-sync' },
  { text: 'Citas', href: '#citas', icon: 'mdi-calendar-check-outline', iconActive: 'mdi-calendar-check' }
]
</script>

<template>
  <div class="bottom-nav d-flex d-md-none align-center justify-space-around">
    <a
      v-for="item in items"
      :key="item.href"
      :href="item.href"
      :class="['bottom-nav-item', activeNav === item.href ? 'active' : '']"
      @click.prevent="emit('nav-click', item.href)"
    >
      <v-icon class="nav-icon" size="22">
        {{ activeNav === item.href ? item.iconActive : item.icon }}
      </v-icon>
      <span class="nav-text">{{ item.text }}</span>
    </a>
  </div>
</template>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(9, 79, 42, 0.08);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.04);
  z-index: 999;
  padding-bottom: env(safe-area-inset-bottom);
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #556B5F !important; /* Gris Eucalipto */
  transition: all 0.2s ease;
  width: 25%;
  height: 100%;
}

.nav-icon {
  margin-bottom: 2px;
  transition: transform 0.2s ease;
}

.bottom-nav-item:hover,
.bottom-nav-item.active {
  color: #094F2A !important; /* Verde Esmeralda */
}

.bottom-nav-item.active .nav-icon {
  transform: translateY(-2px);
  color: #094F2A !important;
}

.nav-text {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2px;
}
</style>
