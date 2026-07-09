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
          <v-icon size="14" class="mr-1 text-primary-light">mdi-map-marker-outline</v-icon>
          Barrio Huayco, Tarapoto
        </span>
        <span class="d-flex align-center">
          <v-icon size="14" class="mr-1 text-primary-light">mdi-clock-outline</v-icon>
          Lun - Sáb: 8:00 AM - 8:00 PM
        </span>
        <span class="d-flex align-center">
          <v-icon size="14" class="mr-1 text-primary-light">mdi-email-outline</v-icon>
           zafracarrera1985@gmail.com
        </span>
      </div>

      <!-- Redes e Info Derecha -->
      <div class="d-flex align-center gap-4">
        <div class="d-flex align-center gap-2">
          <a href="https://www.facebook.com/share/1J4iEtNMFj/" target="_blank" rel="noopener" class="text-white text-decoration-none">
            <v-icon size="16">mdi-facebook</v-icon>
          </a>
          <a href="https://www.tiktok.com/@drzafra" target="_blank" rel="noopener" class="text-white text-decoration-none d-flex align-center">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a :href="`https://wa.me/${PHONE_E164.replace('+', '')}`" target="_blank" rel="noopener" class="text-white text-decoration-none">
            <v-icon size="16">mdi-whatsapp</v-icon>
          </a>
        </div>
        <div class="vertical-divider"></div>
        <a :href="`tel:${PHONE_E164}`" class="d-flex align-center text-white text-decoration-none font-weight-bold">
          <v-icon size="14" class="mr-1 text-primary-light">mdi-phone</v-icon>
          {{ PHONE_DISPLAY }}
        </a>
      </div>
    </div>

    <!-- MAIN HEADER (Cabecera Principal Blanca) -->
    <div class="main-header d-flex align-center justify-space-between px-4 px-md-8">
      <!-- Logo Branding -->
      <a href="#inicio" class="d-flex align-center header-logo-link text-decoration-none" @click="activeNav = '#inicio'">
        <img src="/logo.png" alt="Logo Dr. Zafra - Terapia Regenerativa" class="mr-3 flex-shrink-0" style="height: 68px; width: 68px; object-fit: contain;" />
        <div class="d-flex flex-column text-left justify-center header-brand-text" style="line-height: 1.15;">
          <span class="text-uppercase font-weight-bold text-grey-darken-1"
            style="font-size: 0.8rem; letter-spacing: 2px; white-space: nowrap;">Centro Médico</span>
          <span class="text-uppercase font-weight-black text-primary"
            style="font-size: 1.55rem; letter-spacing: 1px; white-space: nowrap;">Dr. Zafra</span>
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
          class="action-btn font-weight-bold d-none d-sm-flex text-white rounded-pill px-6 py-2"
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
  box-shadow: 0 2px 12px rgba(9, 79, 42, 0.08);
}

.top-bar {
  height: 38px;
  background-color: #0A2E1D;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.main-header {
  height: 96px;
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
  font-size: 1.15rem !important;
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
  background: linear-gradient(90deg, #094F2A 0%, #7A2E43 100%);
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-link:hover {
  color: var(--primary-color, #094F2A) !important;
  background: transparent !important;
}

.nav-link:hover::after,
.active-nav-link::after {
  transform: scaleX(1) !important;
}

.active-nav-link {
  color: var(--primary-color, #094F2A) !important;
  background: transparent !important;
  box-shadow: none !important;
}

.action-btn {
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  font-size: 1.15rem !important;
  transition: all 0.3s ease !important;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(9, 79, 42, 0.2);
}

.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
</style>
