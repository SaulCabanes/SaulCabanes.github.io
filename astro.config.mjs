// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  // IMPORTANTE: Si tu repositorio se llama exactamente "SaulCabanes.github.io", deja base en '/'
  // Si tu repositorio tiene otro nombre (ej. "mi-web"), pon base: '/mi-web'
  site: 'https://SaulCabanes.github.io',
  base: '/', 
  
  integrations: [react(), markdoc(), keystatic()],
  
  output: 'static', // Forzamos el modo estático para GitHub
  
  vite: {
    plugins: [tailwindcss()],
  },
});
