<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="page-header-banner position-relative overflow-hidden d-flex flex-column align-center justify-center">
    <v-container class="position-relative text-center text-white banner-content" style="z-index: 2;">
      <h1 class="banner-title font-weight-black mb-2 text-uppercase reveal">
        {{ title }}
      </h1>
      <div class="banner-breadcrumbs text-uppercase font-weight-bold reveal">
        <a href="#inicio" class="home-link">INICIO</a> / <span>{{ title }}</span>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.page-header-banner {
  width: 100%;
  padding-top: 110px; /* Mantiene exactamente la misma altura y padding original */
  padding-bottom: 50px;
  background: linear-gradient(135deg, #26a5e4 0%, #0a7cc4 100%);
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.15);
}

.banner-content {
  margin-top: 10px;
}

.banner-title {
  font-size: 2.6rem;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.banner-breadcrumbs {
  font-size: 0.85rem;
  letter-spacing: 2px;
  opacity: 0.9;
}

.home-link {
  color: #ffffff !important;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.home-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .page-header-banner {
    padding-top: 100px;
    padding-bottom: 40px;
  }
  .banner-title {
    font-size: 2rem;
  }
}
</style>
