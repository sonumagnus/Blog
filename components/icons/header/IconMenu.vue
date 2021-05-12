<template>
  <svg
    :width="width"
    :height="width"
    :aria-labelledby="iconName"
    aria-hidden="true"
    focusable="false"
    data-prefix="fad"
    data-icon="bars"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    data-fa-i2svg=""
    class="svg-inline--fa fa-stream fa-w-16"
  >
    <g class="fa-group">
      <path
        fill="currentColor"
        d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H116a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"
        class="fa-secondary text-green-600"
      ></path>
      <path
        fill="currentColor"
        d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"
        class="opacity-90 text-green-900"
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