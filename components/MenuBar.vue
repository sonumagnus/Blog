<template>
  <transition name="modal">
    <div
      class="fixed z-20 top-0 left-0 w-full h-full transition-all duration-500 ease-in-out bg-opacity-50 bg-black"
      @click="close"
      v-show="show"
    >
        <div class="pt-6 pr-6 pb-32 pl-6 bg-gray-50 w-2/3 ml-1/5 mr-1/4 h-screen transition-all ease-in-out duration-500" @click.stop>
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
      </div>
  </transition>
</template>

<script>
export default {
  props: ["show"],
  data() {
    return {
      data: [],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>


<style>
/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/

.modal-enter .modal-container {
  transform: translate(-100%, 0);
}
</style>