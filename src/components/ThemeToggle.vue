<template>
  <div class="hs-dropdown">
    <button
      id="hs-dropdown-dark-mode"
      type="button"
      class="hs-dropdown-toggle hs-dark-mode group flex items-center size-9.5 relative justify-center rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
    >
      <Moon class="hs-dark-mode-active:hidden block size-5" />
      <Sun class="hs-dark-mode-active:block hidden size-5" />
    </button>

    <div
      id="selectThemeDropdown"
      class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-1 space-y-0.5 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-dropdown-dark-mode"
    >
      <button
        type="button"
        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
        data-hs-theme-click-value="default"
      >
        Default (Light)
      </button>
      <button
        type="button"
        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
        data-hs-theme-click-value="dark"
      >
        Dark
      </button>
      <button
        type="button"
        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
        data-hs-theme-click-value="auto"
      >
        Auto (System)
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Moon, Sun } from "lucide-vue-next";

const isDarkMode = ref(false);
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const applyThemeLogic = () => {
  const html = document.documentElement;
  const theme = localStorage.getItem("hs_theme") || "auto";

  const isLightOrAuto =
    theme === "light" || (theme === "auto" && !systemThemeQuery.matches);
  const isDarkOrAuto =
    theme === "dark" || (theme === "auto" && systemThemeQuery.matches);

  isDarkMode.value = isDarkOrAuto;

  if (isLightOrAuto && html.classList.contains("dark"))
    html.classList.remove("dark");
  else if (isDarkOrAuto && html.classList.contains("light"))
    html.classList.remove("light");
  else if (isDarkOrAuto && !html.classList.contains("dark"))
    html.classList.add("dark");
  else if (isLightOrAuto && !html.classList.contains("light"))
    html.classList.add("light");
};

const handleSystemChange = () => {
  if (localStorage.getItem("hs_theme") === "auto") {
    applyThemeLogic();
  }
};

// Inicialización inicial (debe ir en el head en producción)
onMounted(() => {
  applyThemeLogic();
  systemThemeQuery.addEventListener("change", handleSystemChange);
});

onBeforeUnmount(() => {
  systemThemeQuery.removeEventListener("change", handleSystemChange);
});
</script>
