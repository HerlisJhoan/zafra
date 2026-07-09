<script setup lang="ts">
import { navItems } from '@/data/content'
import { PHONE_DISPLAY, PHONE_E164 } from '@/config/contact'

const activeNav = defineModel<string>('activeNav', { default: '#inicio' })
const mobileDrawer = defineModel<boolean>('mobileDrawer', { default: false })

const emit = defineEmits<{
  (e: 'nav-click', href: string): void
}>()
</script>

<template>
  <header class="site-header-wrapper">
    <!-- TOP BAR (Barra Superior Azul Oscuro) -->
    <div class="top-bar d-none d-sm-flex align-center justify-space-between px-4 px-md-8 text-white text-caption">
      <!-- Info Izquierda -->
      <div class="d-flex align-center gap-4">
        <span class="d-flex align-center">
          <v-icon size="14" class="mr-1 text-blue-lighten-3">mdi-map-marker-outline</v-icon>
          Barrio Huayco, Tarapoto
        </span>
        <span class="d-flex align-center">
          <v-icon size="14" class="mr-1 text-blue-lighten-3">mdi-clock-outline</v-icon>
          Lun - Sáb: 8:00 AM - 8:00 PM
        </span>
        <span class="d-flex align-center">
          <v-icon size="14" class="mr-1 text-blue-lighten-3">mdi-email-outline</v-icon>
           zafracarrera1985@gmail.com
        </span>
      </div>

      <!-- Redes e Info Derecha -->
      <div class="d-flex align-center gap-4">
        <div class="d-flex align-center gap-2">
          <a href="https://www.facebook.com/share/1J4iEtNMFj/" target="_blank" rel="noopener" class="text-white text-decoration-none">
            <v-icon size="16">mdi-facebook</v-icon>
          </a>
          <a href="https://www.tiktok.com/@drzafra" target="_blank" rel="noopener" class="text-white text-decoration-none">
            <v-icon size="16">mdi-tiktok</v-icon>
          </a>
          <a :href="`https://wa.me/${PHONE_E164.replace('+', '')}`" target="_blank" rel="noopener" class="text-white text-decoration-none">
            <v-icon size="16">mdi-whatsapp</v-icon>
          </a>
        </div>
        <div class="vertical-divider"></div>
        <a :href="`tel:${PHONE_E164}`" class="d-flex align-center text-white text-decoration-none font-weight-bold">
          <v-icon size="14" class="mr-1 text-blue-lighten-3">mdi-phone</v-icon>
          {{ PHONE_DISPLAY }}
        </a>
      </div>
    </div>

    <!-- MAIN HEADER (Cabecera Principal Blanca) -->
    <div class="main-header d-flex align-center justify-space-between px-4 px-md-8">
      <!-- Logo Branding -->
      <a href="#inicio" class="d-flex align-center header-logo-link text-decoration-none" @click="activeNav = '#inicio'">
        <v-img src="/logo.png" max-height="48" width="48" contain alt="Logo Dr. Zafra - Terapia Regenerativa"
          class="rounded-circle mr-3 flex-shrink-0"></v-img>
        <div class="d-flex flex-column text-left justify-center header-brand-text" style="line-height: 1.15;">
          <span class="text-uppercase font-weight-bold text-grey-darken-1"
            style="font-size: 0.65rem; letter-spacing: 2px; white-space: nowrap;">Centro Médico</span>
          <span class="text-uppercase font-weight-black text-primary"
            style="font-size: 1.25rem; letter-spacing: 1px; white-space: nowrap;">Dr. Zafra</span>
        </div>
      </a>

      <!-- Menu Items -->
      <div class="d-none d-lg-flex align-center gap-1">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          :class="['nav-link', activeNav === item.href ? 'active-nav-link' : '']" @click.prevent="emit('nav-click', item.href)">
          {{ item.text }}
        </a>
      </div>

      <!-- Action Button (Reservar Cita) & Mobile Menu Icon -->
      <div class="d-flex align-center gap-3">
        <v-btn
          color="primary"
          variant="flat"
          class="action-btn font-weight-bold d-none d-sm-flex text-white rounded-pill px-6"
          href="#citas"
          @click.prevent="emit('nav-click', '#citas')"
        >
          Reservar Cita
        </v-btn>

        <v-btn icon variant="text" class="d-flex d-lg-none" aria-label="Abrir menú de navegación"
          @click="mobileDrawer = true">
          <v-icon size="26">mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(13, 71, 161, 0.06);
}

.top-bar {
  height: 38px;
  background-color: #0b1a36;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.main-header {
  height: 76px;
  background-color: #ffffff;
  border-bottom: 1px solid var(--border-light, #e0e0e0);
}

.vertical-divider {
  width: 1px;
  height: 14px;
  background-color: rgba(255, 255, 255, 0.2);
}

.header-logo-link {
  text-decoration: none;
}

.nav-link {
  color: var(--slate-dark, #1e293b) !important;
  font-size: 0.95rem !important;
  font-weight: 700 !important;
  text-transform: none !important;
  letter-spacing: 0.1px !important;
  padding: 6px 12px !important;
  min-width: 0 !important;
  position: relative !important;
  transition: color 0.3s ease !important;
  background: transparent !important;
  text-decoration: none !important;
  display: inline-block !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0px; /* Traído más arriba, pegado a la base de la letra */
  left: 0;
  width: 100%;
  height: 3.5px;
  background: linear-gradient(90deg, #0d47a1 0%, #00bcd4 100%);
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-link:hover {
  color: var(--primary-color, #0d47a1) !important;
  background: transparent !important;
}

.nav-link:hover::after,
.active-nav-link::after {
  transform: scaleX(1) !important;
}

.active-nav-link {
  color: var(--primary-color, #0d47a1) !important;
  background: transparent !important;
  box-shadow: none !important;
}

.action-btn {
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  transition: all 0.3s ease !important;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 71, 161, 0.2);
}

.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
</style>
