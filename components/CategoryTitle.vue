<template>
  <div class="flex">
    <icon-checked-circle width="22" height="22" iconName="check-circle" class="mr-3"></icon-checked-circle>
    <p
      class="text-sm font-bold self-center uppercase text-purple-900 opacity-60"
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
  props: ["category"]
};
</script>

<style>
</style>