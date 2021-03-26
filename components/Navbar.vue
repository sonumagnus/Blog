<template>
  <div class="w-full shadow bg-gray-100 relative z-10">
    <div class="w-full md:w-5/6 h-auto m-auto">
      <div class="w-full flex justify-between"><!--main-Navbar-div-->
        <div class="px-4 py-2"><!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/">
          <h1 class="text-2xl font-extrabold">BlogTag</h1>
          </nuxt-link>
        </div>
        <div class="w-2/5 hidden md:flex justify-between px-3 py-3">  <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div>
            <ul class="flex">
              <li>
               <nuxt-link to="/" class="text-lg font-bold px-4 text-gray-700 hover:text-blue-700 hover:underline">
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/Blog" class="text-lg font-bold px-4 text-gray-700 hover:text-blue-700 hover:underline">
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/News" class="text-lg font-bold px-4 text-gray-700 hover:text-blue-700 hover:underline">
                  News
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div> <!--Contact-button-Container-div-->
            <nuxt-link to="/contact" class="px-4 py-2 bg-purple-800 text-pink-50 hover:bg-purple-600 rounded">
              Contact
            </nuxt-link> <!--Contact-button-->
          </div>
        </div>
        <span class=" md:hidden">
          <icon-menu width="26" height="26" icon-name="bars" class="m-3"></icon-menu>
        </span>
      </div>
      <!-- Navbar-Finish -->
    </div>
  </div>
</template>

<script>
import IconMenu from "~/components/icons/header/IconMenu"
export default {
  components: {
    IconMenu,
  }
};
</script>

<style>
</style>