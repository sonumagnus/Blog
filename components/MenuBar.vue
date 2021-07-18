<template>
  <transition name="modal">
    <div
      class="fixed z-20 inset-0 w-full h-full bg-opacity-50 bg-black"
      @click="close"
      v-show="show"
    >
      <div
        class="
          px-10
          bg-gray-100
          w-2/3
          h-screen
          modal-container
          text-lg
          font-semibold
          space-y-6
          flex flex-col
          text-gray-800
        "
        @click.stop
      >
        <p class="text-2xl mt-2 mb-5 text-gray-500">BlogTag</p>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/Blog">Blog</nuxt-link>
        <nuxt-link to="/News">News</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
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
.modal-enter-active,
.modal-leave-active,
.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all 0.3s ease;
}
.modal-enter .modal-container,
.modal-leave-to .modal-container {
  transform: translate(-100%, 0);
}
</style>