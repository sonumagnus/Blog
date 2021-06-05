<template>
  <div class="w-full bg-white border-b shadow-sm">
    <div class="w-full md:w-11/12 h-auto m-auto px-6">
      <div class="w-full flex md:justify-between">
        <!--main-Navbar-div-->
        <div class="py-2">
          <!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/">
            <h1 class="text-2xl font-semibold">BlogTag</h1>
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
                  class="text-lg font-medium px-4 text-gray-900 hover:text-blue-700 py-3.5 btn"
                >
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/Blog"
                  class="text-lg font-medium px-4 text-gray-900 hover:text-blue-700 py-3.5 btn"
                >
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/News"
                  class="text-lg font-medium px-4 text-gray-900 hover:text-blue-700 py-3.5 btn"
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
          <span>
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
              class="top-3 absolute right-3 text-gray-600"
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
  data() {
    return { menu: false };
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
  @apply absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition duration-300 ease-in;
}
.btn:hover::after {
  content: "";
  transform: scale(1, 1);
  @apply absolute left-0 bottom-0 w-full h-0.5 bg-blue-600;
}
</style>