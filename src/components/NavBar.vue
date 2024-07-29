<template>
  <nav id="navigation">
    <ul>
      <li class="nav-item" v-for="(page, i) in pages" :key="i">
        <router-link :to="getPageURL(page)" @click="selectPage(page)">{{ page }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const pages = ["Home", "Community", "Docs", "API"];
const selectedPage = ref("Home");

function selectPage(page: string): void {
  selectedPage.value = page;
}

function getPageURL(page: string): string {
  if (page === "Home")
    return "/";

  return `/${page.toLowerCase()}`
}

function includes<T>(arr: T[], value: T): boolean {
  for (const v of arr)
    if (v === value)
      return true;

  return false;
}

// Handle initial page selection based on URL
onMounted(() => {
  const currentPage = window.location.hash.slice(1).toLowerCase();
  if (includes(pages, currentPage))
    selectedPage.value = currentPage;
});

// Listen for hash changes and update page selection accordingly
window.addEventListener("hashchange", () => {
  const currentPage = window.location.hash.slice(1).toLowerCase();
  if (includes(pages, currentPage))
    selectedPage.value = currentPage;
});
</script>