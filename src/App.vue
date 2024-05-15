<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import HomePageVue from "./views/HomePage.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div>
    <NavBar />
    <RouterView />
    <Footer></Footer>
  </div>
</template>
