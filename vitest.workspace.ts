import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'vite.config.ts',
  {
    extends: 'vite.config.ts',
    test: {
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
      },
    },
  },
])
