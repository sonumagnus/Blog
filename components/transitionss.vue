<template>
  <div class="m-20 h-20">
    <button
      @click="show = !show"
      class="
        px-6
        py-3
        bg-green-600
        rounded-md
        text-white
        shadow-md
        focus:outline-none
        focus:ring-2
        ring-red-500
      "
    >
      Click Me
    </button>

    <transition name="modal-test">
      <div v-show="show" class="bg-gray-200 p-4">
        <p v-if="show" class="py-4 modal-container bg-red-300">
          Hello Dear Friends
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return { show: true };
  },
};
</script>

<style scoped>
.modal-test-enter-active,
.modal-test-leave-active {
  transition: all 1s ease;
}
.modal-test-enter-active .modal-container,
.modal-vleave-active .modal-container {
  transition: all 1s ease;
}
.modal-test-enter,
.modal-test-leave-to {
  opacity: 0;
  transform: translateX(2rem);
  color: blue;
}
.modal-test-enter .modal-container,
.modal-test-leave-to .modal-container {
  opacity: 0;
  transform: translateX(1rem);
  color: blue;
}
</style>