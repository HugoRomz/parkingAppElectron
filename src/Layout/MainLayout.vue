<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import Sidebar from "@components/Sidebar.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#141314]">
    <Navbar />
    <Sidebar />
    <main class="w-full lg:ps-64">
      <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
        <router-view />
      </div>
    </main>
  </div>
</template>
