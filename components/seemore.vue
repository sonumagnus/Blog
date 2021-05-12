<template>
  <div class="flex justify-between font-semibold uppercase">
    <span class="flex text-xl">
      <icon-check-circle
        width="22"
        height="22"
        iconName="check-circle"
        class="mr-3 text-gray-700"
      ></icon-check-circle>
      <p class="text-sm text-green-900 opacity-50 font-bold self-center">
        latest {{ category }}
      </p>
    </span>
    <nuxt-link :to="`${category}`" class="self-center">
      <span
        class="flex items-center border rounded-xl px-1 mb-0.5 bg-gray-100 text-blue-600 opacity-50"
      >
        <p class="text-xs">See All</p>
        <icon-more
          width="10"
          height="10"
          iconName="chevron-right"
          class="mb-px"
        ></icon-more>
      </span>
    </nuxt-link>
  </div>
</template>

<script>
import IconCheckCircle from "~/components/icons/ui/IconCheckCircle";
import IconMore from "~/components/icons/ui/IconMore";
export default {
  components: { IconMore, IconCheckCircle },
  props: ["category"],
};
</script>

<style>
</style>