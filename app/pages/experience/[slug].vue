<template>
  <article>
    <ContentRenderer v-if="pageData" :value="pageData" />
  </article>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: pageData } = await useAsyncData(route.path, () => {
  return queryCollection('experience').path(route.path).first();
});
</script>
