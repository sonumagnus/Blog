<template>
  <div class="px-6 lg:px-24 py-2 text-center border-t border-b">
    <h3 class="uppercase text-sm lg:text-lg font-bold mb-4 text-gray-500">
      discover by category
    </h3>
    <ul class="flex flex-wrap justify-between">
      <li v-for="(category, index) of categories" :key="index">
        <NuxtLink
          :to="`/article/category/${category.slug}`"
          class="
            flex
            items-center
            ring-1 ring-gray-300
            bg-gray-100
            hover:bg-gray-200
            duration-150
            ease-in
            rounded my-1
            p-1.5
          "
        >
          <span class="p-1 bg-green-500 rounded text-gray-200">
            <icon-apps
              width="16"
              height="16"
              iconName="gamepad-alt"
              v-if="category.name == 'apps & software'"
            />
            <icon-gaming
              width="16"
              height="16"
              iconName="gamepad-alt"
              v-if="category.name == 'gaming'"
            />
            <icon-toplist
              width="16"
              height="16"
              iconName="clipboard-list"
              v-if="category.name == 'top list'"
            ></icon-toplist>
            <icon-phone
              width="16"
              height="16"
              iconName="mobile"
              v-if="category.name == 'mobile'"
            ></icon-phone>
            <icon-howto
              width="16"
              height="16"
              iconName="bullseye-arrow"
              v-if="category.name == 'how to'"
            ></icon-howto>
          </span>
          <p
            class="
              px-2
              text-gray-800
              opacity-70
              capitalize
              text-sm
              lg:text-base
            "
          >
            {{ category.name }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import IconToplist from "~/components/icons/categoryBtn/IconToplist";
import IconPhone from "~/components/icons/categoryBtn/IconPhone";
import IconHowto from "~/components/icons/categoryBtn/IconHowto";
import IconGaming from "./icons/ui/iconGaming.vue";
import IconApps from "./icons/ui/iconApps.vue";
export default {
  components: {
    IconToplist,
    IconPhone,
    IconHowto,
    IconGaming,
    IconApps,
  },
  data() {
    return {
      categories: [],
    };
  },
  async fetch() {
    this.categories = await this.$content("categories").sortBy("asc").fetch();
  },
};
</script>

<style>
</style>
