<script setup lang="ts">
import { navItems } from '@/data/content'
import { PHONE_E164 } from '@/config/contact'

const activeNav = defineModel<string>('activeNav', { default: '#inicio' })
const mobileDrawer = defineModel<boolean>('mobileDrawer', { default: false })

const emit = defineEmits<{
  (e: 'nav-click', href: string): void
}>()
</script>

<template>
  <header class="site-header-wrapper">
    <!-- MAIN HEADER (Cabecera Principal Unificada de color Azul Gradiente Premium) -->
    <div class="main-header d-flex align-center justify-space-between px-4 px-md-8">
      <!-- Logo Branding (Estilo modelo con círculo y línea divisora) -->
      <a href="#inicio" class="d-flex align-center header-logo-link text-decoration-none" @click="activeNav = '#inicio'">
        <div class="logo-circle mr-3">
          <img src="/logo.png" alt="Logo Dr. Zafra - Terapia Regenerativa" style="height: 50px; width: 50px; object-fit: contain;" />
        </div>
        <div class="d-flex flex-column text-left justify-center header-brand-text" style="line-height: 1.1;">
          <span class="text-uppercase font-weight-black text-white"
            style="font-size: 0.95rem; letter-spacing: 1px; white-space: nowrap;">Centro Médico</span>
          <div class="brand-divider my-0.5"></div>
          <span class="text-uppercase font-weight-bold"
            style="font-size: 1.15rem; letter-spacing: 2px; white-space: nowrap; color: rgba(255, 255, 255, 0.95);">Dr. Zafra</span>
        </div>
      </a>

      <!-- Menu Items (Centrados) -->
      <div class="d-none d-lg-flex align-center gap-2">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          :class="['nav-link', activeNav === item.href ? 'active-nav-link' : '']" @click.prevent="emit('nav-click', item.href)">
          {{ item.text }}
        </a>
      </div>

      <!-- Action Button (Reservar Cita) & Social Media Circle Icons & Mobile Menu Icon -->
      <div class="d-flex align-center gap-3">
        <!-- Redes Sociales Circulares (Modelo de Referencia) -->
        <div class="d-none d-lg-flex align-center gap-2 mr-2">
          <a href="https://www.facebook.com/share/1J4iEtNMFj/" target="_blank" rel="noopener" class="social-circle-link" aria-label="Facebook">
            <v-icon size="16">mdi-facebook</v-icon>
          </a>
          <a href="https://www.tiktok.com/@drzafra" target="_blank" rel="noopener" class="social-circle-link" aria-label="TikTok">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a :href="`https://wa.me/${PHONE_E164.replace('+', '')}`" target="_blank" rel="noopener" class="social-circle-link" aria-label="WhatsApp">
            <v-icon size="16">mdi-whatsapp</v-icon>
          </a>
        </div>

        <v-btn
          variant="flat"
          class="action-btn font-weight-bold d-none d-sm-flex rounded-pill px-6"
          href="#citas"
          @click.prevent="emit('nav-click', '#citas')"
        >
          Reservar Cita
        </v-btn>

        <v-btn icon variant="text" class="d-flex d-lg-none text-white" aria-label="Abrir menú de navegación"
          @click="mobileDrawer = true">
          <v-icon size="28">mdi-menu</v-icon>
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
  box-shadow: 0 4px 20px rgba(9, 79, 42, 0.12);
}

.main-header {
  height: 92px;
  background: linear-gradient(to bottom, rgba(38, 165, 228, 0.98) 0%, rgba(10, 124, 196, 0.2) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.logo-circle {
  border: 2px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.header-logo-link:hover .logo-circle {
  transform: scale(1.08) rotate(8deg);
}

.brand-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
}

.header-logo-link {
  text-decoration: none;
}

.nav-link {
  color: #111827 !important;
  font-size: 0.9rem !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.5px !important;
  padding: 8px 14px !important;
  min-width: 0 !important;
  position: relative !important;
  transition: all 0.3s ease !important;
  background: transparent !important;
  text-decoration: none !important;
  display: inline-block !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 3.5px;
  background: #111827;
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-link:hover {
  color: #0a7cc4 !important;
  background: transparent !important;
}

.nav-link:hover::after,
.active-nav-link::after {
  transform: scaleX(1) !important;
  background: #0a7cc4 !important;
}

.active-nav-link {
  color: #0a7cc4 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.social-circle-link {
  color: #ffffff !important;
  border: 1.5px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-circle-link:hover {
  border-color: #ffffff;
  background-color: #ffffff;
  color: #0a7cc4 !important;
  transform: scale(1.15) translateY(-3px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.25);
}

.action-btn {
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  font-size: 1.05rem !important;
  background-color: #ffffff !important;
  color: #0a7cc4 !important;
  transition: all 0.3s ease !important;
  animation: pulse-glow 2.5s infinite;
}

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.action-btn:hover {
  transform: translateY(-2px);
  background-color: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.35) !important;
  animation-play-state: paused;
}

.gap-1 { gap: 4px; }
.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
</style>
