<template>
  <div class="flex m-6 md:mx-20">
    <icon-checked-circle
      width="22"
      height="22"
      iconName="check-circle"
      class="mr-3"
    ></icon-checked-circle>
    <p
      class="
        text-sm
        md:text-base
        font-semibold
        self-center
        uppercase
        text-purple-900
        opacity-60
      "
    >
      all latest {{ category }}
    </p>
  </div>
</template>

<script>
import IconCheckedCircle from "~/components/icons/ui/IconCheckedCircle";
export default {
  components: {
    IconCheckedCircle,
  },
  props: {
    category: String,
  },
};
</script>

<style>
</style>