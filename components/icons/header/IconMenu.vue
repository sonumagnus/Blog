<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    aria-hidden="true"
    focusable="false"
    data-prefix="fad"
    data-icon="bars"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    data-fa-i2svg=""
  >
    <g class="fa-group">
      <path
        class="opacity-50"
        fill="currentColor"
        d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"
      ></path>
      <path
        class="text-green-500"
        fill="currentColor"
        d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style>
</style>