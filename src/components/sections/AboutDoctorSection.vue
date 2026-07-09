<script setup lang="ts">
// Data arrays are directly handled in template for custom mockup card layouts
</script>

<template>
  <section class="section-padding bg-white position-relative">
    <v-container>
      <v-row class="align-center">
        <!-- Columna de la foto (Izquierda) -->
        <v-col cols="12" md="5" class="d-flex justify-center position-relative reveal">
          <div class="decorative-badge-experience d-flex flex-column align-center justify-center elevation-6">
            <span class="badge-num font-weight-black leading-none">10</span>
            <span class="badge-lbl text-uppercase font-weight-bold text-center leading-tight">Años<br>Médicos</span>
          </div>
          <v-avatar size="400" class="elevation-6 border-white-glow">
            <v-img src="/doctor.png" alt="Dr. Zafra - Especialista en Rodilla" loading="lazy" class="doctor-avatar-img" img-style="object-position: 75% 0% !important;" />
          </v-avatar>
        </v-col>

        <!-- Columna de información (Derecha) -->
        <v-col cols="12" md="7" class="mt-8 mt-md-0 text-left reveal">
          <!-- Badge de Especialista -->
          <div class="d-inline-flex align-center px-4 py-1.5 rounded-pill bg-primary-light text-primary text-caption font-weight-bold mb-3">
            <v-avatar color="primary" size="22" class="mr-2 text-white"><v-icon size="12">mdi-account</v-icon></v-avatar>
            TU ESPECIALISTA
          </div>
          
          <h2 class="section-title font-weight-black text-slate mt-2" style="font-size: 2.3rem; line-height: 1.15;">
            Medicina Regenerativa de Confianza en Tarapoto
          </h2>
          
          <!-- Separador de Hoja (Mockup) -->
          <div class="d-flex align-center justify-start gap-2 my-4">
            <div style="flex-grow: 1; height: 1.5px; background-color: rgba(9, 79, 42, 0.12); max-width: 100px;"></div>
            <v-icon color="primary" size="20">mdi-leaf</v-icon>
            <div style="flex-grow: 1; height: 1.5px; background-color: rgba(9, 79, 42, 0.12); max-width: 100px;"></div>
          </div>
          
          <p class="text-body-1 text-slate-muted mb-4" style="font-size: 1.5rem; line-height: 1.6;">
            El <strong>Dr. Zafra</strong> cuenta con una sólida trayectoria de 10 años en el cuidado y restauración de la salud articular en la región San Martín.
          </p>
          <p class="text-body-1 text-slate-muted mb-4" style="font-size: 1.5rem; line-height: 1.6;">
            Su enfoque se centra en evitar procedimientos quirúrgicos de alto riesgo a través del uso de terapias biológicas autólogas.
          </p>
          <p class="text-body-1 text-slate-muted mb-6" style="font-size: 1.5rem; line-height: 1.6;">
            Cada consulta cuenta con una evaluación exhaustiva y un protocolo individualizado con el fin de devolver la calidad de vida y el movimiento natural a pacientes con artrosis, desgaste de cartílago y lesiones deportivas.
          </p>
        </v-col>
      </v-row>

      <!-- Fila de Métricas y Características (Mockup) -->
      <v-row class="mt-8 align-stretch justify-center">
        <!-- Bloque Verde (10 Años, Miles, Compromiso) -->
        <v-col cols="12" md="6" class="reveal">
          <v-card class="bg-primary rounded-xl pa-5 text-white d-flex flex-column justify-center gap-4 h-100" elevation="3" style="background-color: var(--primary-color) !important;">
            <div class="d-flex align-center">
              <v-icon size="26" class="mr-4 text-white">mdi-calendar-check</v-icon>
              <div class="text-left" style="line-height: 1.25;">
                <div class="font-weight-black text-body-1" style="font-size: 1.4rem !important;">10 Años</div>
                <div style="font-size: 1.1rem; opacity: 0.9;">de experiencia médica</div>
              </div>
            </div>
            <v-divider color="white" style="opacity: 0.15;"></v-divider>
            <div class="d-flex align-center">
              <v-icon size="26" class="mr-4 text-white">mdi-account-group</v-icon>
              <div class="text-left" style="line-height: 1.25;">
                <div class="font-weight-black text-body-1" style="font-size: 1.4rem !important;">Miles de</div>
                <div style="font-size: 1.1rem; opacity: 0.9;">pacientes atendidos</div>
              </div>
            </div>
            <v-divider color="white" style="opacity: 0.15;"></v-divider>
            <div class="d-flex align-center">
              <v-icon size="26" class="mr-4 text-white">mdi-shield-check</v-icon>
              <div class="text-left" style="line-height: 1.25;">
                <div class="font-weight-black text-body-1" style="font-size: 1.4rem !important;">Compromiso</div>
                <div style="font-size: 1.1rem; opacity: 0.9;">con tu salud y bienestar</div>
              </div>
            </div>
          </v-card>
        </v-col>
 
        <!-- Bloque 2: Eficacia Biológica -->
        <v-col cols="12" sm="6" md="3" class="reveal">
          <v-card class="rounded-xl pa-6 border-light text-center d-flex flex-column justify-center align-center h-100" elevation="3" style="background-color: #ffffff !important;">
            <v-avatar color="rgba(9, 79, 42, 0.08)" size="56" class="mb-4">
              <v-icon color="primary" size="26">mdi-dna</v-icon>
            </v-avatar>
            <h4 class="font-weight-black text-slate mb-2" style="font-size: 1.35rem;">Eficacia Biológica</h4>
            <p class="text-body-2 text-slate-muted mb-0" style="line-height: 1.4; font-size: 1.15rem !important;">Sin riesgo de rechazo inmunológico</p>
          </v-card>
        </v-col>
 
        <!-- Bloque 3: Tecnología de Punta -->
        <v-col cols="12" sm="6" md="3" class="reveal">
          <v-card class="rounded-xl pa-6 border-light text-center d-flex flex-column justify-center align-center h-100" elevation="3" style="background-color: #ffffff !important;">
            <v-avatar color="rgba(9, 79, 42, 0.08)" size="56" class="mb-4">
              <v-icon color="primary" size="26">mdi-test-tube</v-icon>
            </v-avatar>
            <h4 class="font-weight-black text-slate mb-2" style="font-size: 1.35rem;">Tecnología de Punta</h4>
            <p class="text-body-2 text-slate-muted mb-0" style="line-height: 1.4; font-size: 1.15rem !important;">Centrifugado de alta pureza plaquetaria</p>
          </v-card>
        </v-col>
      </v-row>
 
      <!-- Banner de la Misión / Firma (Mockup) -->
      <v-row class="justify-center mt-12 reveal">
        <v-col cols="12">
          <v-card class="rounded-xl pa-6 pa-md-8 border-light elevation-3 d-flex flex-column flex-sm-row align-center justify-space-between" style="background-color: #ffffff !important;">
            <div class="d-flex align-start mr-sm-6 mb-4 mb-sm-0 text-left">
              <v-avatar color="rgba(9, 79, 42, 0.06)" size="48" class="mr-4 text-primary flex-shrink-0">
                <v-icon size="28">mdi-format-quote-open</v-icon>
              </v-avatar>
              <p class="text-body-2 font-italic text-slate mb-0 mt-2" style="font-size: 1.5rem !important; max-width: 650px; line-height: 1.6;">
                Nuestra misión es ofrecer tratamientos seguros, efectivos y personalizados que te permitan volver a disfrutar de una vida activa y sin dolor.
              </p>
            </div>
            
            <div class="d-flex flex-column align-end flex-shrink-0 text-right signature-container" style="border-left: 1px solid rgba(0,0,0,0.08); padding-left: 24px;">
              <span class="signature-text text-primary">Dr. Zafra</span>
              <span class="text-uppercase text-grey-darken-1 font-weight-bold" style="font-size: 0.65rem; letter-spacing: 3px; margin-top: -6px;">Centro Médico</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.decorative-badge-experience {
  position: absolute;
  top: 15px;
  left: 20px;
  width: 90px;
  height: 90px;
  background-color: #1C2E24; /* Negro Bosque */
  border: 3px solid white;
  border-radius: 50%;
  color: white;
  z-index: 3;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.badge-num {
  font-size: 1.8rem;
  line-height: 1;
}

.badge-lbl {
  font-size: 0.65rem;
}

.border-white-glow {
  border: 6px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.doctor-avatar-img :deep(img) {
  object-fit: cover !important;
  object-position: 75% 0% !important;
}

.signature-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.signature-text {
  font-family: 'Alex Brush', cursive !important;
  font-size: 2.8rem !important;
  font-weight: 400 !important;
  line-height: 0.9 !important;
  color: var(--primary-color) !important;
}
</style>
