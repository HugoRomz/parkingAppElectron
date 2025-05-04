<script setup lang="ts">
import ThemeToggle from "@components/ThemeToggle.vue";
import { Bell, CircleUser, LogOut, Info } from "lucide-vue-next";

function logout(e: Event) {
  e.preventDefault();
  // Se asume que en preload.mjs se expone window.ipcRenderer
  if (window.ipcRenderer) {
    window.ipcRenderer.send("logout");
  }
}
</script>

<template>
  <!-- ========== HEADER ========== -->
  <header
    class="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-[9px] lg:ps-65 dark:bg-neutral-800 dark:border-neutral-700"
  >
    <nav class="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
      <div
        class="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3"
      >
        <div class="hidden md:block"></div>

        <div class="flex flex-row items-center justify-end gap-1">
          <ThemeToggle />
          <button
            type="button"
            class="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer"
          >
            <Bell class="size-5" />
            <span class="sr-only">Notifications</span>
          </button>

          <!-- Dropdown -->
          <div
            class="hs-dropdown [--placement:bottom-right] relative inline-flex"
          >
            <button
              id="hs-dropdown-account"
              type="button"
              class="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <CircleUser class="size-6" />
            </button>

            <div
              class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-dropdown-account"
            >
              <div
                class="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-neutral-700"
              >
                <p class="text-sm text-gray-500 dark:text-neutral-500">
                  Sesión Iniciada
                </p>
                <p
                  class="text-sm font-medium text-gray-800 dark:text-neutral-200"
                >
                  estacionamiento@park.com
                </p>
              </div>
              <div class="p-1.5 space-y-0.5">
                <a
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                  href="#"
                >
                  <Info class="size-5" />
                  About
                </a>

                <!-- Exit -->
                <a
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                  href="#"
                  @click="logout"
                >
                  <LogOut class="size-5" />
                  Salir
                </a>
              </div>
            </div>
          </div>
          <!-- End Dropdown -->
        </div>
      </div>
    </nav>
  </header>
  <!-- ========== END HEADER ========== -->
</template>
