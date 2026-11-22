<template>
  <article class="text-center">
    <section class="min-h-[calc(100vh-120px)] h-fit">
      <h1>
        <span class="text-4xl">Richard Phipps</span><br />
        <span class="text-md">Senior Frontend Engineer</span>
      </h1>
      <ul class="flex justify-center p-4">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            :aria-label="link.ariaLabel"
            class="p-2 inline-block text-lg hover:text-teal-500"
          >
            <Icon :name="link.iconName" mode="svg" />
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-24">More stuff down here</section>
  </article>
</template>

<script setup lang="ts">
const links = [
  {
    href: 'https://www.linkedin.com/in/richard-phipps-b519993a/',
    ariaLabel: 'Link to my Linkedin profile',
    iconName: 'grommet-icons:linkedin',
  },
  {
    href: 'https://github.com/fullstackflamingo',
    ariaLabel: 'Link to my Github profile',
    iconName: 'grommet-icons:github',
  },
];
</script>
