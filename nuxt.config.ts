export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
      meta: [
        { name: "description", content: "Persönliche Seite von Roland Deleau" },
      ],
    },
  },
  modules: ["@nuxt/content"],
  buildModules: ["@nuxt/typescript-build"],
  content: {
    documentDriven: true,
  },
});
