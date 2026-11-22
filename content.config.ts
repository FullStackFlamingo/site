import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
    }),
  },
});
