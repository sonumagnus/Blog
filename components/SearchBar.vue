<template>
  <transition name="modal">
    <div
      class="fixed z-20 top-0 left-0 w-full h-full bg-opacity-50 bg-black"
      @click="close"
      v-show="show"
    >
      <div
        class="pt-6 pr-6 pb-32 pl-6 bg-gray-50 w-full ml-1/5 mr-1/4 h-screen transition-all duration-300 ease-in-out modal-container"
        @click.stop
      >
      <AppSearchInput />
      </div>
    </div>
  </transition>
</template>

<script>
import AppSearchInput from "~/components/AppSearchInput";
export default {
  components: {
    AppSearchInput,
  },
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
.modal-enter .modal-container {
  transform: translate(-100%, 0);
}
</style>