<template>
  <div class="font-sans antialiased shadow-md flex justify-center">
    <nav class="flex items-center justify-between flex-wrap bg-teal px-6 max-w-6xl mx-auto">
      <div class="flex items-center flex-no-shrink text-black mr-6">
        <img src="@/assets/logo.png" />
      </div>
      <div class="block sm:hidden">
        <button
          @click="toggleNavbar"
          class="flex items-center px-3 py-2 rounded text-black hover:text-black"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="showMenu ? 'block' : 'hidden'"
        class="w-full flex-grow justify-items-end sm:flex sm:items-center sm:w-auto"
      >
        <div class="lg:flex lg:justify-end text-sm sm:flex-grow">
          <router-link
            to="/"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black px-4 font-semibold"
          >
            Home
          </router-link>
          <router-link
            to="/sucursales"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black px-4 font-semibold"
          >
            Sucursales
          </router-link>
        </div>
        <div v-if="!loggedIn">
          <router-link
            to="/login"
            class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black px-4 font-semibold"
          >
            Login
          </router-link>
        </div>
        <div
          v-else
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-black hover:text-black px-4 font-semibold"
        >
          {{ username }}
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const loggedIn = computed(() => store.getters.loggedIn)
const username = computed(() => store.state.user.username)
const showMenu = ref(false)
const toggleNavbar = () => {
  showMenu.value = !showMenu.value
}
</script>
