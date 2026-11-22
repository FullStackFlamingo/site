<template>
  <button
    @click="toggleColorMode"
    class="border border-current rounded-full p-1 leading-none cursor-pointer"
  >
    <Icon :name="iconName" mode="svg" />
    <span class="sr-only">
      Toggle theme button, current theme: {{ mode }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode({
  selector: 'html',
  attribute: 'class',
  storageKey: 'vueuse-color-scheme',
});

const iconName = computed(() =>
  mode.value === 'light' ? 'grommet-icons:sun' : 'grommet-icons:moon',
);
function toggleColorMode() {
  mode.value = mode.value === 'dark' ? 'light' : 'dark';
}
</script>
