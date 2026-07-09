import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'zafraTheme',
    themes: {
      zafraTheme: {
        dark: false,
        colors: {
          primary: '#094F2A',
          'primary-light': '#E3EFE8',
          secondary: '#7A2E43',
          'secondary-light': '#F3E7EA',
          accent: '#0E7C66',
          background: '#FBF9F5',
          surface: '#FFFFFF',
          info: '#0E7C66',
          success: '#2E7D32',
          warning: '#B36B2A',
          error: '#D32F2F',
        },
      },
    },
  },
})
