<template>
  <div class="w-full border-b border-gray-400 bg-gray-50 fixed z-50">
    <div class="w-full md:w-5/6 h-auto m-auto">
      <div class="w-full flex justify-between">
        <!--main-Navbar-div-->
        <div class="px-4 py-2">
          <!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/">
            <h1 class="text-2xl font-extrabold">BlogTag</h1>
          </nuxt-link>
        </div>
        <div class="w-2/5 hidden md:flex justify-between px-3 py-3">
          <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div>
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
              class="px-4 py-2 bg-purple-800 text-pink-50 hover:bg-purple-600 rounded"
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
        class="w-screen px-4 bg-blue-50"
        :class="{ hidden: show }"
        @click="display"
      >
        <NuxtLink to="/" class="p-2 block font-bold border-b" @click="display()"
          >Home</NuxtLink
        >
        <NuxtLink to="/Blog" class="p-2 block font-bold border-b"
          >Blog</NuxtLink
        >
        <NuxtLink to="/News" class="p-2 block font-bold border-b"
          >News</NuxtLink
        >
        <NuxtLink to="/contact" class="p-2 block font-bold border-b"
          >Contact</NuxtLink
        >
        <NuxtLink to="/" class="p-2 block font-bold border-b"
          >About us</NuxtLink
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
    return { show: true };
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