<script setup lang="ts">
import { FunctionalComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import {
  CircleParking,
  TicketCheck,
  FileBarChart2,
  Settings,
  LayoutDashboard,
} from "lucide-vue-next";

interface MenuItem {
  label: string;
  to: string;
  icon?: FunctionalComponent; // <- tipo para los íconos Lucide
}

interface MenuSection {
  label: string;
  items: MenuItem[];
}

const model = ref<MenuSection[]>([
  {
    label: "Inicio",
    items: [
      { label: "Dashboard", to: "/", icon: LayoutDashboard },
      { label: "Gestión de Tickets", to: "/tickets", icon: TicketCheck },
    ],
  },
  {
    label: "Otros Servicios",
    items: [
      { label: "Reportes", to: "/reports", icon: FileBarChart2 },
      { label: "Configuración", to: "/config", icon: Settings },
    ],
  },
]);
</script>

<template>
  <!-- Sidebar -->
  <div
    id="hs-application-sidebar"
    class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-65 h-full hidden fixed inset-y-0 start-0 z-60 bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
    role="dialog"
    tabindex="-1"
    aria-label="Sidebar"
  >
    <div class="relative flex flex-col h-full max-h-full">
      <!-- Logo Section -->
      <div class="border-b px-6 py-3 border-gray-200 dark:border-neutral-700">
        <div class="flex items-center gap-2 text-gray-900 dark:text-white">
          <CircleParking class="size-8" />
          <span class="text-xl font-bold"> Estacionamiento </span>
        </div>
      </div>

      <!-- Navigation -->
      <div class="h-full overflow-y-auto px-3 py-4">
        <nav class="w-full">
          <template v-for="section in model" :key="section.label">
            <!-- Section Header -->
            <p
              class="px-2 py-2 mt-4 mb-1 text-xs text-black uppercase dark:text-gray-400"
            >
              {{ section.label }}
            </p>

            <ul class="space-y-1">
              <li v-for="item in section.items" :key="item.label">
                <RouterLink
                  :to="item.to"
                  class="flex items-center gap-x-3 py-2 px-4 text-sm text-black rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <!-- Icono dinámico -->
                  <component
                    :is="item.icon"
                    class="size-5 text-gray-800 font-light dark:text-gray-200"
                    v-if="item.icon"
                  />
                  <span>{{ item.label }}</span>
                </RouterLink>
              </li>
            </ul>
          </template>
        </nav>
      </div>
    </div>
  </div>
  <!-- End Sidebar -->
</template>
