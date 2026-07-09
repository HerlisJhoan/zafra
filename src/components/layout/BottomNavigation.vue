<script setup lang="ts">
import { PHONE_E164 } from '@/config/contact'

defineProps<{
  activeNav: string
}>()

const emit = defineEmits<{
  (e: 'nav-click', href: string): void
}>()

const items = [
  { text: 'Inicio', href: '#inicio', icon: 'mdi-home-outline', iconActive: 'mdi-home' },
  { text: 'Servicios', href: '#servicios', icon: 'mdi-doctor', iconActive: 'mdi-doctor' },
  { text: 'Enfermedades', href: '#enfermedades', icon: 'mdi-heart-outline', iconActive: 'mdi-heart' },
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
    
    <!-- Enlace Directo a Llamar (Lanza el marcador telefónico nativo en el celular) -->
    <a :href="`tel:${PHONE_E164}`" class="bottom-nav-item call-nav-item">
      <v-icon class="nav-icon" size="22" color="#22c55e">mdi-phone</v-icon>
      <span class="nav-text" style="color: #22c55e;">Llamar</span>
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
  border-top: 1px solid rgba(10, 124, 196, 0.12);
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
  color: #64748b !important; /* Gris Slate Neutro */
  transition: all 0.2s ease;
  width: 20%; /* 5 elementos al 20% cada uno */
  height: 100%;
}

.nav-icon {
  margin-bottom: 2px;
  transition: transform 0.2s ease;
}

.bottom-nav-item:hover,
.bottom-nav-item.active {
  color: #0a7cc4 !important; /* Azul Principal Corporativo */
}

.bottom-nav-item.active .nav-icon {
  transform: translateY(-2px);
  color: #0a7cc4 !important;
}

.nav-text {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.2px;
}
</style>
