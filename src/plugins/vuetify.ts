import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'zafraTheme',
    themes: {
      zafraTheme: {
        dark: false,
        colors: {
          primary: '#0D47A1',
          'primary-light': '#E3F0FD',
          secondary: '#00B0FF',
          'secondary-light': '#E0F7FA',
          accent: '#00E676',
          background: '#FAFBFD',
          surface: '#FFFFFF',
          info: '#0288D1',
          success: '#2E7D32',
          warning: '#F57C00',
          error: '#D32F2F',
        },
      },
    },
  },
})
