import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app-overflow',
  webDir: 'www',
  android: {
    // Garantir que o conteúdo não fique atrás das barras do sistema
    backgroundColor: '#0c0f3f'
  },
  plugins: {
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#0c0f3f'
    }
  }
};

export default config;
