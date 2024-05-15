<template>
  <header>
    <section
      :class="{ 'bg-teal-400': show, '': !show }"
      class="px-6 w-full text-black animate__animated py-3.5 z-50 fixed m-0 p-0 top-0 flex animate__animated md:flex justify-between items-center align-middle"
    >
      <nav class="container mx-auto">
        <div class="flex items-center justify-between">
          <div class="text-white font-bold text-xl">
            <router-link to="/">
              <Transition name="animate" class="" appear>
                <logo
                  class="text-2xl items-center animate__backInDown flex cursor-pointer"
                >
                  <span class="text-blue-700">RICH</span>
                  <span class="text-green-500">TECH</span>
                  <span class="text-yellow-500">365°</span>
                </logo>
              </Transition>
            </router-link>
          </div>
          <div class="hidden md:block">
            <ul class="flex items-center space-x-8">
              <li><a href="/" class="text-white">🏠Home</a></li>
              <li><a href="/Blogs" class="text-white">👨🏻‍💻Blogs</a></li>
              <li><a href="/Portfolio" class="text-white">📝Portfolio</a></li>
              <li><a href="/Service" class="text-white">💡Service</a></li>
              <li><a href="/ContactUs" class="text-white">📩Contact Us</a></li>
            </ul>
          </div>
          <div class="md:hidden">
            <button @click="toggleMenu" class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-white"
                :class="{ 'transform rotate-180': showMenu }"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          v-show="showMenu"
          class="mobile-menu absolute bg-gray-900 mt-4 p-4 md:hidden"
        >
          <ul class="space-y-4">
            <li><a href="/" class="text-white">🏠Home</a></li>
            <li><a href="/Blogs" class="text-white">👨🏻‍💻Blogs</a></li>
            <li><a href="/Portfolio" class="text-white">📝Portfolio</a></li>
            <li><a href="/Service" class="text-white">💡Service</a></li>
            <li><a href="/ContactUs" class="text-white">📩Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </section>
  </header>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  components: {},
  setup() {
    let show = ref(false);
    let showMenu = ref(false);

    return { show, showMenu };
  },
  mounted() {
    window.addEventListener("scroll", this.transitionBackground);
  },
  destroyed() {
    window.removeEventListener("scroll", this.transitionBackground);
  },
  methods: {
    transitionBackground() {
      if (window.scrollY > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.animate-enter-from,
.animate-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.animate-enter-active,
.animate-leave-active {
  transform: all 5s ease-in-out;
}
</style>
