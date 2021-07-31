<template>
  <div class="w-full bg-white border-b shadow-sm h-12 md:h-[3.2rem] sticky top-0 z-50">
    <div class="w-full md:w-11/12 h-auto m-auto px-6">
      <div class="w-full flex justify-center md:justify-between">
        <!--main-Navbar-div-->
        <div class="py-2 text-2xl font-semibold">
          <!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/"> 𝓑𝓵𝓸𝓰𝓣𝓪𝓰 </nuxt-link>
        </div>
        <div class="w-2/5 hidden md:flex justify-end py-3">
          <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div v-for="item in list" :key="item.title" class="mr-8">
            <nuxt-link
              :to="item.to"
              class="
                text-lg
                font-medium
                px-0.5
                text-gray-900
                hover:text-blue-700
                py-3.5
                btn
              "
              >{{ item.title }}</nuxt-link
            >
          </div>
          <div @click="showsearchbar = !showsearchbar">
            <!--search-button-Container-div-->
            <span
              class="
                px-4
                py-1.5
                ring-2 ring-gray-300 hover:ring-blue-300 bg-[#00FFFF]
                text-lg text-gray-600
                hover:bg-blue-500
                hover:text-gray-100
                transition-colors
                duration-500
                rounded-full
                font-medium cursor-pointer
              "
            >
              Search
            </span>
            <!--Contact-button-->
          </div>
        </div>
        <span class="md:hidden flex">
          <span @click="showsearchbar = !showsearchbar">
            <icon-search
              width="18"
              height="18"
              icon-name="search"
              class="mt-3.5 absolute right-4 text-gray-600"
            ></icon-search>
          </span>
          <span @click="menu = true">
            <icon-menu
              width="22"
              height="22"
              IconName="bars"
              class="top-3.5 absolute left-4 text-gray-600 transform rotate-180"
            ></icon-menu>
          </span>
        </span>
      </div>
      <menu-bar :show="menu" @close="menu = false"></menu-bar>
      <app-search-input
        :show="showsearchbar"
        @disable="showsearchbar = false"
      />
    </div>
  </div>
</template>

<script>
import IconSearch from "~/components/icons/header/IconSearch";
import IconMenu from "~/components/icons/header/IconMenu";
import AppSearchInput from "./AppSearchInput.vue";
export default {
  components: {
    IconMenu,
    IconSearch,
    AppSearchInput,
  },
  data() {
    return {
      menu: false,
      showsearchbar: false,
      list: [
        { title: "Home", to: "/" },
        { title: "Blog", to: "/blog" },
        { title: "News", to: "/news" },
      ],
    };
  },
};
</script>

<style>
.btn {
  position: relative;
}
.btn::after {
  content: "";
  transform: scale(0, 1);
  @apply absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition duration-300 ease-in-out;
}
.btn:hover::after {
  content: "";
  transform: scale(1, 1);
  @apply absolute left-0 bottom-0 w-full h-0.5 bg-blue-600;
}
</style>