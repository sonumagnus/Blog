<template>
  <div class="w-full bg-white border-b shadow-sm">
    <div class="w-full md:w-5/6 h-auto m-auto px-3">
      <div class="w-full flex md:justify-between">
        <!--main-Navbar-div-->
        <div class="py-2">
          <!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/">
            <h1 class="text-2xl font-extrabold px-2 text-black">BlogTag</h1>
          </nuxt-link>
        </div>
        <div></div>
        <div class="w-2/5 hidden md:flex justify-end py-3">
          <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div class="mr-8">
            <ul class="flex">
              <li>
                <nuxt-link
                  to="/"
                  class="text-lg font-bold px-4 text-gray-900 hover:text-blue-700 hover:underline"
                >
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/Blog"
                  class="text-lg font-bold px-4 text-gray-900 hover:text-blue-700 hover:underline"
                >
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/News"
                  class="text-lg font-bold px-4 text-gray-900 hover:text-blue-700 hover:underline"
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
              class="px-4 py-2 bg-green-700 text-pink-50 hover:bg-green-800 rounded-full transition-colors duration-700 font-medium"
            >
              Contact
            </nuxt-link>
            <!--Contact-button-->
          </div>
        </div>
        <span class="md:hidden flex">
          <span @click="searchbox">
            <icon-search
              width="18"
              height="18"
              icon-name="search"
              class="mt-3.5 absolute right-12 text-gray-600"
            ></icon-search>
          </span>
          <span @click="menu = true">
            <icon-menu
              width="22"
              height="22"
              IconName="bars"
              class="mt-3 absolute right-3 text-gray-600"
            ></icon-menu>
          </span>
        </span>
      </div>
      <menu-bar :show="menu" @close="menu = false"></menu-bar>
    </div>
  </div>
</template>

<script>
import IconSearch from "~/components/icons/header/IconSearch";
import IconMenu from "~/components/icons/header/IconMenu";
export default {
  components: {
    IconMenu,
    IconSearch,
  },
  props: ["show"],
  data() {
    return { menu: false, search: false };
  },
  methods: {
    display() {
      this.show = !this.show;
    },
    searchbox() {
      this.search = !this.search;
    },
    close: function () {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>