<template>
  <div class="w-full border-b border-gray-400 bg-gray-50 fixed">
    <div class="w-full md:w-5/6 h-auto m-auto">
      <div class="w-full flex justify-between">
        <!--main-Navbar-div-->
        <div class="py-2">
          <!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/">
            <h1 class="text-2xl font-extrabold px-2 md:px-0">BlogTag</h1>
          </nuxt-link>
        </div>
        <div class="w-2/5 hidden md:flex justify-end py-3">
          <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div class="mr-8">
            <ul class="flex">
              <li>
                <nuxt-link
                  to="/"
                  class="text-lg font-bold px-4 text-gray-700 hover:text-blue-700 hover:underline"
                >
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/Blog"
                  class="text-lg font-bold px-4 text-gray-700 hover:text-blue-700 hover:underline"
                >
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/News"
                  class="text-lg font-bold px-4 text-gray-700 hover:text-blue-700 hover:underline"
                >
                  News
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div>
            <!--Contact-button-Container-div-->
            <nuxt-link
              to="/contact"
              class="px-4 py-2 bg-purple-700 text-pink-50 hover:bg-green-800 rounded-full transition-colors duration-700 font-medium"
            >
              Contact
            </nuxt-link>
            <!--Contact-button-->
          </div>
        </div>
        <span class="md:hidden">
          <span @click="display"
            ><icon-menu
              width="25"
              height="25"
              icon-name="bars"
              class="mt-2.5 mr-2.5"
            ></icon-menu
          ></span>
        </span>
      </div>
      <!-- Navbar-Finish -->
      <div
        class="w-1/2 h-screen px-4 bg-blue-50 fixed -left-full transition-all duration-300 mt-px"
        :class="{ 'left-0': show }"
        @click="display"
      >
        <NuxtLink to="/" class="p-3 block font-bold border-b">Home</NuxtLink>
        <NuxtLink to="/Blog" class="p-3 block font-bold border-b"
          >Blog</NuxtLink
        >
        <NuxtLink to="/News" class="p-3 block font-bold border-b"
          >News</NuxtLink
        >
        <NuxtLink to="/contact" class="p-3 block font-bold border-b"
          >Contact</NuxtLink
        >
        <NuxtLink to="/icons" class="p-3 block font-bold border-b"
          >About us</NuxtLink
        >
        <NuxtLink to="/privacy" class="p-3 block font-bold border-b"
          >Privacy Policy</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import IconMenu from "~/components/icons/header/IconMenu";
export default {
  components: {
    IconMenu,
  },
  data() {
    return { show: false };
  },
  methods: {
    display() {
      this.show = !this.show;
    },
  },
};
</script>

<style>
</style>