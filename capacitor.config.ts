import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // This is your unique ID for the Play Store
  appId: 'com.justquitbro7.jailexai',
  
  // This is the name people see on their phone home screen
  appName: 'Jailex AI',

  // CRITICAL: This tells Capacitor to look inside your folder
  // where 'index.html' lives to find the HUD UI.
  webDir: 'app/src',

  // Setting this to false is standard for modern 2026 builds
  bundledWebRuntime: false
};

export default config;
