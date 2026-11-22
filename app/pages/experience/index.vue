<template>
  <article>
    <NuxtLink v-for="item in allPages" :to="item.path">
      {{ item.title }}
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: allPages } = await useAsyncData(route.path, () => {
  return queryCollection('experience').all();
});
</script>
