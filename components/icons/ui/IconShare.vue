<template>
  <svg
    :width="width"
    :height="width"
    :aria-labelledby="iconName"
    aria-hidden="true"
    focusable="false"
    data-prefix="fad"
    data-icon="share"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    data-fa-i2svg=""
  >
    <g class="fa-group">
      <path
        class="fa-secondary"
        fill="currentColor"
        d="M288 136.08v136c-155.08 2.24-221.93 40.73-176.59 185.75 5 16.09-14.42 28.56-28.08 18.63C39.58 444.64 0 383.78 0 322.34c0-152.23 127.37-184.42 288-186.26z"
      ></path>
      <path
        class="fa-primary"
        fill="currentColor"
        d="M506.16 223.7a24 24 0 0 1-2.47 2.47l-176 152C312.3 391.46 288 380.71 288 360V56c0-20.66 24.28-31.46 39.69-18.16l176 152a24 24 0 0 1 2.47 33.86z"
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