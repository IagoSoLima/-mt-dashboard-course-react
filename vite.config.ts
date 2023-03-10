import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'
import { APP_HOST_URL, APP_PORT } from './src/app.vars'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: APP_HOST_URL,
    port: APP_PORT
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }]
  }
})
