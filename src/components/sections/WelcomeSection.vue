<script setup lang="ts">
// Bienvenido Section Component
</script>

<template>
  <section class="section-padding bg-white">
    <v-container>
      <v-row class="align-center">
        <!-- Texto de Bienvenida -->
        <v-col cols="12" md="6" class="reveal text-left">
          <h2 class="welcome-title font-weight-black mb-6">Bienvenido</h2>

          <p class="welcome-text mb-6">
            Bienvenido a la página web de <strong> Centro Médico Dr. Zafra y Medicina Regenerativa</strong>, organización en
            salud líder en el tratamiento de enfermedades osteomioarticulares, con técnicas innovadoras y naturales.
          </p>

          <p class="welcome-text mb-6">
            Somos un equipo de médicos colegiados que hemos decidido apostar por la medicina regenerativa, una rama de
            la medicina que utiliza las propias células y tejidos del paciente para desinflamar, reparar, regenerar y
            restaurar el tejido dañado.
          </p>

          <p class="welcome-text mb-6">
            Desde el año 2011, ofrecemos servicios médicos exclusivos de medicina regenerativa aplicada a enfermedades
            como la artrosis, las lesiones meniscales, las lesiones de hombro, la condromalacia rotuliana, artritis
            reumatoidea entre otras.
          </p>

          <p class="welcome-tagline font-weight-bold text-slate">
            Medicina Regenerativa y Terapia Celular Dr. Zafra, la medicina del futuro, hoy.
          </p>
        </v-col>

        <!-- Malla de Imágenes y Frase (Estilo Premium) -->
        <v-col cols="12" md="6" class="reveal">
          <v-row class="dense-grid">
            <!-- Imagen arriba izquierda -->
            <v-col cols="6">
              <v-card class="rounded-xl overflow-hidden elevation-3 height-box">
                <v-img src="/gallery/slider/ejemplo-5.jpeg" height="180" cover></v-img>
              </v-card>
            </v-col>

            <!-- Tarjeta Frase azul arriba derecha -->
            <v-col cols="6">
              <v-card
                class="quote-card rounded-xl pa-5 text-white elevation-4 h-100 d-flex flex-column justify-space-between text-left">
                <div class="quote-body font-italic">
                  "La medicina es un arte cuya magia no debe ser revelada, pero cuyo secreto debe ser compartido".
                </div>
                <div class="d-flex align-center mt-4">
                  <v-avatar size="40" class="mr-3 border border-white">
                    <v-img src="/doctor.png" alt="Dr. Zafra"></v-img>
                  </v-avatar>
                  <div>
                    <h4 class="font-weight-bold mb-0 text-body-2">Dr. Zafra</h4>
                    <p class="text-caption mb-0 text-white-70">Médico Cirujano</p>
                  </div>
                </div>
              </v-card>
            </v-col>

            <!-- Imagen abajo izquierda -->
            <v-col cols="6">
              <v-card class="rounded-xl overflow-hidden elevation-3 height-box">
                <v-img src="/gallery/slider/atendiendo.jpeg" height="180" cover></v-img>
              </v-card>
            </v-col>

            <!-- Imagen abajo derecha -->
            <v-col cols="6">
              <v-card class="rounded-xl overflow-hidden elevation-3 height-box">
                <v-img src="/gallery/slider/ejemplo-3.jpeg" height="180" cover></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.welcome-title {
  font-size: 3rem;
  color: #0a7cc4;
  line-height: 1.1;
}

.welcome-text {
  font-size: 1.25rem !important;
  line-height: 1.6 !important;
  color: var(--slate-muted, #556B5F);
}

.welcome-tagline {
  font-size: 1.35rem !important;
  line-height: 1.5;
  color: var(--slate-dark, #1C2E24) !important;
}

.quote-card {
  background: linear-gradient(135deg, #1588D8 0%, #0E6BB0 100%);
  min-height: 180px;
}

.quote-body {
  font-size: 1rem;
  line-height: 1.4;
  opacity: 0.95;
}

.text-white-70 {
  color: rgba(255, 255, 255, 0.7);
}

.dense-grid {
  margin: -6px;
}

.dense-grid>.v-col {
  padding: 6px;
}

.height-box {
  height: 180px;
}
</style>
