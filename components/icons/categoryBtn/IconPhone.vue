<template>
  <svg
    :width="width"
    :height="height"
    :aria-labelledby="iconName"
    aria-hidden="true"
    focusable="false"
    data-prefix="fad"
    data-icon="mobile"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    data-fa-i2svg=""
  >
    <g class="fa-group">
      <path
        class="fa-secondary text-gray-600"
        fill="currentColor"
        d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
      ></path>
      <path
        class="fa-primary text-gray-300"
        fill="currentColor"
        d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
      ></path>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
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