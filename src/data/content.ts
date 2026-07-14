export interface NavItem {
  text: string
  href: string
  icon: string
}

export const navItems: NavItem[] = [
  { text: 'Inicio', href: '#inicio', icon: 'mdi-home-outline' },
  { text: 'Nosotros', href: '#nosotros', icon: 'mdi-account-group-outline' },
  { text: 'Servicios', href: '#servicios', icon: 'mdi-doctor' },
  { text: 'Enfermedades', href: '#enfermedades', icon: 'mdi-heart-outline' },
  { text: 'Novedades', href: '#novedades', icon: 'mdi-newspaper-variant-outline' },
  { text: 'Contacto', href: '#contacto', icon: 'mdi-phone-outline' },
]

export interface Option {
  text: string
  value: string
}

export const painAreas: Option[] = [
  { text: 'Hombro', value: 'Hombro' },
  { text: 'Codo', value: 'Codo' },
  { text: 'Antebrazo', value: 'Antebrazo' },
  { text: 'Muñeca', value: 'Muñeca' },
  { text: 'Mano', value: 'Mano' },
  { text: 'Cadera', value: 'Cadera' },
  { text: 'Rodilla', value: 'Rodilla' },
  { text: 'Tobillo', value: 'Tobillo' },
  { text: 'Pie', value: 'Pie' },
]

export const days: Option[] = [
  { text: 'Lunes a Miércoles 📅', value: 'Lunes a Miércoles' },
  { text: 'Jueves a Sábado 📅', value: 'Jueves a Sábado' },
  { text: 'Lo antes posible ⚡', value: 'Lo antes posible' },
]

export const sedes: Option[] = [{ text: 'Barrio Huayco', value: 'Barrio Huayco' }]

export interface HeroSlide {
  img: string
  title: string
  subtitle: string
  chip: string
  chipColor: string
}

export const heroSlides: HeroSlide[] = [
  { img: '/gallery/slider/atendiendo.jpeg', title: 'Preparación del PRP', subtitle: 'Plasma listo para la infiltración', chip: 'Alta Pureza', chipColor: 'primary' },
  { img: '/gallery/slider/ejemplo-1.jpeg', title: 'Consulta Personalizada', subtitle: 'Evaluación exhaustiva', chip: 'A tu medida', chipColor: 'secondary' },
  { img: '/gallery/slider/ejemplo-2.jpeg', title: 'Equipo Médico', subtitle: 'Atención cercana y profesional', chip: 'Bioseguro', chipColor: 'secondary' },
  { img: '/gallery/slider/ejemplo-3.jpeg', title: 'Tratamiento de Articulaciones', subtitle: 'Recupera tu movilidad', chip: 'Eficaz', chipColor: 'primary' },
  { img: '/gallery/slider/ejemplo-4.jpeg', title: 'Aplicación del Tratamiento', subtitle: 'Infiltración precisa y segura', chip: 'Certificado', chipColor: 'primary' },
  { img: '/gallery/slider/ejemplo-5.jpeg', title: 'Sedes en Tarapoto', subtitle: 'Altos estándares de bioseguridad', chip: 'Moderno', chipColor: 'success' },
  { img: '/gallery/slider/ejemplo-6.jpeg', title: 'Tecnología Avanzada', subtitle: 'Centrifugado de alta pureza', chip: 'Bioseguro', chipColor: 'success' },
  { img: '/gallery/slider/ejemplo-7.jpeg', title: 'Evaluación Clínica', subtitle: 'Diagnóstico preciso', chip: 'Evalúate', chipColor: 'primary' },
  { img: '/gallery/slider/ejemplo-9.jpeg', title: 'Bienestar y Recuperación', subtitle: 'Sin cirugías invasivas', chip: 'Seguro', chipColor: 'success' },
]

export interface TreatmentArea {
  icon: string
  title: string
  desc: string
}

export const treatmentAreas: TreatmentArea[] = [
  { icon: 'mdi-human-handsup', title: 'Hombro', desc: 'Alivio del dolor y recuperación funcional' },
  { icon: 'mdi-walk', title: 'Cadera', desc: 'Regenera y mejora tu movilidad' },
  { icon: 'mdi-bone', title: 'Rodilla', desc: 'Tratamiento PRP y Terapia Regenerativa' },
  { icon: 'mdi-foot-print', title: 'Tobillo', desc: 'Tratamiento del dolor y lesiones' },
]

export interface FeatureBannerItem {
  icon: string
  title: string
  desc: string
}

export const featureBannerItems: FeatureBannerItem[] = [
  { icon: 'mdi-checkbox-marked-circle-outline', title: 'Sin cirugía', desc: 'Alternativa segura y efectiva' },
  { icon: 'mdi-clock-fast', title: 'Recuperación rápida', desc: 'Menos dolor y más movilidad' },
  { icon: 'mdi-target', title: 'Resultados comprobados', desc: 'Terapias con evidencia científica' },
  { icon: 'mdi-shield-lock-outline', title: 'Seguridad garantizada', desc: 'Protocolos médicos certificados' },
]

export interface Symptom {
  icon: string
  title: string
  desc: string
}

export const symptoms: Symptom[] = [
  { icon: 'mdi-walk', title: 'Pérdida de Movilidad', desc: 'Dificultad en los movimientos cotidianos como caminar o rigidez al estar mucho tiempo sentado.' },
  { icon: 'mdi-clock-alert-outline', title: 'Dolor Persistente', desc: 'Si el dolor persiste por semanas o incluso estando en reposo, puede ser señal de desgaste articular (artrosis) e inflamación.' },
  { icon: 'mdi-waveform', title: 'Crujidos Articulares', desc: 'El sonido de roce o chasquido al doblar o caminar puede indicar desgaste si viene acompañado de dolor o rigidez.' },
  { icon: 'mdi-fire', title: 'Hinchazón y Calor', desc: 'La inflamación visible o sensación de calor en la articulación son señales de que algo requiere atención médica.' },
]

export interface ProcessStep {
  title: string
  icon: string
  subtitle: string
  desc: string
}

export const processSteps: ProcessStep[] = [
  { title: '1. Muestra de Sangre', icon: 'mdi-needle', subtitle: 'Extracción segura', desc: 'Se toma una pequeña muestra de sangre del propio paciente en un procedimiento rápido y prácticamente indoloro.' },
  { title: '2. Centrifugación', icon: 'mdi-sync', subtitle: 'Separación celular', desc: 'La sangre se procesa en una máquina centrífuga de alta precisión que separa el plasma del resto de los componentes sanguíneos.' },
  { title: '3. Concentración de PRP', icon: 'mdi-opacity', subtitle: 'Plasma Rico en Plaquetas', desc: 'De allí se extrae la fracción de plasma con mayor concentración de factores de crecimiento y plaquetas regenerativas.' },
  { title: '4. Aplicación Médica', icon: 'mdi-pulse', subtitle: 'Infiltración regenerativa', desc: 'El concentrado de PRP se inyecta en la zona afectada (como la rodilla) para favorecer la recuperación celular acelerada.' },
]

export interface Benefit {
  title: string
  subtitle: string
  icon: string
  color: string
  desc: string
}

export const benefits: Benefit[] = [
  { title: 'Regeneración', subtitle: 'Favorece la Regeneración Celular', icon: 'mdi-sprout', color: '#2E7D32', desc: 'Los factores de crecimiento presentes en las plaquetas estimulan la multiplicación de los condrocitos y células del tejido cartilaginoso, ayudando a reconstruir los tejidos desgastados de manera natural.' },
  { title: 'Desinflamación', subtitle: 'Disminuye la Inflamación Crónica', icon: 'mdi-water-off', color: '#0E7C66', desc: 'Ayuda a equilibrar el ambiente articular reduciendo las proteínas inflamatorias (citoquinas). Esto alivia la hinchazón y la sensación de rigidez en la rodilla.' },
  { title: 'Alivio de Dolor', subtitle: 'Ayuda a que el dolor baje significativamente', icon: 'mdi-heart-flash', color: '#D32F2F', desc: 'Al restaurar la homeostasis articular y promover la regeneración biológica local, los receptores del dolor se calman progresivamente, reduciendo la dependencia de analgésicos químicos.' },
  { title: 'Movilidad', subtitle: 'Mejora la Movilidad y Flexibilidad', icon: 'mdi-walk', color: '#7B1FA2', desc: 'Al desinflamar la articulación e incrementar la lubricación natural, la rodilla recupera su rango de movimiento para que puedas caminar, agacharte y subir escaleras sin impedimentos.' },
]

export interface ServiceItem {
  icon: string
  title: string
  desc: string
}

export const regenerativeServices: ServiceItem[] = [
  { icon: 'mdi-water-opacity', title: 'Plasma Rico en Plaquetas', desc: 'Regeneración celular con factores de crecimiento del propio paciente.' },
  { icon: 'mdi-waves', title: 'Terapia en Ondas de Choque', desc: 'Estimulación mecánica no invasiva para reparar tejidos y aliviar el dolor.' },
  { icon: 'mdi-dna', title: 'Exosomas', desc: 'Vesículas regenerativas de última generación para acelerar la recuperación.' },
  { icon: 'mdi-needle', title: 'Viscosuplementación con Ácido Hialurónico', desc: 'Lubricación articular para mejorar el movimiento y reducir la fricción.' },
  { icon: 'mdi-pill', title: 'Vitaminoterapia', desc: 'Suplementación intravenosa para potenciar la recuperación y energía.' },
]

export const generalServices: ServiceItem[] = [
  { icon: 'mdi-stethoscope', title: 'Consulta Médica General', desc: 'Evaluación integral de tu estado de salud con atención personalizada.' },
  { icon: 'mdi-radiology-box-outline', title: 'Rayos X y Ecografía', desc: 'Estudios de imagen para un diagnóstico preciso y oportuno.' },
  { icon: 'mdi-test-tube', title: 'Análisis Clínicos', desc: 'Exámenes de laboratorio completos dentro del mismo centro médico.' },
  { icon: 'mdi-clipboard-pulse-outline', title: 'Evaluaciones Preventivas', desc: 'Chequeos de salud para detectar a tiempo cualquier condición.' },
]

export interface ImageCard {
  img: string
  title: string
  desc: string
}

export const diagnosisSteps: ImageCard[] = [
  { img: '/gallery/guia-rapida.jpeg', title: 'Guía Rápida', desc: '¿Te duele la rodilla y no sabes por qué? Empezamos por entender tu caso.' },
  { img: '/gallery/evaluacion-clinica.jpeg', title: 'Evaluación Clínica', desc: 'El médico examina tu rodilla: dónde duele, cómo caminas y si se inflama.' },
  { img: '/gallery/pruebas-fisicas.jpeg', title: 'Pruebas Físicas', desc: 'Movimientos guiados para revisar rango de movimiento, estabilidad y dolor.' },
  { img: '/gallery/estudio-por-imagenes.jpeg', title: 'Estudios por Imágenes', desc: 'Radiografía, ecografía o resonancia (si es necesario) para ver desgaste o lesiones.' },
]

export const conditions: ImageCard[] = [
  { img: '/gallery/bursitis.jpeg', title: 'Bursitis', desc: 'Inflamación de las bursas, los "cojines" que reducen la fricción entre huesos, tendones y músculos.' },
  { img: '/gallery/lession-ligamento.jpeg', title: 'Lesión Ligamentaria', desc: 'Daño en los ligamentos que estabilizan tus articulaciones, común en esguinces de tobillo, rodilla y muñeca.' },
]

export const galleryPhotos: string[] = [
  '/gallery/slider/ejemplo-1.jpeg',
  '/gallery/slider/ejemplo-3.jpeg',
  '/gallery/slider/ejemplo-5.jpeg',
  '/gallery/slider/ejemplo-6.jpeg',
]

export interface Faq {
  q: string
  a: string
}

export const faqs: Faq[] = [
  { q: '¿El tratamiento con Plasma Rico en Plaquetas (PRP) es doloroso?', a: 'Es un procedimiento ambulatorio mínimamente invasivo. La mayoría de pacientes solo siente una molestia leve similar a una inyección común, y no requiere anestesia general ni reposo prolongado.' },
  { q: '¿Cuántas sesiones de terapia regenerativa necesito?', a: 'Depende del diagnóstico y grado de desgaste articular. En la evaluación inicial, el Dr. Zafra define un plan de tratamiento personalizado según tu caso específico.' },
  { q: '¿Qué diferencia hay entre PRP y ácido hialurónico?', a: 'El PRP usa tus propias plaquetas para estimular la regeneración de tejido, mientras que el ácido hialurónico actúa principalmente como lubricante articular. La mejor opción depende de tu diagnóstico y se define en consulta.' },
  { q: '¿El PRP tiene efectos secundarios importantes?', a: 'Al ser un preparado autólogo (elaborado con tu propia sangre), el riesgo de rechazo o reacción alérgica es prácticamente nulo, a diferencia de otros tratamientos con sustancias externas.' },
  { q: '¿Dónde queda el consultorio?', a: 'Atendemos en el consultorio de Barrio Huayco: Jr. Libertad 330, Tarapoto, previa cita programada por WhatsApp.' },
]
