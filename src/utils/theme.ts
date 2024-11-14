import type { PrimeVueConfiguration } from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

import {
  pg_colors,
  // pg_fonts,
  // pg_backgrounds,
} from '../../themes/pg-primevue/tokens.mjs'

// Customize light and dark themes
// https://primevue.org/theming/styled/
const myPreset: PrimeVueConfiguration = definePreset(Aura, {
  darkModeSelector: '.dark',
  semantic: {
    primary: pg_colors.primary,
    secondary: pg_colors.secondary,
    tertiary: pg_colors.tertiary,
    success: pg_colors.success,
    warning: pg_colors.warning,
    error: pg_colors.error,
    info: pg_colors.info,
    neutral: pg_colors.neutral,
    background: '#ffffff',
    surface: pg_colors.neutral,
    colorScheme: {
      light: {
        primary: {
          color: pg_colors.primary['950'],
          inverseColor: '#ffffff',
          hoverColor: pg_colors.primary['900'],
          activeColor: pg_colors.primary['800'],
        },
      },

      dark: {
        primary: {
          color: pg_colors.primary['50'],
          inverseColor: pg_colors.primary['950'],
          hoverColor: pg_colors.primary['100'],
          activeColor: pg_colors.primary['200'],
        },
      },
    },
    focusRing: {
      width: '2px',
      style: 'dashed',
      color: '{primary.color}',
      offset: '1px',
    },
  },
})

export { myPreset }
