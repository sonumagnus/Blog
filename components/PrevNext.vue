<template>
  <div
    class="grid grid-cols-2 gap-8 md:gap-36 text-green-600 mt-8 mb-2 italic font-medium"
  >
    <span>
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="font-bold line-clamp-2"
      >
        <span class="flex text-red-900">
          <icon-prev
            width="20"
            height="20"
            icon-name="long-arrow-left"
            class="mt-0.5 mr-1.5"
          ></icon-prev>
          <p class="font-semibold text-lg">Previous</p>
        </span>
        <p class="hover:underline">
        {{ prev.title }}
        </p>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </span>
    <span class="pr-2">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold line-clamp-2"
      >
        <span class="flex justify-end items-center text-red-900">
          <icon-next
            width="20"
            height="20"
            class="order-2 mt-0.5 ml-1.5"
          ></icon-next>
          <p class="order-1 text-lg font-semibold">Next</p>
        </span>
        <p class="hover:underline">
        {{ next.title }}
        </p>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </span>
  </div>
</template>

<script>
import IconPrev from "~/components/icons/ui/IconPrev";
import IconNext from "~/components/icons/ui/IconNext";
export default {
  components: {
    IconPrev,
    IconNext,
  },
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>