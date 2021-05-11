<template>
  <div>
    <nuxt-link to="/blog">
      <button
        class="px-1.5 mx-2 py-1 mt-2 bg-gray-200 rounded-lg font-semibold focus:outline-none"
        @click="displayall"
        :class="{
          [`bg-blue-800 text-white`]: showone,
          'bg-gray-200': !showone,
        }"
      >
        #All Blogs
      </button></nuxt-link
    >
    <nuxt-link to="/blog/tag/smartphone">
      <button
        class="px-1.5 mx-2 py-1 mt-2 bg-gray-200 rounded-lg font-semibold focus:outline-none"
        @click="displaygadgets"
        :class="{
          [`bg-blue-800 text-white`]: showtwo,
          'bg-gray-200': !showtwo,
        }"
      >
        #Gadgets
      </button></nuxt-link
    >
    <nuxt-link to="/blog/tag/technology">
      <button
        class="px-1.5 mx-2 py-1 mt-2 rounded-lg font-semibold focus:outline-none"
        @click="displayphone"
        :class="{
          [`bg-blue-800 text-white`]: showthree,
          'bg-gray-200': !showthree,
        }"
      >
        #Phone
      </button></nuxt-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return { showone: true, showtwo: false, showthree: false };
  },
  methods: {
    displayall() {
      (this.showone = true), (this.showtwo = false), (this.showthree = false);
    },
    displaygadgets() {
      (this.showone = false), (this.showtwo = true), (this.showthree = false);
    },
    displayphone() {
      (this.showone = false), (this.showtwo = false), (this.showthree = true);
    },
  },
};
</script>

<style>
</style>