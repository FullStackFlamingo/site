import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon/module'],
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  fonts: {
    families: [
      // https://fontsource.org/fonts/fraunces?view=compare
      // https://fontsource.org/fonts/figtree?view=compare
      // https://fontsource.org/fonts/fira-code?view=paragraph
      { name: 'Geist Mono Variable', provider: 'npm' },
      { name: 'Geist Variable', provider: 'npm' },
    ],
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-white dark:bg-site-blue text-black dark:text-white',
      },
      script: [
        // gross script, but we must read the color-scheme before anything else, to prevent FOUC!
        {
          innerHTML: `
// theme was manually set, lets use that
if(['dark','light'].includes(localStorage['vueuse-color-scheme'])) {
  const shouldApplyDark = localStorage['vueuse-color-scheme'] === 'dark';
  document.documentElement.classList.toggle('dark', shouldApplyDark);
} else {
  // apply class based on prefers-color-scheme
  document.documentElement.classList.toggle('dark', window.matchMedia("(prefers-color-scheme: dark)").matches);
}
`,
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    build: {
      outDir: 'docs',
    },
    plugins: [tailwindcss()],
  },
});
