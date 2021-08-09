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
          bg-[#212121]
          w-3/5
          max-w-xs
          h-screen
          modal-container
          text-lg
          font-semibold
          space-y-6
          flex flex-col
          text-gray-100
        "
        @click.stop
      >
        <p class="text-2xl mt-2 mb-5 text-gray-100">BlogTag</p>
        <nuxt-link v-for="item in list" :key="item.title" :to="item.to">{{
          item.title
        }}</nuxt-link>
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
      list: [
        { title: "Home", to: "/" },
        { title: "Blog", to: "/blog" },
        { title: "News", to: "/news" },
        { title: "Contact", to: "/contact" },
        { title: "Privacy", to: "/privacy" },
      ],
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
  transition: all 0.2s ease-in-out;
}
.modal-enter .modal-container,
.modal-leave-to .modal-container {
  transform: translate(-100%, 0);
}
</style>