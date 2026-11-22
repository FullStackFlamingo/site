<template>
  <header class="p-2">
    <div class="p-2">
      <div class="flex items-start justify-between">
        <NuxtLink
          class="text-xl"
          to="/"
          aria-label="Richard Phipps - link to homepage"
          >Richard Phipps</NuxtLink
        >
        <ClientOnly>
          <ButtonToggleColorMode />
        </ClientOnly>
      </div>
      <nav>
        <ul>
          <NuxtLink
            class="hover:decoration-0 underline decoration-teal-500 decoration-2"
            to="/experience"
            >Experience</NuxtLink
          >
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
