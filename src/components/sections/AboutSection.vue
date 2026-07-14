<script setup lang="ts">
// Somos Dr. Zafra Section Component
</script>

<template>
  <section class="section-padding bg-slate-soft position-relative overflow-hidden">
    <div class="tech-grid-bg"></div>
    <v-container class="position-relative" style="z-index: 2;">
      <v-row class="align-center">
        <!-- Collage Circular Izquierdo -->
        <v-col cols="12" md="5" class="reveal d-flex justify-center mb-10 mb-md-0">
          <div class="collage-wrapper">
            <!-- Círculo de Fondo Decorativo con ADN -->
            <div class="dna-circle-bg"></div>

            <!-- Círculo Principal -->
            <div class="circle-main elevation-4">
              <v-img src="/gallery/slider/ejemplo-2.jpeg" cover class="fill-height"></v-img>
            </div>

            <!-- Círculo Secundario Superpuesto -->
            <div class="circle-sub elevation-4">
              <v-img src="/gallery/slider/atendiendo.jpeg" cover class="fill-height"></v-img>
            </div>
          </div>
        </v-col>

        <!-- Bloques Informativos Derechos (Somos Terapia Celular) -->
        <v-col cols="12" md="7" class="reveal text-left">
          <h2 class="section-title-somos font-weight-black mb-8">Somos Dr. Zafra - Terapia Regenerativa</h2>

          <v-row class="gap-row">
            <!-- Bloque 1 -->
            <v-col cols="12" sm="6" class="d-flex align-start">
              <div class="icon-box mr-4">
                <v-icon size="28" color="#0a7cc4">mdi-heart-pulse</v-icon>
              </div>
              <div>
                <h3 class="item-title font-weight-bold mb-2">Medicina regenerativa:</h3>
                <p class="item-text text-slate-muted">
                  Brindamos tratamientos biológicos y naturales con célula madre, exosomas, factor de crecimiento
                  celular, plasma rico en plaquetas, entre otros, para enfermedades osteomioarticulares.
                </p>
              </div>
            </v-col>

            <!-- Bloque 2 -->
            <v-col cols="12" sm="6" class="d-flex align-start">
              <div class="icon-box mr-4">
                <v-icon size="28" color="#0a7cc4">mdi-clipboard-check-outline</v-icon>
              </div>
              <div>
                <h3 class="item-title font-weight-bold mb-2">Tratamientos integrales y personalizados:</h3>
                <p class="item-text text-slate-muted">
                  Ofrecemos una variedad de tratamientos que se adaptan a las necesidades y condiciones de cada
                  paciente, buscando la mejor solución para su problema de salud.
                </p>
              </div>
            </v-col>

            <!-- Bloque 3 -->
            <v-col cols="12" sm="6" class="d-flex align-start">
              <div class="icon-box mr-4">
                <v-icon size="28" color="#0a7cc4">mdi-seal-variant</v-icon>
              </div>
              <div>
                <h3 class="item-title font-weight-bold mb-2">Reconocimiento internacional:</h3>
                <p class="item-text text-slate-muted">
                  Reconocidos internacionalmente por la Sociedad Internacional de salud, investigación, desarrollo
                  empresarial y tecnologías - SIISDET. Somos miembros de la Global Stem Cell Group (USA) y la
                  International Society for Stem Cell Application (ISSCA-USA).
                </p>
              </div>
            </v-col>

            <!-- Bloque 4 -->
            <v-col cols="12" sm="6" class="d-flex align-start">
              <div class="icon-box mr-4">
                <v-icon size="28" color="#0a7cc4">mdi-flask-outline</v-icon>
              </div>
              <div>
                <h3 class="item-title font-weight-bold mb-2">Tecnología de punta:</h3>
                <p class="item-text text-slate-muted">
                  Utilizamos equipos, insumos y técnicas de última generación que garantizan la efectividad y seguridad
                  de todos nuestros tratamientos.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.section-title-somos {
  font-size: 2.2rem;
  color: #1a548a;
  line-height: 1.2;
}

.collage-wrapper {
  position: relative;
  width: 340px;
  height: 340px;
}

.circle-main {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
}

.circle-sub {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffffff;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2) !important;
}

.dna-circle-bg {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 2px dashed rgba(10, 124, 196, 0.25);
  animation: rotate-dashed 30s linear infinite;
  z-index: 1;
}

@keyframes rotate-dashed {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.icon-box {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(10, 124, 196, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-title {
  font-size: 1.15rem;
  color: #1c2e24;
}

.item-text {
  font-size: 1rem;
  line-height: 1.5;
}

.gap-row>.v-col {
  padding-bottom: 24px;
}
</style>
