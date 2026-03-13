import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import path from 'path';
import UnoCSS from 'unocss/vite';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    TurboConsole({
      disableLaunchEditor: true
    }),
    VitePluginSvgSpritemap('**/icons/*.svg', {
      prefix: 'icon-',
    }),
    // Descomente esta línea si necesita visualizar el OVA en su dispositivo móvil. 👇
    // basicSsl()
  ],
  base: './',
  build: {
    target: 'ES2022',
    outDir: 'dist/',
    assetsDir: './'
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@shared': `${path.resolve(__dirname, 'src/shared')}/`,
      '@activities': `${path.resolve(__dirname, 'src/shared/components/activities')}/`,
      '@features': `${path.resolve(__dirname, 'src/shared/components/features')}/`,
      '@games': `${path.resolve(__dirname, 'src/shared/components/games')}/`,
      '@layouts': `${path.resolve(__dirname, 'src/shared/components/layouts')}`,
      '@ui': `${path.resolve(__dirname, 'src/shared/components/ui')}`,
      '@pages': `${path.resolve(__dirname, 'src/pages')}/`,
      '@router': `${path.resolve(__dirname, 'src/router')}/`,
      '@styles': `${path.resolve(__dirname, `src/styles`)}/`
    }
  },
  server: {
    host: true
  }
});
