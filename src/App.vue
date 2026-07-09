<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { navItems } from '@/data/content'
import { useScrollReveal } from '@/composables/useScrollReveal'

import SiteHeader from '@/components/layout/SiteHeader.vue'
import MobileDrawer from '@/components/layout/MobileDrawer.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import WhatsAppFloatButton from '@/components/layout/WhatsAppFloatButton.vue'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import ScrollToTopButton from '@/components/layout/ScrollToTopButton.vue'
import PhoneFloatButton from '@/components/layout/PhoneFloatButton.vue'

import HeroSlider from '@/components/sections/HeroSlider.vue'
import WelcomeSection from '@/components/sections/WelcomeSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SymptomsSection from '@/components/sections/SymptomsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import Diagnosis3dSection from '@/components/sections/Diagnosis3dSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import ConditionsSection from '@/components/sections/ConditionsSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import AboutDoctorSection from '@/components/sections/AboutDoctorSection.vue'
import AboutUsSection from '@/components/sections/AboutUsSection.vue'
import BlogSection from '@/components/sections/BlogSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import LocationsSection from '@/components/sections/LocationsSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import AppointmentModal from '@/components/ui/AppointmentModal.vue'
import PageHeaderBanner from '@/components/ui/PageHeaderBanner.vue'

const mobileDrawer = ref(false)
const activeNav = ref('#inicio')
useScrollReveal()

const showAppointmentModal = ref(false)

const handleNavClickWrapper = (href: string) => {
  if (href === '#citas') {
    showAppointmentModal.value = true
  } else {
    activeNav.value = href
    // Restablece el scroll arriba instantáneamente al cambiar de pestaña
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
}

onMounted(() => {
  const handleGlobalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a')
    if (anchor) {
      const href = anchor.getAttribute('href')
      if (href === '#citas') {
        e.preventDefault()
        showAppointmentModal.value = true
      } else if (href === '#inicio') {
        e.preventDefault()
        handleNavClickWrapper('#inicio')
      }
    }
  }
  window.addEventListener('click', handleGlobalClick, { capture: true })
})
</script>

<template>
  <v-app class="app-container">
    <a href="#inicio" class="skip-link">Saltar al contenido principal</a>

    <SiteHeader
      v-model:activeNav="activeNav"
      v-model:mobileDrawer="mobileDrawer"
      @nav-click="handleNavClickWrapper"
    />

    <MobileDrawer
      v-model:mobileDrawer="mobileDrawer"
      :active-nav="activeNav"
      @nav-click="handleNavClickWrapper"
    />

    <v-main class="main-content" :class="{ 'has-header-offset': activeNav !== '#inicio' }">
      <!-- Pestaña INICIO -->
      <div v-show="activeNav === '#inicio'">
        <HeroSlider @reserve-click="handleNavClickWrapper('#citas')" />
        <WelcomeSection />
        <SymptomsSection />
        <TestimonialsSection />
      </div>

      <!-- Pestaña NOSOTROS -->
      <div v-show="activeNav === '#nosotros'">
        <AboutSection />
        <AboutUsSection />
        <AboutDoctorSection />
      </div>

      <!-- Pestaña SERVICIOS (Tratamientos) -->
      <div v-show="activeNav === '#servicios'">
        <ServicesSection />
        <ProcessSection />
        <Diagnosis3dSection />
      </div>

      <!-- Pestaña ENFERMEDADES QUE TRATAMOS -->
      <div v-show="activeNav === '#enfermedades'">
        <BenefitsSection />
        <ConditionsSection />
      </div>

      <!-- Pestaña NOVEDADES (Blog, FAQs y Galería) -->
      <div v-show="activeNav === '#novedades'">
        <BlogSection />
        <FaqSection />
        <GallerySection />
      </div>

      <!-- Pestaña CONTACTO (Dirección, horario y mapa) -->
      <div v-show="activeNav === '#contacto'">
        <LocationsSection />
      </div>
    </v-main>

    <SiteFooter />

    <ScrollToTopButton />

    <WhatsAppFloatButton :visible="!mobileDrawer" />
    
    <PhoneFloatButton :visible="!mobileDrawer" />
    
    <BottomNavigation :active-nav="activeNav" @nav-click="handleNavClickWrapper" />

    <!-- Modal Emergente de Reserva de Citas -->
    <AppointmentModal v-model="showAppointmentModal" />
  </v-app>
</template>
