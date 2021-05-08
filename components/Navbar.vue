<template>
  <div class="w-full bg-white border-b shadow-sm">
    <div class="w-full md:w-5/6 h-auto m-auto">
      <div class="w-full flex md:justify-between">
        <!--main-Navbar-div-->
        <div class="py-2">
          <!--Navbar-Left-Div{Contains: heading}-->
          <nuxt-link to="/">
            <h1 class="text-2xl font-extrabold px-2 text-black">BlogTag</h1>
          </nuxt-link>
        </div>
        <div class="w-2/5 hidden md:flex justify-end py-3">
          <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div class="mr-8">
            <ul class="flex">
              <li>
                <nuxt-link
                  to="/"
                  class="text-lg font-bold px-4 text-white hover:text-blue-700 hover:underline"
                >
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/Blog"
                  class="text-lg font-bold px-4 text-white hover:text-blue-700 hover:underline"
                >
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/News"
                  class="text-lg font-bold px-4 text-white hover:text-blue-700 hover:underline"
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
              width="22"
              height="22"
              icon-name="bars"
              class="mt-3 absolute right-3 text-gray-600"
              v-show="!show"
            ></icon-menu>
            <icon-close
              width="26"
              height="26"
              icon-name="times"
              class="mt-2.5 absolute right-2.5 text-gray-600"
              v-show="show"
            ></icon-close
          ></span>
        </span>
      </div>
      <!-- Navbar-Finish -->
      <!-- sliding-menubar-logic-built -->
      <div
        class="h-screen top-0 bottom-0 left-0 right-0 fixed bg-gray-900 bg-opacity-50 z-40"
        :class="{ block: show, hidden: !show }"
        @click="display"
      ></div>
      <div
        class="w-64 h-screen px-4 bg-gray-100 fixed transition-all duration-300 text-lg text-gray-800 z-50 top-0 left-0 pl-6 overflow-hidden"
        :class="{ 'left-0': show, '-left-full': !show }"
        @click="display"
      >
        <div class="text-2xl mx-2 my-4 flex justify-between">
          <p class="font-semibold text-gray-800">BlogTag</p>
          <!-- three-line-hamburger-menu-icon -->
        </div>
        <!-- sliding-munubar-links-below -->
        <div>
          <nuxt-link to="/" class="p-3 block font-bold mt-8">Home</nuxt-link>
          <nuxt-link to="/Blog" class="p-3 block font-bold">Blog</nuxt-link>
          <nuxt-link to="/News" class="p-3 block font-bold">News</nuxt-link>
          <nuxt-link to="/contact" class="p-3 block font-bold"
            >Contact</nuxt-link
          >
          <nuxt-link to="/icons" class="p-3 block font-bold"
            >About us</nuxt-link
          >
          <nuxt-link to="/privacy" class="p-3 block font-bold"
            >Privacy Policy</nuxt-link
          >
        </div>
        <!-- Bottom-social-icons-div-in navbar -->
        <div class="flex text-gray-800 fixed bottom-2 pl-4">
          <nuxt-link to="#">
            <icon-facebook
              width="17"
              height="17"
              icon-name="facebook"
              class="m-3"
            >
            </icon-facebook>
          </nuxt-link>
          <nuxt-link to="#">
            <icon-insta
              width="17"
              height="17"
              icon-name="instagram"
              class="m-3"
            ></icon-insta>
          </nuxt-link>
          <nuxt-link to="#">
            <icon-envelope
              width="17"
              height="17"
              icon-name="Envelope"
              class="m-3"
            ></icon-envelope>
          </nuxt-link>
          <nuxt-link to="#">
            <icon-twitter
              width="17"
              height="17"
              icon-name="twitter"
              class="m-3"
            ></icon-twitter>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconMenu from "~/components/icons/header/IconMenu";
import IconClose from "~/components/icons/ui/IconClose";
import IconFacebook from "~/components/icons/contact/IconFacebook";
import IconInsta from "~/components/icons/contact/IconInsta";
import IconEnvelope from "~/components/icons/contact/IconEnvelope";
import IconTwitter from "~/components/icons/contact/IconTwitter";
export default {
  components: {
    IconMenu,
    IconClose,
    IconFacebook,
    IconInsta,
    IconEnvelope,
    IconTwitter,
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