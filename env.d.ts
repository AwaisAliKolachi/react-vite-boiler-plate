/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: 'default' | 'local' | 'staging' | 'production';
  readonly VITE_API_URL: string;
  readonly VITE_APP_TITLE: string;
  // Add more variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
